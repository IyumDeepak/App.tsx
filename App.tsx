import React from 'react';
import Graph from './Graph';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Bank & Merge Co Task 2
        </header>
        <div className="App-content">
          <button className="btn btn-primary Stream-button" />
          <div className="Graph">
            <Graph />
          </div>
        </div>
      </div>
    );
  }
}

export default App;