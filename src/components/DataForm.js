import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../utils/updateAction';

const DataForm = () => {
    const { action } = useStateMachine(updateAction);
    

    const ParseTextarea = ({ value = [], onChange }) => {
        const [text, setText] = useState(value.join('\n'));

        const handleChange = (e) => {
            const value = e.target.value;

            setText(value);
            onChange(value.split('\n'));

        };

        const placeholder = "1\n2\n3\n4\n5\n6\n7\n8\n9"

        return (
            <textarea
                name="Data"
                id="Data"
                key="1"
                onChange={handleChange}
                value={text}
                placeholder={placeholder}
                ref={register}
            />
        );
    };

    const { control, handleSubmit, register, setValue, reset } = useForm({
        defaultValues: {
            dataSet: [],
        },
    });

    const onSubmit = (data) => {
        action(data);
        console.log(data)
    };

    function clearForm() {
      window.STATE_MACHINE_RESET();
      reset();
    }

    const cityPopulation = ["8,336,817", "3,979,576", "2,693,976", "2,320,268", "1,680,992", "1,584,064 "]

    // function setTextArea(dataSet) {
    //   // action({ dataSet: cityPopulation})
    //   // var textarea = document.getElementById("Data");
    //   // textarea.value = cityPopulation.join("\n");
    //   setValue(dataSet, cityPopulation)

    // }



    console.log(cityPopulation) 
    
    return (
        <>
            <div className="component">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        key="key"
                        name="dataSet"
                        as={ParseTextarea}
                        control={control}
                    />
                    <button className="submit" type="submit">Submit</button>
                    <button className="clear" onClick={clearForm}>Clear Data</button> 
                    <button className="clear" onClick={() => setValue("dataSet", cityPopulation)}>Set Data</button>
                </form>
            </div>
        </>
    );
};

export default DataForm;
