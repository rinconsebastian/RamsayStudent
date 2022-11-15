import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../../store/Students';


class StudentsDetails extends Component {

    componentWillMount() {
        const id = parseInt(this.props.match.params.id, 10) || 0;
        this.props.requestStudentDetail(id);
       
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
                {props.dataStudent? 
                    <dl>
                        <dt>Username</dt>
                        <dd>{props.dataStudent.username}</dd>

                        <dt>First Name</dt>
                        <dd>{props.dataStudent.firstName}</dd>

                        <dt>Last Name</dt>
                        <dd>{props.dataStudent.lastName}</dd>

                        <dt>Age</dt>
                        <dd>{props.dataStudent.age}</dd>

                        <dt>Career</dt>
                        <dd>{props.dataStudent.career}</dd>

                    </dl>

              : <p>Loading..</p>}

            <p className='clearfix text-center'>
                <Link className='btn btn-default pull-left' to={`/students`}>Back</Link>
                {props.dataStudent ?
                    <div>
                        <Link className='btn btn-warning pull-right' to={`/students/${props.dataStudent.id}/edit`}>Edit</Link>
                        <Link className='btn btn-danger pull-right' to={`/students/${props.dataStudent.id}/delete`}>Delete</Link>
                    </div>
                    :
                    <span> </span>
                }
            </p>

            </div>
    );
}



export default connect(
    state => state.students,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(StudentsDetails);
