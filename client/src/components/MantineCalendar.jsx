import { useState } from 'react';
import { Calendar } from '@mantine/dates';
import { Indicator } from '@mantine/core';


import mantinecss from "./css/Mantine.css";
const MantineCalendar=()=> {
  const [value, setValue] = useState(null);
const logValue = (value)=>{
  setValue(value);
  console.log(value);

}
  return (
    <Calendar
      value={value}
      onChange={value=>logValue(value)}
      renderDay={(date) => {
        const day = date.getDate();
        return (
          <Indicator size={10} color="green" offset={8} disabled={day !== 19}>
            <div>{day}</div>
          </Indicator>
        );
      }}
    />
  );
}

export default MantineCalendar;