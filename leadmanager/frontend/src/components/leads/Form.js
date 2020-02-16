import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addLead } from '../../actions/leads';

const Form = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        message: ""
    })

    const dispatch = useDispatch();

    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        dispatch(addLead(state))
    }
    
    return (
        <div>
            <div className="card card-body mt-4 mb-4">
                <h2>Add Lead</h2>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={onChange}
                            value={state.name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={onChange}
                            value={state.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="message"
                            onChange={onChange}
                            value={state.message}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
