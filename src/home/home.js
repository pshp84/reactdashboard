import React, { useState, useEffect } from "react";
import { HomeStyleWrapper } from "./homeWrapper";

const HomeWrapper = () => {
  const [meanData, setMeanData] = useState("");
  const [medianData, setMedianData] = useState("");
  const [stdDeviationValue, setStdDeviationValue] = useState("");
  const [modeValue, setModeValue] = useState("");
  const [numberValue, setNumberValue] = useState();
  const [arrayValue, setArrayValue] = useState([1, 2, 5, 3, 7, 7, 76]);
  const [reloadJson123, setReloadJson123] = useState(false);
  const [reloadJson4321, setReloadJson4321] = useState(false);
  const [json1234, setJson1234] = useState([
    {
      tile: "Mean",
      defaultValue: "",
      addingValue: meanData,
    },
    {
      tile: "Mode",
      defaultValue: "",
      addingValue: modeValue,
    },
    {
      tile: "StdDiv",
      defaultValue: "",
      addingValue: stdDeviationValue,
    },
    {
      tile: "Median",
      defaultValue: "",
      addingValue: medianData,
    },
  ]);
  const [json4321, setJson4321] = useState([
    {
      tile: "Mean",
      defaultValue: "",
      addingValue: meanData,
    },
    {
      tile: "Mode",
      defaultValue: "",
      addingValue: modeValue,
    },
    {
      tile: "StdDiv",
      defaultValue: "",
      addingValue: stdDeviationValue,
    },
    {
      tile: "Median",
      defaultValue: "",
      addingValue: medianData,
    },
  ]);

  useEffect(() => {
    makeCalculation();

    // eslint-disable-next-line
  }, []);

  const makeCalculation = (data) => {
    json1234[0]["defaultValue"] = meanData;
    json1234[1]["defaultValue"] = modeValue;
    json1234[2]["defaultValue"] = stdDeviationValue;
    json1234[3]["defaultValue"] = medianData;
    setJson1234([...json1234]);
    json4321[0]["defaultValue"] = meanData;
    json4321[1]["defaultValue"] = modeValue;
    json4321[2]["defaultValue"] = stdDeviationValue;
    json4321[3]["defaultValue"] = medianData;
    setJson4321([...json1234]);
    let tempData = data ? data : arrayValue;
    const sum = tempData.reduce((partialSum, a) => partialSum + a, 0);
    let mean = sum / tempData.length;
    setMeanData(mean.toFixed(6));
    json1234[0]["addingValue"] = mean.toFixed(6);
    json4321[0]["addingValue"] = mean.toFixed(6);
    if (tempData.length % 2 !== 0) {
      let getMiddle = Math.ceil(tempData.length / 2);
      setMedianData(tempData[getMiddle - 1].toFixed(6));
      json1234[3]["addingValue"] = tempData[getMiddle - 1].toFixed(6);
      json4321[3]["addingValue"] = tempData[getMiddle - 1].toFixed(6);
    } else {
      let getMiddle = tempData.length / 2;
      let makeSub = (tempData[getMiddle] + tempData[getMiddle - 1]) / 2;
      setMedianData(makeSub.toFixed(6));
      json1234[3]["addingValue"] = makeSub.toFixed(6);
      json4321[3]["addingValue"] = makeSub.toFixed(6);
    }
    let mode = findMode(tempData);
    setModeValue(mode.toFixed(6));
    json1234[1]["addingValue"] = mode.toFixed(6);
    json4321[1]["addingValue"] = mode.toFixed(6);
    let stdDeviation = getStandardDeviation(tempData);
    setStdDeviationValue(stdDeviation.toFixed(6));
    json1234[2]["addingValue"] = stdDeviation.toFixed(6);
    json4321[2]["addingValue"] = stdDeviation.toFixed(6);
    setJson1234([...json1234]);
    setJson4321([...json1234]);
  };

  const addDataInArray = () => {
    if (numberValue) {
      const data = [...arrayValue];
      data.push(Number(numberValue));
      setArrayValue([...data]);
      makeCalculation(data);
    }
  };

  const findMode = (a) => {
    a = a.slice().sort((x, y) => x - y);

    var bestStreak = 1;
    var bestElem = a[0];
    var currentStreak = 1;
    var currentElem = a[0];

    for (let i = 1; i < a.length; i++) {
      if (a[i - 1] !== a[i]) {
        if (currentStreak > bestStreak) {
          bestStreak = currentStreak;
          bestElem = currentElem;
        }

        currentStreak = 0;
        currentElem = a[i];
      }

      currentStreak++;
    }

    return currentStreak > bestStreak ? currentElem : bestElem;
  };

  const getStandardDeviation = (array) => {
    const n = array.length;
    const mean = array.reduce((a, b) => a + b) / n;
    return Math.sqrt(
      array.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n
    );
  };

  return (
    <HomeStyleWrapper>
      <div className="firstPortion">
        SPA app with simple dashboard that displays four tiles, each displaying
        a single statistic (Mean, Median, Std Deviation, Mode) for a dataset
        that is retrived via REST API call. The user should be request new data
        to be loaded and to see the statistics in the tiles update to reflect
        the new dataset.
      </div>
      <div className="secondPortion">
        <div className="circleStyle">
          <div>
            <div className="datasetType">Mean</div>
            <div className="datasetValue">{meanData}</div>
          </div>
        </div>
        <div className="circleStyle">
          <div>
            <div className="datasetType">Median</div>
            <div className="datasetValue">{medianData}</div>
          </div>
        </div>
        <div className="circleStyle">
          <div>
            <div className="datasetType">Std Deviation</div>
            <div className="datasetValue">{stdDeviationValue}</div>
          </div>
        </div>
        <div className="circleStyle">
          <div>
            <div className="datasetType">Mode</div>
            <div className="datasetValue">{modeValue}</div>
          </div>
        </div>
      </div>
      <div className="thirdPortion">
        <div className="inputPortion">
          <div>
            <input
              data-test="number_input"
              type="number"
              placeholder="Enter a number"
              value={numberValue ? numberValue : ""}
              onChange={(e) => setNumberValue(e.target.value)}
            />
          </div>
          <div>
            <button data-test="number_submit" onClick={addDataInArray}>
              Submit
            </button>
          </div>
        </div>
        <div className="inputPortion">
          <div
            className="reloadJsonBtn"
            data-test="reload_1234"
            onClick={() => setReloadJson123(!reloadJson123)}
          >
            Reload JSON-1234 Data
          </div>
          <div
            className="reloadJsonBtn"
            data-test="reload_4321"
            onClick={() => setReloadJson4321(!reloadJson4321)}
          >
            Reload JSON-4321 Data
          </div>
        </div>
        <div className="tableContent">
          {reloadJson123 && (
            <div className="inputPortion">
              <div>
                <h5>JSON-1234 Data</h5>
                <table>
                  <tbody>
                    <tr>
                      <th>Tile</th>
                      <th>Default</th>
                      <th>After adding {numberValue}</th>
                    </tr>
                    {json1234 &&
                      json1234.map((data, i) => (
                        <tr key={i}>
                          <td>{data.tile}</td>
                          <td>{data.defaultValue}</td>
                          <td>{data.addingValue}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {reloadJson4321 && (
            <div className="inputPortion">
              <div>
                <h5>JSON-4321 Data</h5>
                <table>
                  <tbody>
                    <tr>
                      <th>Tile</th>
                      <th>Default</th>
                      <th>After adding {numberValue}</th>
                    </tr>
                    {json4321 &&
                      json4321.map((data, i) => (
                        <tr key={i}>
                          <td>{data.tile}</td>
                          <td>{data.defaultValue}</td>
                          <td>{data.addingValue}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </HomeStyleWrapper>
  );
};

export default HomeWrapper;
