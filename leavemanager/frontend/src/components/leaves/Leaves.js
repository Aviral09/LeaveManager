import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLeaves, deleteLeave } from '../../actions/leaves'

export class Leaves extends Component {
    static propTypes = {
        leaves: PropTypes.array.isRequired,
        getLeaves: PropTypes.func.isRequired,
        deleteLeave: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getLeaves()
    }

    render() {
        return (
            <Fragment>
                <h2>Leaves List</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {/* <th>ID</th> */}
                            <th>Designation</th>
                            <th>Name</th>
                            <th>Type of Leave</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Approved</th>
                            <th>Timestamp</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.leaves.map(leave => (
                                <tr key={leave.id}>
                                    <td>{leave.designation}</td>
                                    <td>{leave.name}</td>
                                    <td>{leave.type}</td>
                                    <td>{leave.taken_from}</td>
                                    <td>{leave.taken_till}</td>
                                    {(leave.approved === true)? <td>Yes</td> : <td>No</td>}
                                    <td>{leave.entry_created_at}</td>
                                    <td><button onClick={this.props.deleteLeave.bind(this, leave.id)} className="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    leaves: state.leaves.leaves
})


export default connect(mapStateToProps, { getLeaves, deleteLeave })(Leaves)
