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
            return item.toString()[0];
        });

        var firstDigitFreq = {};

        for (var i = 0; i < firstDigitArr.length; i++) {
          var num = firstDigitArr[i];
          firstDigitFreq[num] = firstDigitFreq[num] ? firstDigitFreq[num] + 1 : 1;
        }
        
        const fOne = firstDigitFreq[1]
        const fTwo = firstDigitFreq[2]
        const fThree = firstDigitFreq[3]
        const fFour = firstDigitFreq[4]
        const fFive = firstDigitFreq[5]
        const fSix = firstDigitFreq[6]
        const fSeven = firstDigitFreq[7]
        const fEight = firstDigitFreq[8]
        const fNine = firstDigitFreq[9]

        console.log(results);
        console.log(firstDigitArr);
        console.log(`There are ${fOne} 1s`);
        console.log(`There are ${fTwo} 2s`);
        console.log(`There are ${fThree} 3s`);
        console.log(`There are ${fFour} 4s`);
        console.log(`There are ${fFive} 5s`);
        console.log(`There are ${fSix} 6s`);
        console.log(`There are ${fSeven} 7s`);
        console.log(`There are ${fEight} 8s`);
        console.log(`There are ${fNine} 9s`);
        
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
