import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../../store/Students';


class StudentsDelete extends Component {

    componentWillMount() {
        const id = parseInt(this.props.match.params.id, 10) || 0;
        this.props.requestStudentDetail(id);
       
    }




    render() {

        if (this.props.success === "true") {
            
                alert("Student deleted");
           

            this.props.history.push('/students');
        }


        return (
            <div>
              
                {renderTable(this.props)}

            </div>
        );
    }
}

function renderTable(props) {
    return (
        <div>
            {props.dataStudent ? 
                <div>
                <h2>Are you sure to delete {props.dataStudent.username}</h2>
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
                </div>

              : <p>Loading..</p>}

            <p className='clearfix text-center'>
                <Link className='btn btn-default pull-left' to={`/students`}>Back</Link>
                {props.dataStudent ?
                    <button className='btn btn-danger pull-right' onClick={() => handleDelete(props.requestStudentDelete,props.dataStudent.id)}>Delete</button>
                    :
                    <span> </span>
                }
            </p>

            </div>
    );
}

function handleDelete(request, id) {
   request(id);

}


export default connect(
    state => state.students,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(StudentsDelete);
