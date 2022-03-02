import { useEffect, useState } from 'react';
import { JSONPath as JSONPathPlus } from 'jsonpath-plus';
import { Tooltip } from '@mui/material';
import { copyTextToClipBoard, downloadFile } from '../../Helpers';
import CustomAceEditor from '../CustomAceEditor';
import SavedJSONPaths from '../SavedJSONPaths';
import './jsonPath.scss';

const JSONPath = () => {
  const [inputPath, setInputPath] = useState('');
  const [inputObject, setInputObject] = useState('{}');
  const [outputResults, setOutputResults] = useState('{}');

  // Make sure inputs are valide before running json path plus
  const [inputsAreValid, setInputsAreValid] = useState(false);
  const [inputObjectAnnotations, setInputObjectAnnotations] = useState([]);

  // Handle auto run
  const [autoRun, setAutoRun] = useState(false);

  // Handle saved results in memory
  const [savedResults, setSavedResults] = useState([]);

  // Handle saved results dialog
  const [savedJSONPathsDialog, setSavedJSONPathsDialog] = useState(false);

  // Handle run button to evaluate the path against the input object
  const handleRun = async (validated = inputsAreValid) => {
    if (validated) {
      const inputObjectJSON = JSON.parse(inputObject);
      let results = '';
      try {
        results = await JSONPathPlus({ path: inputPath, json: inputObjectJSON });
        const resultsString = JSON.stringify(results, null, 2);
        setOutputResults(resultsString);
      } catch (error) {
        if (typeof (results) === 'string') setOutputResults(results);
        else setOutputResults(error.message || '');
      }
    }
  }

  // Check if the input path and input json object are valid
  const validateInputs = () => {
    try {
      const inputObjectJSON = JSON.parse(inputObject);
      if (inputObjectJSON && inputPath && inputObjectAnnotations?.length === 0) {
        setInputsAreValid(true);
        if (autoRun) handleRun(true);
      }
      else setInputsAreValid(false);
    } catch (error) {
      setInputsAreValid(false);
    }
  }

  useEffect(() => {
    validateInputs();
  }, [inputPath, inputObject, autoRun]);

  return (
    <div className='container-fluid jsonPathContainer'>

      <SavedJSONPaths
        openDialog={savedJSONPathsDialog}
        setOpenDialog={setSavedJSONPathsDialog}
        savedResults={savedResults}
        setInputPath={setInputPath}
        setInputObject={setInputObject}
        setOutputResults={setOutputResults}
      />

      <div className='row pathInput'>
        <div className='col col-sm-10'>
          <input className='form-control' type='text' value={inputPath} onChange={(evt) => setInputPath(evt.target.value)} placeholder='Enter json path' />
        </div>
        <div className='col col-sm-2'>
          <button className='mx-1 btn btn-outline-primary' onClick={handleRun}>Run</button>
          <button className={`mx-1 btn btn-outline-${autoRun ? 'success' : 'danger'}`} onClick={() => setAutoRun(!autoRun)}>Auto Run: {autoRun ? 'On' : 'Off'}</button>
        </div>
      </div>


      <div className='row objectResultsRow'>
        <div className='col objectCol'>
          JSON Input
          <CustomAceEditor editorValue={inputObject} setEditorValue={setInputObject} setAnnotations={setInputObjectAnnotations} />
        </div>
        <div className='col resultsCol'>
          Results
          <CustomAceEditor editorValue={outputResults} readOnlyMode={true} />
        </div>
      </div>

      <div className='row actionsRow'>
        <div className='col'>
          <Tooltip title='Copy results to clipboard'>
            <i className='btn btn-link bi bi-clipboard' onClick={() => copyTextToClipBoard(outputResults)} />
          </Tooltip>

          <Tooltip title='Download results'>
            <i className='btn btn-link bi bi-download' onClick={() => downloadFile(JSON.parse(outputResults), 'jsontoolsplus-path')} />
          </Tooltip>

          <Tooltip title='Use results as input'>
            <i className='btn btn-link bi bi-arrow-repeat' onClick={() => setInputObject(outputResults)} />
          </Tooltip>

          <Tooltip title='Save temporarily in memory (removed after refersh)'>
            <i className='btn btn-link bi bi-memory' onClick={() => setSavedResults([...savedResults, { inputPath, inputObject, outputResults }])} />
          </Tooltip>
        </div>
      </div>

      <div className='row savedResultsRow'>
        {savedResults.length > 0 ?
          <div>
            <button className='btn btn-outline-primary' onClick={() => setSavedJSONPathsDialog(true)}>View Temporarily Stored JSON Paths</button>
          </div>
          : ''}
      </div>

    </div >
  )
};

export default JSONPath;
