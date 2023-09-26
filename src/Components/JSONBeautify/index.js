import { useEffect, useState } from 'react';
import { Tooltip } from '@mui/material';
import { copyTextToClipBoard, downloadFile } from '../../Helpers';
import CustomAceEditor from '../CustomAceEditor';
import styles from './jsonBeautify.module.scss';

const JSONBeautify = () => {
  const [inputObject, setInputObject] = useState('{}');
  const [outputObject, setOutputObject] = useState('{}');

  // Make sure inputs are valide before beautifying object
  const [inputsAreValid, setInputsAreValid] = useState(false);
  const [inputObjectAnnotations, setInputObjectAnnotations] = useState([]);

  // Handle run button to beautify input json object
  const handleRun = async () => {
    if (inputsAreValid) {
      try {
        const inputObjectJSON = JSON.parse(inputObject);
        setOutputObject(JSON.stringify(inputObjectJSON, null, 2));
      } catch (error) {
        console.log(error);
        alert('Sorry could not beautify input object. Check console for error details.');
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
    <div className={`container-fluid ${styles.jsonBeautifyContainer}`}>
      <div className={`row ${styles.pathInput}`}>
        <div>
          <Tooltip title='Generate a JSON schema out of the input object'>
            <button className='btn btn-outline-primary' onClick={handleRun}>Beautify Input Object</button>
          </Tooltip>
        </div>
      </div>

      <div className={`row ${styles.objectSchemaRow}`}>
        <div className={`col ${styles.objectCol}`}>
          Input JSON Object
          <CustomAceEditor editorValue={inputObject} setEditorValue={setInputObject} setAnnotations={setInputObjectAnnotations} />
        </div>
        <div className={`col ${styles.schemaCol}`}>
          Output JSON Object
          <CustomAceEditor editorValue={outputObject} readOnlyMode={true} />
        </div>
      </div>

      <div className={`row ${styles.actionsRow}`}>
        <div className='col'>
          <Tooltip title='Copy output object to clipboard'>
            <i className='btn btn-link bi bi-clipboard' onClick={() => copyTextToClipBoard(outputObject)} />
          </Tooltip>

          <Tooltip title='Download output object'>
            <i className='btn btn-link bi bi-download' onClick={() => downloadFile(JSON.parse(outputObject), 'jsontoolsplus-beautify')} />
          </Tooltip>
        </div>
      </div>

    </div >
  )
};

export default JSONBeautify;
