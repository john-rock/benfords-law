import React from 'react'

const Info = () => {
    return (
        <div className="intro-text">
            <p>Benford's Law is a mathematical phenomenon which states that given a large data set, the numbers with the leading digit as 1 occurs about 30.1% of the time, leading digits with 2 will occur 17.6% of the time and each subsequent numberal will decrease in frequency.</p>
            <p>Enter your data set below seperated by a line break to see if it satisifies Benford's Law.</p>
        </div>
    )
}

export default Info
