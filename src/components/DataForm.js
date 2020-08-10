import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../utils/updateAction';
import { window } from 'browser-monads';
import { randomData, countryPopulation, augustCovidCases, starDistance } from '../datasets/datasets';

const DataForm = () => {
    const stateReset = window.STATE_MACHINE_RESET;

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
    };

    const clearForm = () => {
        stateReset()
        reset();
    };

    const setRandomData = () => {
      setValue('dataSet', randomData);
    };
    const setCountryPopulation= () => {
      setValue('dataSet', countryPopulation);
    };
    const setAugustCovidPopulation= () => {
      setValue('dataSet', augustCovidCases);
    };
    const setStarDistance= () => {
        setValue('dataSet', starDistance);
      };

    return (
        <>
            <div className="component input-form">
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
                    <button className="clear example-btn" onClick={setAugustCovidPopulation}>
                        Total COVID-19 Cases by Country
                        <span>August 2020</span>
                    </button>
                    <button className="clear example-btn" onClick={setStarDistance}>
                        Distance to Brightest Stars
                        <span>In lightyears from Earth</span>
                    </button>
                    <button className="clear example-btn" onClick={setCountryPopulation}>
                        Population of Countries
                    </button>
                    <button className="clear example-btn" onClick={setRandomData}>
                        Random Data
                        <span>Does not follow Benford's Law</span>
                    </button>
                </form>
            </div>
        </>
    );
};

export default DataForm;
