import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import Addcustomer from './Addcustomer';
import Editcustomer from './Editcustomer';
import Deletecustomer from './Deletecustomer';
import Addtraining from './Addtraining';
import 'react-table/react-table.css';


const Customers = () => {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(res => res.json())
        .then(data => setCustomers(data.content))
        .catch(err => console.error(err));
    }

    const addCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(customer)})
        .then(res => fetchData())
        .catch(err => console.error(err));
    };

    const editCustomer = (customer, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(customer)})
        .then(res => fetchData())
        .catch(err => console.error(err));
    };

    const deleteCustomer = (link) => {
        fetch(link, {method: 'DELETE'})
        .then(res => fetchData())
        .catch(err => console.error(err));
    };

    const saveTraining = (newTraining) => {
        fetch('https://customerrest.herokuapp.com/api/trainings',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTraining)
        }
        )
        .catch(err => console.error(err))
    }

    const columns = [
        {
            Header: 'First name',
            accessor: 'firstname'
        },
        {
            Header: 'Last Name',
            accessor: 'lastname'
        },
        {
            Header: 'Street address',
            accessor: 'streetaddress'
        },
        {
            Header: 'Post code',
            accessor: 'postcode'
        },
        {
            Header: 'City',
            accessor: 'city'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Phone',
            accessor: 'phone'
        },
        {          
            accessor: 'links.href',
            Cell: row => <Editcustomer editCustomer={editCustomer} customer={row.original}/>,
            filterable: false,
            sortable: false,
            width: 80

        },
        {
            
            accessor: 'links.href',
            Cell: row => <Deletecustomer link={row.original.links[0].href} deleteCustomer={deleteCustomer}/>,
            filterable: false,
            sortable: false,
            width: 80
        },
        {
            filterable: false,
            sortable: false,
            width: 80,
            Cell: row => <Addtraining saveTraining={saveTraining} customer={row.original}/>
        },
    ];

    return (
        <div>
            <Addcustomer addCustomer={addCustomer}/>
            <ReactTable data={customers} columns={columns} filterable={true} sortable={true}/>
        </div>
    );

};

export default Customers;