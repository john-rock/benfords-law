import React from 'react';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../utils/updateAction';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
  

const Chart = () => {
    const { state } = useStateMachine(updateAction);

    let fullResults = state.data.dataSet || [];

    // Get the first digit of each item in the dataSet array.
    const firstDigitArr = fullResults.map(function (item, index, array) {
        return item.toString()[0];
    });

    const firstDigitFreq = {};

    // Get frequency of first digits
    for (let i = 0; i < firstDigitArr.length; i++) {
        let num = firstDigitArr[i];
        firstDigitFreq[num] = firstDigitFreq[num] ? firstDigitFreq[num] + 1 : 1;
    }

    const fOne = firstDigitFreq[1];
    const fTwo = firstDigitFreq[2];
    const fThree = firstDigitFreq[3];
    const fFour = firstDigitFreq[4];
    const fFive = firstDigitFreq[5];
    const fSix = firstDigitFreq[6];
    const fSeven = firstDigitFreq[7];
    const fEight = firstDigitFreq[8];
    const fNine = firstDigitFreq[9];

    const chartData = [
        {
            name: '1',
            freq: fOne,
        },
        {
            name: '2',
            freq: fTwo,
        },
        {
            name: '3',
            freq: fThree,
        },
        {
            name: '4',
            freq: fFour,
        },
        {
            name: '5',
            freq: fFive,
        },
        {
            name: '6',
            freq: fSix,
        },
        {
            name: '7',
            freq: fSeven,
        },
        {
            name: '8',
            freq: fEight,
        },
        {
            name: '9',
            freq: fNine,
        },
    ];

    console.log(chartData)

    return (
        <div>
            <p>Results</p>
            <BarChart
                width={500}
                height={300}
                data={chartData}
                margin={{
                top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="freq" fill="#8884d8" />
            </BarChart>
            {/* {firstDigitArr.map(result => <div>{result}</div>)} */}
            {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
        </div>
    );
};

export default Chart;
