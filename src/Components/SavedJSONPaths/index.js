import { Modal, Tooltip } from '@mui/material';
import './SavedJSONPaths.scss';

const SavedJSONPaths = (props) => {

  const { openDialog, setOpenDialog, savedResults, setInputPath, setInputObject, setOutputResults } = props;

  return (
    <Modal
      open={openDialog}
      onClose={() => setOpenDialog(false)}
      disableEscapeKeyDown
      hideBackdrop
    >
      <div className='container-fluid savedJSONPathsContainer'>
        <div className='row savedResultsRow'>
          <div>
            Temporarily Saved JSON Paths Results:
            <ul>
              {savedResults.map((item) => {
                return <li key={Math.random()}>
                  {item.inputPath}
                  <Tooltip title='Reload saved item'>
                    <i className='btn btn-link bi bi-play-circle' onClick={() => {
                      setInputPath(item.inputPath);
                      setInputObject(item.inputObject);
                      setOutputResults(item.outputResults);
                    }} />
                  </Tooltip>
                </li>
              })}
            </ul>
          </div>
        </div>

        <div className='row actions'>
          <div>
            <button className='btn btn-outline-primary' onClick={() => setOpenDialog(false)}>Close Window</button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default SavedJSONPaths;