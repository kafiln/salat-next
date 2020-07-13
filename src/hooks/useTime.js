import { useEffect, useState } from 'react';
import { localTime } from '../utils';

const useTime = () => {
  const [time, setTime] = useState(localTime());

  useEffect(() => {
    let id = setInterval(() => setTime(localTime()), 1000);
    return () => clearInterval(id);
  }, []);

  return time;
};

export default useTime;
