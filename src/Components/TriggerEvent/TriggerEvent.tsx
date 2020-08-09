import React from 'react';
import IFTTT from 'ifttt-webhooks-channel';
import './TriggerEvent.css';

function TriggerEvent (props: any) {
  const ifttt = new IFTTT("Put your key here");

  const post = async () => await ifttt.post(props.event, ["a", "b", "c"]).catch(console.error);

  return (
    <div className="trigger-event">
      <div className="trigger-event-text" onClick={post}>{props.name}</div>
    </div>
  );
}

export default TriggerEvent;
