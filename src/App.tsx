import React, { lazy, Suspense } from 'react';
import './App.css';

const Example = lazy(() => import('./Example/Example'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>App Example</h1>
      </header>
      <div>
        <strong>Example component</strong>
        <Suspense fallback={<div>Loading</div>}>
          <Example />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
