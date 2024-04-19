import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';

export interface SearchableDropdownProps {
  items: string[];
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({ items }) => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Autocomplete
      options={items}
      getOptionLabel={(option) => option} 
      renderInput={(params) => (
        <TextField {...params} label="Select option" />  
      )}
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      freeSolo
    />
  );
}

export default SearchableDropdown;