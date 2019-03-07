import React from 'react';

function Display(props) {
  return (
    <div>
      <>
        <span>Strikes</span>
        &nbsp; &nbsp; &nbsp;
        <span>Balls</span>
      </>
      <br />
      <strong>
        <span data-testid="strikes">{props.strikes}</span>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <span data-testid="balls">{props.balls}</span>
      </strong>
    </div>
  );
}

export default Display;
