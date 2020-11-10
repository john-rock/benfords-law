import React from "react";
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import { Bar, XAxis, YAxis, ComposedChart, Line, Tooltip, Legend, ResponsiveContainer } from "recharts";
import FileSaver from "file-saver";
import { getPngData } from "recharts-to-png";

const Chart = () => {
  const { state } = useStateMachine(updateAction);

  let rawResults = state.data.dataSet || [];
  let fullResults = rawResults.filter(function(e){return e}) || [];
  let fullResultsCount = fullResults.length || 0;

  const fullResultsNumberArray = fullResults.map(function (n) {
    n = n.replace(/,/g, "");
    return parseInt(n);
  });

  let fullResultsMax =
    Math.max.apply(Math, fullResultsNumberArray) || 0;
  let fullResultsMin =
    Math.min.apply(Math, fullResultsNumberArray) || 0;

  let orderOfMagnitude = Math.floor(
    Math.LOG10E * Math.log(fullResultsMax - fullResultsMin) || 0
  );

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

  // Get percent occurance
  let percentOneFull = (firstDigitFreq[1] / fullResultsCount) * 100 || 0;
  let percentOne = percentOneFull.toFixed(1) || 0;

  let percentTwoFull = (firstDigitFreq[2] / fullResultsCount) * 100 || 0;
  let percentTwo = percentTwoFull.toFixed(1) || 0;

  let percentThreeFull = (firstDigitFreq[3] / fullResultsCount) * 100 || 0;
  let percentThree = percentThreeFull.toFixed(1) || 0;

  let percentFourFull = (firstDigitFreq[4] / fullResultsCount) * 100 || 0;
  let percentFour = percentFourFull.toFixed(1) || 0;

  let percentFiveFull = (firstDigitFreq[4] / fullResultsCount) * 100 || 0;
  let percentFive = percentFiveFull.toFixed(1) || 0;

  let percentSixFull = (firstDigitFreq[6] / fullResultsCount) * 100 || 0;
  let percentSix = percentSixFull.toFixed(1) || 0;

  let percentSevenFull = (firstDigitFreq[7] / fullResultsCount) * 100 || 0;
  let percentSeven = percentSevenFull.toFixed(1) || 0;

  let percentEightFull = (firstDigitFreq[8] / fullResultsCount) * 100 || 0;
  let percentEight = percentEightFull.toFixed(1) || 0;

  let percentNineFull = (firstDigitFreq[9] / fullResultsCount) * 100 || 0;
  let percentNine = percentNineFull.toFixed(1) || 0;

  const [chart, setChart] = React.useState();

  const handleDownload = React.useCallback(async () => {
    // Send the chart to getPngData
    const pngData = await getPngData(chart);
    // Use FileSaver to download the PNG
    FileSaver.saveAs(pngData, "test.png");
  }, [chart]);

  const chartData = [
    {
      name: "1",
      Occurance: percentOne,
      bL: 30.1
    },
    {
      name: "2",
      Occurance: percentTwo,
      bL: 17.6
    },
    {
      name: "3",
      Occurance: percentThree,
      bL: 12.5
    },
    {
      name: "4",
      Occurance: percentFour,
      bL: 9.7
    },
    {
      name: "5",
      Occurance: percentFive,
      bL: 7.9
    },
    {
      name: "6",
      Occurance: percentSix,
      bL: 6.7
    },
    {
      name: "7",
      Occurance: percentSeven,
      bL: 5.8
    },
    {
      name: "8",
      Occurance: percentEight,
      bL: 5.1
    },
    {
      name: "9",
      Occurance: percentNine,
      bL: 4.6
    },
  ];


  return (
    <div className="component chart">
      <div className="info-container">
        <div className="inner sub-component">
          Number of Entries:<span>{fullResultsCount}</span>
        </div>
        <div className="inner sub-component">
          Max value:<span>{fullResultsMax.toLocaleString("en")}</span>
        </div>
        <div className="inner sub-component">
          Min value:<span>{fullResultsMin.toLocaleString("en")}</span>
        </div>
        <div className="inner sub-component">
          Order of Mangnitude:<span>{orderOfMagnitude}</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        className="sub-component"
        ref={(ref) => setChart(ref)}
        width={900}
        height={400}
        throttleDelay={150}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" fill="rgba(255,255,255, .2)" />
        <YAxis
          label={{
            value: "Leading Digit Frequency (%)",
            angle: -90,
            position: "center",
            fill: "rgba(255,255,255, .2)",
            dx: -25,
          }}
          type="number"
          domain={[0, 40]}
          fill="rgba(255,255,255, .2)"
        />
        
        <Bar dataKey="Occurance" name="Entered Data Distribution" fill="#01AD73" unit="%">
        </Bar>
        <Line type='monotone' name="Benford's Law Distribution" dataKey='bL' stroke='#fff' dot={false} strokeWidth={2} strokeDasharray="5 5" unit="%"/>
        <Legend />
        <Tooltip cursor={false}/>
      </ComposedChart>
      </ResponsiveContainer>
      <span>
        <button onClick={handleDownload}>Download</button>
      </span>
    </div>
  );
};

export default Chart;
