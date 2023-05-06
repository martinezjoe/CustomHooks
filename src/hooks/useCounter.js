import { useState, useRef } from 'react';

const useCounter = (initialValue = 0) => {
  const [value, setValue] = useState(initialValue);

  const updateCount = useRef({
    increment: () =>
      setValue((oldValue) => (oldValue < 10 ? oldValue + 1 : oldValue)),
    decrement: () =>
      setValue((oldValue) => (oldValue > 0 ? oldValue - 1 : oldValue)),
    reset: () => setValue(0),
  });

  return [value, updateCount.current];
};

export default useCounter;
