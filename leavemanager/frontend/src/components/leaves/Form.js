import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLeave } from '../../actions/leaves';

export class Form extends Component {
    state = {
        designation: '',
        name: '',
        type: '',
        taken_from: '',
        taken_till: '',
        approved: 0,
    }

    static propTypes = {
        addLeave: PropTypes.func.isRequired,
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        const { designation, name, type, taken_from, taken_till, approved } = this.state;
        const leave = { designation, name, type, taken_from, taken_till, approved };
        this.props.addLeave(leave);
        this.setState({
            designation: '',
            name: '',
            type: '',
            taken_from: '',
            taken_till: '',
            approved: 0,
        });
    };

    render() {
        const { designation, name, type, taken_from, taken_till, approved } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add leave</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Designation</label>
                        <input
                            className="form-control"
                            type="text"
                            name="designation"
                            onChange={this.onChange}
                            value={designation}
                        />
                    </div>
                    <div className="form-group">
                        <br />
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Type of Leave</label>
                        <br />
                        <select className="form-select" name="type" value={type} onChange={this.onChange}>
                            <option value="CL">CL</option>
                            <option value="EL">EL</option>
                            <option value="CCL">CCL</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <br />
                        <label>From (YYYY-MM-DD)</label>
                        <input
                            className="form-control"
                            type="text"
                            name="taken_from"
                            onChange={this.onChange}
                            value={taken_from}
                        />
                    </div>
                    <div className="form-group">
                        <br />
                        <label>To (YYYY-MM-DD)</label>
                        <input
                            className="form-control"
                            type="text"
                            name="taken_till"
                            onChange={this.onChange}
                            value={taken_till}
                        />
                    </div>
                    <div className="form-group">
                        <br />
                        <label>Approved?</label>
                        <br />
                        <select className="form-select" name="approved" value={approved} onChange={this.onChange}>
                            <option value="0">No</option>
                            <option value="1">Yes</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addLeave })(Form);