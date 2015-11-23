import React from 'react';

const Debug = ({ value, spacing = 2 }) => {
  return (
    <pre className="p1 mt1 mb1" style={ styles.base }>
      { `${ JSON.stringify(value, null, spacing) }` }
    </pre>
  );
};

const styles = {
  base: {
    overflow: 'hidden',
  },
};

export default Debug;
