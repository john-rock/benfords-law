import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';



function DataForm() {
    const ParseTextarea = ({ value = [], onChange }) => {
        const [text, setText] = useState(value.join("\n",));
      
        const handleChange = (e) => {
          const value = e.target.value;
      
          setText(value);
          onChange(value.split("\n"));
        
          // Do changes here
          
        };
      
        return <textarea name="Data" key="key" onChange={handleChange} value={text} />;
      };

    const { control, handleSubmit } = useForm({
        defaultValues: {
          dataSet: []
        }
      });
      const onSubmit = data => {
        // Store dataSet in array.
        const results = data.dataSet

        // Get the first digit of each item in the dataSet array.
        const firstDigitArr = results.map(function (item, index, array) {
            return item.toString()[0]
        });

        console.log(results);
        console.log(firstDigitArr);

        // Regex to remove period and comma from number
        // .replace(/([.,])(\d\d\d\D|\d\d\d$)/g,'$2')
        
      };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller key="key" name="dataSet" as={ParseTextarea} control={control} />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default DataForm;
