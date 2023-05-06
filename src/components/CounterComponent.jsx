import React from 'react';
import useCounter from '../hooks/useCounter';

const CounterComponent = () => {
  const [count, setCount] = useCounter(0);

  return (
    <div>
      <h2>
        Custom Hook, useCounter. <br /> The Count is:{' '}
      </h2>
      <p
        style={{
          padding: '2.5rem',
          border: '2px dashed black',
          width: '20%',
          margin: '0.5rem auto',
          fontSize:'1rem'
        }}
      >
        {count}
      </p>
      <p style={{ fontSize: '12px' }}>
        This is a simple custom hook, which allow increment or decrement per
        unit, is limit is 0 to 10. You can also reset it. If you want know more
        that, you can see the logic inside the custom hook.
      </p>
      <button
        className="btn btn-success m-2"
        onClick={() => setCount.increment()}
      >
        {' '}
        Increment{' '}
      </button>
      <button className="btn btn-info m-2" onClick={() => setCount.decrement()}>
        {' '}
        Decrement{' '}
      </button>
      <button className="btn btn-danger m-2" onClick={() => setCount.reset()}>
        {' '}
        Reset{' '}
      </button>
    </div>
  );
};

export default CounterComponent;
