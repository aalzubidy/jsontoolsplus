import { useEffect, useState } from 'react';
import Ajv from 'ajv';
import { Tooltip } from '@mui/material';
import CustomAceEditor from '../CustomAceEditor';
import styles from './schemaValidator.module.scss';

const SchemaValidator = () => {
  const ajv = new Ajv();

  const [inputObject, setInputObject] = useState('{}');
  const [inputSchema, setInputSchema] = useState('{}');

  const [validationStatus, setValidationStatus] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);

  // Make sure inputs are valide before running ajv check
  const [inputsAreValid, setInputsAreValid] = useState(false);
  const [inputObjectAnnotations, setInputObjectAnnotations] = useState([]);
  const [inputSchemaAnnotations, setInputSchemaAnnotations] = useState([]);

  // Handle run button to validate object against schema
  const handleRun = async () => {
    if (inputsAreValid) {
      try {
        const inputObjectJSON = JSON.parse(inputObject);
        const inputSchemaJSON = JSON.parse(inputSchema);

        const validate = ajv.compile(inputSchemaJSON)
        const valid = validate(inputObjectJSON);

        if (valid) {
          setValidationStatus('Valid');
          setValidationErrors([]);
        }

        if (!valid) {
          setValidationStatus('Invalid');
          setValidationErrors(validate.errors);
        }
      } catch (error) {
        console.log(error);
        alert('Sorry something went wrong with schema validation. Check console for error details.');
      }
    }
  }

  // Check if the input object and input schema are valid
  const validateInputs = () => {
    try {
      const inputObjectJSON = JSON.parse(inputObject);
      const inputSchemaJSON = JSON.parse(inputSchema);
      if (inputObjectJSON && inputSchemaJSON && inputObjectAnnotations?.length === 0 && inputSchemaAnnotations?.length === 0) setInputsAreValid(true);
      else setInputsAreValid(false);
    } catch (error) {
      setInputsAreValid(false);
    }
  }

  useEffect(() => {
    validateInputs();
  }, [inputObject, inputSchema]);

  return (
    <div className={`container-fluid ${styles.schemaValidatorContainer}`}>
      <div className={`row ${styles.pathInput}`}>
        <div>
          <Tooltip title='Validate object against schema'>
            <button className='btn btn-outline-primary' onClick={handleRun}>Validate Schema</button>
          </Tooltip>
        </div>
      </div>

      <div className={`row ${styles.objectSchemaRow}`}>
        <div className={`col ${styles.objectCol}`}>
          JSON Object
          <CustomAceEditor editorValue={inputObject} setEditorValue={setInputObject} setAnnotations={setInputObjectAnnotations} />
        </div>
        <div className={`col ${styles.schemaCol}`}>
          JSON Schema
          <CustomAceEditor editorValue={inputSchema} setEditorValue={setInputSchema} setAnnotations={setInputSchemaAnnotations} />
        </div>
      </div>

      <div className={`row ${styles.validationResultsRow}`}>
        <div>Schema Validation Results: {validationStatus}
          {validationStatus === 'Valid' ? <i className={`bi bi-check2-circle ${styles.validStatus}`} /> : ''}
          {validationStatus === 'Invalid' ? <i className={`bi bi-exclamation-octagon ${styles.invalidStatus}`} /> : ''}
        </div>

        {validationErrors.length > 0 ?
          <div>
            <ul>
              {validationErrors.map((item) => {
                return <li key={Math.random()}>{item.instancePath} - {item.schemaPath} - {item.message}</li>
              })}
            </ul>
          </div>
          : ''}
      </div>

    </div >
  )
};

export default SchemaValidator;
