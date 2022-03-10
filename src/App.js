import { Helmet } from 'react-helmet';
import Router from './AppRouter';
import { AlertsProvider } from './Contexts/AlertsContext';

function App() {
  return (
    <div className="App">
      <AlertsProvider>
        <Helmet>
          <title>JSON Tools Plus</title>
          <meta name="pagename" content="JSON Tools Plus" />
          <meta name="subject" content="JSON Tools Plus" />
          <meta name="keywords" content="JSON, json, JSON Path, JSON Schema, JSON Validator, Schema, Schema Validator, JSON Path Finder, JSON Path Evaluator, JSON Schema Generator, Developer, Javascript, Developer Tools, JSON Beautify, JSON Minify, Beautify, Beautifier, Mini, Minify, JSON Minifier" />
          <meta name="description" content="JSON Developer Tools includes json path finder and evaluator, json validator, json schema generator, json schema validator, json beautifier, and json minifier" />
          <meta name="abstract" content="JSON Developer Tools includes json path finder and evaluator, json validator, json schema generator, json schema validator, json beautifier, and json minifier" />
          <meta name="summary" content="JSON Developer Tools includes json path finder and evaluator, json validator, json schema generator, json schema validator, json beautifier, and json minifier" />
          <meta name="topic" content="JSON Developer Tools includes json path finder and evaluator, json validator, json schema generator, json schema validator, json beautifier, and json minifier" />
          <link rel="bookmark" title="JSON Tools Plus" href="http://www.jsontoolsplus.com" />
        </Helmet>
        <Router />
      </AlertsProvider>
    </div>
  );
}

export default App;
