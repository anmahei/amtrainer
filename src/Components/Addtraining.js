import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';



const Addtraining = (props) => {

    const [open, setOpen] = useState(false);
    const [training, setTraining] = useState({date:'', activity:'', duration:'', customer:''});

    const handleClickOpen = () => {
        setTraining({...training, customer: props.customer.links[0].href})
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const handleChange = (event) => {
        setTraining({...training, [event.target.name]: event.target.value})
      }

      const addTraining = () => {
          props.saveTraining({...training, date: `${training.date}:00.000+02:00`})
          handleClose();
      }

    return (
        <div>
         <Button size="small" variant="outlined" color="primary" onClick={handleClickOpen}>
        Add
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New training</DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            id="datetime-local"
            margin="dense"
            name="date"
            type="datetime-local"
            onChange={e => handleChange(e)}
            value={training.date}
            label="Date and time"
            fullWidth
            />
            <TextField
              margin="dense"
              name="duration"
              value={training.duration}
              onChange={e => handleChange(e)}
              label="Duration"
              fullWidth
        
          />
          <TextField
            margin="dense"
            name="activity"
            value={training.activity}
            onChange={e => handleChange(e)}
            label="Activity"
            fullWidth
          
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addTraining} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog> 
        </div>
    );
};

export default Addtraining;

