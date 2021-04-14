import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

function App() {
  const [color, setColor] = useState('lightblue');
  const [hidden, setHidden] = useState(false);

  const pickerStyles = {
    default: {
      picker: {
        position: 'absolute',
        bottom: '60px',
        left: '-40px',
      },
    },
  };

  return (
    <div style={{ background: color }} className='page'>
      <div className='page__container'>
        {hidden && (
          <SketchPicker
            color={color}
            styles={pickerStyles}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        )}
        <button className='btn' onClick={() => setHidden(!hidden)}>
          {hidden ? 'Close Color Picker' : 'Open Color Picker'}
        </button>
      </div>
    </div>
  );
}

export default App;
