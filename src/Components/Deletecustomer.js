import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

const Deletecustomer = (p) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const rmvCustomer = () => {
        p.deleteCustomer(p.link);
        handleClose();
    };

    return (
        <div>

        <Button size="small" variant="outlined" color="primary" onClick={handleClickOpen}>
        Delete
      </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={rmvCustomer} color="secondary" autoFocus>
                Delete
            </Button>
            </DialogActions>
        </Dialog>
        </div>
  );
};

export default Deletecustomer;