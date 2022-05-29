import React, { useContext } from 'react';

import RootContext from '../RootContext';

const GrandChild = (props) => {
    // useContext hook
    const data = useContext(RootContext);

  return (
    <>
      <p>{data.number}</p>
      <p>{data.text}</p>
      <p><button onClick={data.func}>A Button</button></p>
    </>
  )
}

export default GrandChild

