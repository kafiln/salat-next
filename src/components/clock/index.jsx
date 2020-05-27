import React from "react";
import { FormattedDate } from "react-intl";
import { H2, H3, Wrapper } from "./styles";

const Clock = ({ displayClock = false, day, time }) => {
  return (
    <Wrapper>
      <H2>
        <FormattedDate
          value={day}
          year="numeric"
          month="long"
          timeZone="UTC"
          day="numeric"
          weekday="long"
        ></FormattedDate>
      </H2>
      {displayClock && (
        <H3>
          <FormattedDate
            value={time}
            hour="numeric"
            minute="numeric"
            second="numeric"
            timeZone="UTC"
          ></FormattedDate>
        </H3>
      )}
    </Wrapper>
  );
};

export default Clock;
