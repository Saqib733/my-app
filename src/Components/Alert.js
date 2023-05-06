import React from 'react'

const Alert = (props) => {
  return (
    <div style={{height:"50px"}}>
  {props.Alert && <div>
    <div className={`alert alert-${props.Alert.Type}`} role="alert">
   <strong>{props.Alert.Message}</strong>
</div>
   </div>}
   </div>
  );
}

export default Alert
