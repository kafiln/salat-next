import moment from 'moment';
import { useEffect, useState } from 'react';

const useTime = () => {
  const [time, setTime] = useState(moment());

  useEffect(() => {
    let id = setInterval(() => setTime(moment()), 1000);
    return () => clearInterval(id);
  }, []);

  return time;
};

export default useTime;
