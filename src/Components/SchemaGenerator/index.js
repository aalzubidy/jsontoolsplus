import { useEffect, useState } from 'react';
import toJsonSchema from 'to-json-schema';
import { Tooltip } from '@mui/material';
import { copyTextToClipBoard, downloadFile } from '../../Helpers';
import CustomAceEditor from '../CustomAceEditor';
import styles from './schemaGenerator.module.scss';

const SchemaGenerator = () => {
  const [inputObject, setInputObject] = useState('{}');
  const [outputSchema, setOutputSchema] = useState('{}');

  // Make sure inputs are valide before generating schema
  const [inputsAreValid, setInputsAreValid] = useState(false);
  const [inputObjectAnnotations, setInputObjectAnnotations] = useState([]);

  // Handle run button to generate json schema from input object
  const handleRun = async () => {
    if (inputsAreValid) {
      try {
        const inputObjectJSON = JSON.parse(inputObject);
        const schema = toJsonSchema(inputObjectJSON);
        setOutputSchema(JSON.stringify(schema, null, 2));
      } catch (error) {
        console.log(error);
        alert('Sorry could not generate schema from object. Check console for error details.');
      }
    }
  }

  // Check if the input object is valid
  const validateInputs = () => {
    try {
      const inputObjectJSON = JSON.parse(inputObject);
      if (inputObjectJSON && inputObjectAnnotations?.length === 0) setInputsAreValid(true);
      else setInputsAreValid(false);
    } catch (error) {
      setInputsAreValid(false);
    }
  }

  useEffect(() => {
    validateInputs();
  }, [inputObject]);

  return (
    <div className={`container-fluid ${styles.schemaGeneratorContainer}`}>
      <div className={`row ${styles.pathInput}`}>
        <div>
          <Tooltip title='Generate a JSON schema out of the input object'>
            <button className='btn btn-outline-primary' onClick={handleRun}>Generate Schema</button>
          </Tooltip>
        </div>
      </div>

      <div className={`row ${styles.objectSchemaRow}`}>
        <div className={`col ${styles.objectCol}`}>
          Input JSON Object
          <CustomAceEditor editorValue={inputObject} setEditorValue={setInputObject} setAnnotations={setInputObjectAnnotations} />
        </div>
        <div className={`col ${styles.schemaCol}`}>
          Output JSON Schema
          <CustomAceEditor editorValue={outputSchema} readOnlyMode={true} />
        </div>
      </div>

      <div className={`row ${styles.actionsRow}`}>
        <div className='col'>
          <Tooltip title='Copy schema to clipboard'>
            <i className='btn btn-link bi bi-clipboard' onClick={() => copyTextToClipBoard(outputSchema)} />
          </Tooltip>

          <Tooltip title='Download schema'>
            <i className='btn btn-link bi bi-download' onClick={() => downloadFile(JSON.parse(outputSchema), 'jsontoolsplus-schema')} />
          </Tooltip>
        </div>
      </div>

    </div >
  )
};

export default SchemaGenerator;
