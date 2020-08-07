import React from 'react'
import { useStateMachine } from "little-state-machine";
import updateAction from '../utils/updateAction'

const DataView = props => {
    const { state } = useStateMachine(updateAction);

    let fullResults = state.data.dataSet

    return (
        <div>
            <p>Results</p>
            {fullResults.map(result => <div>{result}</div>)}
                {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
        </div>
    )
}

export default DataView
