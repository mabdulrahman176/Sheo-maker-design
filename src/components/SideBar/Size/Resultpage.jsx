import React from 'react';

const Resultpage = ({ location }) => {
  const result = location.state.result;

  return (
    <div>
      <h2>Result:</h2>
      {result}
    </div>
  );
};

export default Resultpage;