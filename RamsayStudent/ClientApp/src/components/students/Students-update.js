import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  Control, Form, actions } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { actionCreators, dispatch } from '../../store/Students';


class StudentsUpdate extends Component {

    componentWillMount() {
        const id = parseInt(this.props.match.params.id, 10) || 0;

        
            this.props.requestStudentDetail(id);
         

       
    }

    
    render() {
        const id = parseInt(this.props.match.params.id, 10) || 0;

        if (this.props.success === "true") {
            if (id > 0) {
                alert("Student updated");
            } else {
                alert("Student saved");
            }

             this.props.history.push('/students');
        }


        return (
            <div>
                <h1>Edit Student</h1>
                {renderForm(this.props,id)}

            </div>
        );
    }
}

    function renderForm(props,id) {

        let request = props.requestStudentUpdate;
        if (id === 0) {
            request = props.requestStudentCreate;

        }

        return (
            <div>
                {props.dataStudent || id === 0  ? 
                <Form
                    model="studentUpdate"
                        onSubmit={(studentUpdate) => handleSubmit(request,id,studentUpdate)}
                    >

                    <div className="form-group">
                        <label htmlFor="studentUpdate.username">Username:</label>
                            
                            <Control.text model="studentUpdate.username" validators={{ required: (val) => val }} className="form-control"  id="student.username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="studentUpdate.firstName">First name:</label>
                            <Control.text model="studentUpdate.firstName" validators={{ required: (val) => val }} className="form-control"  id="student.firstName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="studentUpdate.lastName">Last name:</label>
                            <Control.text model="studentUpdate.lastName" validators={{ required: (val) => val }} className="form-control"  id="studentUpdate.lastName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="studentUpdate.age">Age:</label>
                            <Control.input type="number" model="studentUpdate.age" validators={{ required: (val) => val }} className="form-control"  id="student.age" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="studentUpdate.career">Career:</label>
                            <Control.text model="studentUpdate.career" validators={{ required: (val) => val }} className="form-control"  id="student.career" />
                    </div>
                        <div className="form-group">
                            <p className='clearfix text-center'>
                            <Link className='btn btn-default pull-left' to={`/students/`}>Back</Link>

                            <button type="submit" className="btn btn-primary pull-right">Save Student</button>
                   </p>
                                </div>

                    </Form>
                    : <p>Loading..</p>}

            </div>
        );
    }
    
function handleSubmit(request,id, studentUpdate) {

    request(id, studentUpdate);
 
}


export default connect(
    state => state.students,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(StudentsUpdate);
