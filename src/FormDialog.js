import Dialog from "@material-ui/core/Dialog";
import {DialogContent} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Api from './api';

const FormDialog = props =>  {
  const { open, onClose } = props;
  const [data, setData ] = useState({name: '', email: '', password: ''});
  const [formError, setFormError] = useState({name: false, email: false, password: false});

  const formHasErrors = (errors) => {
    let error = false;
    Object.values(errors).forEach(value => {
      if(value) {
        error = true;
      }
    });
    return error;
  }

  const sendData = () => {
    const errors = {};
    Object.keys(data).forEach(key => {
      errors[key] = data[key] === '';
    });
    if(!formHasErrors(errors)) {
      Api.createUser(data).then(res => {
        onClose(false);
      })
    }else{
      setFormError(errors);
    }
  }

  const capitalize = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleClose = () => {
    onClose(false);
  };

  const handleChange = (key, newValue) => {
    setData({...data, [key]: newValue });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle >Add a new User!</DialogTitle>
      <DialogContent>
        {Object.keys(data).map(key => (
          <TextField fullWidth helperText={formError[key] ? `A user needs a ${capitalize(key)}`: ''} required error={formError[key]} value={data[key]} label={capitalize(key)} onChange={e => handleChange(key, e.target.value)}/>
        ))}
        <Button style={{marginTop: 50}} variant="contained" color="primary" onClick={sendData}>
          Send
        </Button>
      </DialogContent>

    </Dialog>
  );
}

export default FormDialog;