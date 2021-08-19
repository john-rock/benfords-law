import React from 'react';
import Sources from './Sources';

const Info = () => {
  return (
    <div className='intro-text'>
      <p>
        Benford's Law is a mathematical phenomenon which states that given a
        large data set, the numbers with the leading digit as 1 occurs about
        30.1% of the time, leading digits with 2 will occur 17.6% of the time
        and each subsequent numeral will decrease in frequency. It has been used
        to detect fruad and has been shown that it applies to different data
        sets including electricity bills, stock prices, and population numbers.
      </p>
      <p>
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='https://en.wikipedia.org/wiki/Benford%27s_law'
        >
          Learn more about Benford's Law.
        </a>
      </p>
      <Sources />
    </div>
  );
};

export default Info;
