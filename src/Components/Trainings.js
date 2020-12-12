import React, {useState, useEffect} from 'react';
import moment from 'moment';
import Deletetraining from './Deletetraining';
import ReactTable from 'react-table';

const Trainings = () => {

    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(res => res.json())
        .then(data => setTrainings(data))
        .catch(err => console.log(err));

    };

    const deleteTraining = (link) => {
        fetch(link, {method: 'DELETE'})
        .then(res => fetchData())
        .catch(err => console.error(err));
    };

    const columns = [
        {
            Header: 'Date',
            accessor: 'date',
            Cell: row => moment(row.value).format('dddd, DD/MM/YY, hh:mm a')
        },
        {
            Header: 'Duration',
            accessor: 'duration'
        },
        {
            Header: 'Activity',
            accessor: 'activity'
        },
        {
            Header: 'First name',
            accessor: 'customer.firstname'
        },
        {
            Header: 'Last name',
            accessor: 'customer.lastname'
        },
        {
            accessor: 'id',
            Cell: row => <Deletetraining deleteTraining={deleteTraining} id={row.value}/>,
            width: 100,
            filterable: false,
            sortable: false
       
        }
    ];

    return (
        <div>
            <ReactTable data={trainings} columns={columns} filterable={true} sortable={true}/>
        </div>
    );
};

export default Trainings;