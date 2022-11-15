import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../../store/Students';


class Students extends Component {

    componentWillMount() {
        this.props.requestStudentsData();
    }

    


    render() {
        return (
            <div>
                <h1>Students</h1>
                {renderTable(this.props)}
                
            </div>
        );
    }
}

function renderTable(props) {
    return (
        <div>
        <Link className='btn btn-success ' to={`/students/new`}>Add student</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Career</th>
                    <th>Actions</th>

                </tr>
            </thead>
          <tbody>
                {props.dataStudents.map(student =>
                    <tr key={student.id}>
                        <td>{student.username}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.age}</td>
                        <td>{student.career}</td>
                        <td>
                            <Link className='btn btn-primary ' to={`/students/${student.id}/detail`}>View</Link>
                            <Link className='btn btn-warning ' to={`/students/${student.id}/edit`}>Edit</Link>
                            <Link className='btn btn-danger ' to={`/students/${student.id}/delete`}>Delet</Link>

                            </td>

                    </tr>
                )}
            </tbody>
            </table>
            </div>
    );
}



export default connect(
    state => state.students,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Students);


