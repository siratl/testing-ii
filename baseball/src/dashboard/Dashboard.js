import React from 'react';

function Dashboard(props) {
  return (
    <>
      <h4>Swing Outcome</h4>
      <button onClick={props.Outcome} data-testid="btn-strike">
        Strike
      </button>
      <button onClick={props.Outcome} data-testid="btn-ball">
        Ball
      </button>
      <button onClick={props.Outcome} data-testid="btn-foul">
        Foul
      </button>
      <button onClick={props.Outcome} data-testid="btn-hit">
        Hit
      </button>
    </>
  );
}

export default Dashboard;
