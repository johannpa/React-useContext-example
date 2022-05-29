import React from 'react';

import Child from "./components/Child";
import RootContext from "./RootContext";

// This object will be passed to the GrandChild component through context
const data = {
  number: 123,
  text: "ABC",
  func: () => {
    alert("Hello!");
  },
};

function App() {
  return (
    // RootContext Provider
    <RootContext.Provider value={data}>
      <div style={{ padding: 30 }}>
        <Child/>
      </div>
    </RootContext.Provider>
  );
}

export default App;
