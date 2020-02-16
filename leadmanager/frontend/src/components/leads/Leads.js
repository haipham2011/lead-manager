import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads';

const Leads = ({}) => {
    const leads = useSelector(state => state.leads.leads);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLeads());
    }, [getLeads])

    return (
        <Fragment>
            <h1>Leads</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Message</th>
                        <th/>
                    </tr>
                </thead>
                <tbody>
                    { leads.map(lead => {
                        const { id, email, name, message } = lead;
                        return(
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{message}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm" onClick={() => {dispatch(deleteLead(id));
                                    }}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Fragment>
    );
}

export default Leads;