import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Editcustomer = (p) => {
    const body = p.customer;
    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] = React.useState({
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: ''
    });

    const handleClickOpen = () => {
        setCustomer({
            firstname: body.firstname, 
            lastname: body.lastname, 
            streetaddress: body.streetaddress,
            postcode: body.postcode,
            city: body.city,
            email: body.email,
            phone: body.phone
        });

        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const inputChanged = (e) => {
        setCustomer({...customer, [e.target.name]: e.target.value});
    };

    const customerChange = () => {
        p.editCustomer(customer, body.links[0].href);
        handleClose();
    };

    return (
        <div>
        <Button size="small" color="primary" variant="outlined" onClick={handleClickOpen}>Edit</Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New customer</DialogTitle>
            <DialogContent>
            <DialogContentText>
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                name="firstname"
                value={customer.firstname}
                label="First name"
                onChange={e => inputChanged(e)}
                fullWidth
            />
            <TextField
                margin="dense"
                name="lastname"
                value={customer.lastname}
                label="Last name"
                onChange={e => inputChanged(e)}
                fullWidth
            />
            <TextField
                margin="dense"
                name="streetaddress"
                value={customer.streetaddress}
                label="Street address"
                onChange={e => inputChanged(e)}
                fullWidth
            />
             <TextField
                margin="dense"
                name="postcode"
                value={customer.postcode}
                label="Post code"
                onChange={e => inputChanged(e)}
                fullWidth
            />
             <TextField
                margin="dense"
                name="city"
                value={customer.city}
                label="City"
                onChange={e => inputChanged(e)}
                fullWidth
            />
            <TextField
                margin="dense"
                name="email"
                value={customer.email}
                label="Email-address"
                onChange={e => inputChanged(e)}
                fullWidth
            />
            <TextField
                margin="dense"
                name="phone"
                value={customer.phone}
                label="Phonenumber"
                onChange={e => inputChanged(e)}
                fullWidth
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={customerChange} color="primary">
                Save
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
    };

export default Editcustomer;