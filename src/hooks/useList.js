import { useState } from 'react';

const useList = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  // Push new value to list

  const push = (element) => {
    setValue((oldValue) => [...oldValue, element]);
  };

  // Remove value from list

  const remove = (index) => {
    setValue((oldValue) => oldValue.filter((_, i) => i !== index));
  };

  // Is list empty ? true / false

  const isEmpty = () => value.length === 0;

  // Clear List

  const clear = () => {
    setValue([]);
  };

  // Sort List

  const sortList = () => {
    setValue((oldValue) => oldValue.filter((v) => v.length > 0));
    setValue((oldValue) => oldValue.sort());
  };

  // Revert List

  const reverseList = () => {
    setValue((oldValue) => oldValue.filter((v) => v.length > 0));
    setValue((oldValue) => oldValue.reverse());
  };

  return {
    value,
    setValue,
    push,
    remove,
    isEmpty,
    clear,
    sortList,
    reverseList,
  };
};

export default useList;
