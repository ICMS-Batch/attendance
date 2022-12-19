import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import * as materialcss from "./css/Material.css";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';


const MaterialCalendar = () => {
  const [value, setValue] = useState(new Date());
  const [highlightedDays, setHighlightedDays] = useState([1,2 ,15]);


  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        variant='mobile'
        orientation='portrait'
        value={value}
        disableFuture
        onChange={(newValue)=>setValue(newValue)}
        renderInput={(params) => {
          <TextField {...params} />;
        }}
        renderDay={(day, _value, DayComponentProps) => {
          const isSelected =
            !DayComponentProps.outsideCurrentMonth &&
            highlightedDays.indexOf(day.getDate()) >= 0;
          return (
            <Badge
              key={day.toString()}
              overlap='circular'
              badgeContent={isSelected ? <div style={{height:'10px', width:'10px', background:'red', borderRadius:'50%'}}></div> : undefined}
            >
              <PickersDay {...DayComponentProps} />
            </Badge>
          );
        }}
      />
    </LocalizationProvider>
  );
};

export default MaterialCalendar;