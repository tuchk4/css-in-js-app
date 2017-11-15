import React from 'react';
import Box from 'react-layout-components';

export default ({ onChange, values }) => (
  <Box className="controlls-space controlls-inputs">
    <Box>Component props:</Box>
    <Box>
      <input
        className="Checkbox"
        id="Primary"
        type="checkbox"
        checked={values.isPrimary}
        onChange={e => onChange('isPrimary', e.target.checked)}
      />
      <label className="CheckboxLabel" htmlFor="Primary">
        Primary
      </label>
    </Box>
    <Box>
      <input
        type="text"
        placeholder="Children"
        value={values.text}
        onChange={e => onChange('children', e.target.value)}
      />
    </Box>
  </Box>
);
