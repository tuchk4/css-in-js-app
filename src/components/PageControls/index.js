import React from 'react';

export default ({ onChange, values, disabled }) => (
  <div className="controlls-space controlls-inputs">
    <div className="controlls-item">Component props:</div>
    <div className="controlls-item">
      <input
        className="Checkbox"
        disabled={disabled}
        id="Primary"
        type="checkbox"
        checked={values.isPrimary}
        onChange={e => onChange('isPrimary', e.target.checked)}
      />
      <label htmlFor="Primary">Is Primary: </label>
    </div>
    <div className="controlls-item">
      <label htmlFor="compText">Text: </label>
      <input
        disabled={disabled}
        id="compText"
        type="text"
        placeholder="Children"
        value={values.text}
        onChange={e => onChange('children', e.target.value)}
      />
    </div>
  </div>
);
