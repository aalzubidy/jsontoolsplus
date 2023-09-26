import 'ace-builds';
// import AceEditor from 'react-ace';
import dynamic from 'next/dynamic';
// import ace from 'ace-builds/src-noconflict/ace';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-solarized_light';
import 'ace-builds/src-noconflict/theme-monokai';

import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-beautify';
// eslint-disable-next-line import/no-webpack-loader-syntax
// import jsonWorkerUrl from "file-loader!ace-builds/src-noconflict/worker-json";
// ace.config.setModuleUrl("ace/mode/json_worker", jsonWorkerUrl);

const AceEditor = dynamic(() => import('react-ace'), {
  ssr: false,
});

const CustomAceEditor = (props) => {

  const { editorValue, setEditorValue, setAnnotations, readOnlyMode } = props;

  const handleOnChange = (newValue) => {
    if (setEditorValue) setEditorValue(newValue);
  }

  const handleOnValidate = (annotations) => {
    if (setAnnotations) setAnnotations(annotations);
  }

  return (
    <AceEditor
      setOptions={{ useWorker: false }}
      mode="json"
      theme="solarized_light"
      onChange={handleOnChange}
      onValidate={handleOnValidate}
      name={`aceEditor-${Math.random()}`}
      width='100%'
      height='56vh'
      enableBasicAutocompletion
      enableLiveAutocompletion
      enableSnippets
      fontSize='1rem'
      tabSize={2}
      value={editorValue}
      readOnly={readOnlyMode}
    />
  )
}

export default CustomAceEditor;
