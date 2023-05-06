import React from 'react'

const Alert = (props) => {
  return (
  props.Alert && <div>
    <div className={`alert alert-${props.Alert.Type}`} role="alert">
   <strong>{props.Alert.Message}</strong>
</div>
   </div>
  );
}

export default Alert
