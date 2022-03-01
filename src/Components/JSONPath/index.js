import { useState } from 'react';
import CustomAceEditor from '../CustomAceEditor';
import './jsonPath.scss';

const JSONPath = () => {
  const [inputPath, setInputPath] = useState('');
  const [inputObject, setInputObject] = useState({});
  const [results, setResults] = useState({});

  return (
    <div className='container-fluid jsonPathContainer'>
      <div className='row pathInput justify-content-center'>
        <div>
          <input className='form-control' type='text' value={inputPath} onChange={(evt) => setInputPath(evt.target.value)} placeholder='Enter json path' />
        </div>
      </div>
      <div className='row objectResultsRow'>
        <div className='col objectCol'>
          JSON Input
          <CustomAceEditor setEditorValue={setInputObject} />
        </div>
        <div className='col resultsCol'>
          Results
          <CustomAceEditor setEditorValue={setResults} />
        </div>
      </div>
    </div>
  )
};

export default JSONPath;
