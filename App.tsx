import * as React from 'react';
import './style.css';

export default function App() {
  const [isChecked, setChecked] = React.useState(false);
  return (
    <div>
      <button
        onClick={() => setChecked(previousState => !previousState)}
        aria-checked={isChecked}
        className={`checkbox ${isChecked ? 'on' : ''}`}
        role='switch'
      ></button>
    </div>
  );
}
