import { useEffect, useState } from 'react';
import { Tooltip } from '@mui/material';
import { Helmet } from 'react-helmet';
import Paths from '../../AppRouter/Paths';
import { copyTextToClipBoard, downloadFile } from '../../Helpers';
import CustomAceEditor from '../CustomAceEditor';
import './jsonMinify.scss';

const JSONMinify = () => {
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
        setOutputObject(JSON.stringify(inputObjectJSON, null, 0));
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
    <div className='container-fluid jsonMinifyContainer'>
      <Helmet>
        <title>JSON Tools Plus - JSON Minify</title>
        <meta name="pagename" content="JSON Tools Plus - JSON Minify" />
        <meta name="subject" content="JSON Tools Plus - JSON Minify" />
        <meta name="url" content={`http://www.jsontoolsplus.com${Paths.jsonMinify}`} />
        <meta name="identifier-URL" content={`http://www.jsontoolsplus.com${Paths.jsonMinify}`} />
      </Helmet>

      <div className='row pathInput'>
        <div>
          <Tooltip title='Generate a JSON schema out of the input object'>
            <button className='btn btn-outline-primary' onClick={handleRun}>Minify Input Object</button>
          </Tooltip>
        </div>
      </div>

      <div className='row objectSchemaRow'>
        <div className='col objectCol'>
          Input JSON Object
          <CustomAceEditor editorValue={inputObject} setEditorValue={setInputObject} setAnnotations={setInputObjectAnnotations} />
        </div>
        <div className='col schemaCol'>
          Output JSON Object
          <CustomAceEditor editorValue={outputObject} readOnlyMode={true} />
        </div>
      </div>

      <div className='row actionsRow'>
        <div className='col'>
          <Tooltip title='Copy output object to clipboard'>
            <i className='btn btn-link bi bi-clipboard' onClick={() => copyTextToClipBoard(outputObject)} />
          </Tooltip>

          <Tooltip title='Download output object'>
            <i className='btn btn-link bi bi-download' onClick={() => downloadFile(JSON.parse(outputObject, null, 0), 'jsontoolsplus-minify')} />
          </Tooltip>
        </div>
      </div>

    </div >
  )
};

export default JSONMinify;
