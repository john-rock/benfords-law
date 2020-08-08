import React from 'react';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../utils/updateAction';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend
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

    const fOne = firstDigitFreq[1] || 0;
    const fTwo = firstDigitFreq[2] || 0;
    const fThree = firstDigitFreq[3] || 0;
    const fFour = firstDigitFreq[4] || 0;
    const fFive = firstDigitFreq[5] || 0;
    const fSix = firstDigitFreq[6] || 0;
    const fSeven = firstDigitFreq[7] || 0;
    const fEight = firstDigitFreq[8] || 0;
    const fNine = firstDigitFreq[9] || 0;

    const chartData = [
        {
            name: '1',
            Frequency: fOne,
        },
        {
            name: '2',
            Frequency: fTwo,
        },
        {
            name: '3',
            Frequency: fThree,
        },
        {
            name: '4',
            Frequency: fFour,
        },
        {
            name: '5',
            Frequency: fFive,
        },
        {
            name: '6',
            Frequency: fSix,
        },
        {
            name: '7',
            Frequency: fSeven,
        },
        {
            name: '8',
            Frequency: fEight,
        },
        {
            name: '9',
            Frequency: fNine,
        },
    ];

    return (
        <div className="component">
            <BarChart
                width={900}
                height={400}
                data={chartData}
                margin={{
                top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <XAxis stroke="white" dataKey="name" />
                <YAxis stroke="white" />
                <Tooltip cursor={false} />
                <Bar dataKey="Frequency" fill="#01AD73" />
                <Legend />
            </BarChart>
        </div>
    );
};

export default Chart;
