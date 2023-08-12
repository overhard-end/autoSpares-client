import { Input, Loading } from '@nextui-org/react';
import { useWindowSize } from '@uidotdev/usehooks';

import React, { useState } from 'react';

export const Search = () => {
  const size = useWindowSize();
  const [inProcess, setInProcess] = useState(false);
  const [lastCall, setLastCall] = useState(0);
  const [lastCallTimer, setLastCallTimer] = useState();

  function debounce(fn, timeout) {
    return function perform(...args) {
      let previousCall = lastCall;
      setLastCall(Date.now());
      if (previousCall && lastCall - previousCall <= timeout) {
        clearTimeout(lastCallTimer);
      }
      setLastCallTimer(setTimeout(() => fn(...args), timeout));
    };
  }

  const handleOnChange = (e) => {
    function fetchQuery() {
      console.log('Fetching query');
      setInProcess(false);
    }
    setInProcess(true);
    debounce(fetchQuery, 1000).apply();
  };

  return (
    <Input
      contentRight={inProcess && <Loading size="xs" />}
      onChange={(e) => handleOnChange(e)}
      rounded
      bordered
      aria-label="Search"
      placeholder="Поиск товара"
      css={{ width: '50%', padding: '0px 10px', maxWidth: '400px', minWidth: '200px' }}
    />
  );
};
