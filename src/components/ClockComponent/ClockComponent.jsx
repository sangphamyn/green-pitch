import React from "react";
import styled from "styled-components";

function ClockComponent({ hour, minute }) {
  var newHour = parseInt(hour) + minute / 60;
  newHour = (newHour * 360) / 12 + 180;
  var newMinute = minute * 6 + 180;
  const Clock = styled.div`
    &::after {
      transform: rotate(${newHour}deg);
    }
    &::before {
      transform: rotate(${newMinute}deg);
    }
  `;
  return (
    <div class="clock-container">
      <Clock className="clock" />
    </div>
  );
}

export default ClockComponent;
