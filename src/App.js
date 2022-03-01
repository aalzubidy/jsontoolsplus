import Router from './AppRouter';
import { AlertsProvider } from './Contexts/AlertsContext';

function App() {
  return (
    <div className="App">
      <AlertsProvider>
        <Router />
      </AlertsProvider>
    </div>
  );
}

export default App;
