import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StateMachineProvider, createStore } from 'little-state-machine';
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

        return (
            <textarea
                name="Data"
                key="key"
                onChange={handleChange}
                value={text}
            />
        );
    };

    const { control, handleSubmit } = useForm({
        defaultValues: {
            dataSet: [],
        },
    });
    

    const onSubmit = (data) => {

        action(data);

    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    key="key"
                    name="dataSet"
                    as={ParseTextarea}
                    control={control}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default DataForm;
