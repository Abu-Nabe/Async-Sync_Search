import logo from './logo.svg';

import AsyncSearch from './Search/asyncSearch';
import SyncSearch from './Search/syncSearch';

import './App.css';

function App() {
  return (
    <div className="App h-screen bg-gray-200 flex items-center">
      <AsyncSearch/>
      <SyncSearch/>
    </div>
  );
}

export default App;
