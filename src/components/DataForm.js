import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../utils/updateAction';
import { usCityPopulation } from '../datasets/usCityPopulation';

const DataForm = () => {
    const { action } = useStateMachine(updateAction);

    const ParseTextarea = ({ value = [], onChange }) => {
        const [text, setText] = useState(value.join('\n'));

        const handleChange = (e) => {
            const value = e.target.value;

            setText(value);
            onChange(value.split('\n'));
        };

        const placeholder = '1\n2\n3\n4\n5\n6\n7\n8\n9';

        return (
            <textarea
                name="Data"
                id="Data"
                key="1"
                onChange={handleChange}
                value={text}
                placeholder={placeholder}
            />
        );
    };

    const { control, handleSubmit, setValue, reset } = useForm({
        defaultValues: {
            dataSet: [],
        },
    });

    const onSubmit = (data) => {
        action(data);
        console.log(data);
    };

    const clearForm = () => {
        window.STATE_MACHINE_RESET();
        reset();
    };

    const setCityPopulation = () => {
        setValue('dataSet', usCityPopulation);
    };

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
                    <button className="submit" type="submit">
                        Submit
                    </button>
                    <button className="clear" onClick={clearForm}>
                        Clear Data
                    </button>
                    <p className="example-data">Example Data:</p>
                    <button className="clear" onClick={setCityPopulation}>
                        2019 U.S. City Population
                    </button>
                </form>
            </div>
        </>
    );
};

export default DataForm;
