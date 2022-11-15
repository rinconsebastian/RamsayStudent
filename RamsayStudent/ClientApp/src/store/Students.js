import { actions } from 'react-redux-form';

const requestStudentsDataType = 'REQUEST_STUDENTS_DATA';
const receiveStudentsType = 'RECEIVE_STUDENTS_DATA';
const requestStudentDetailType = 'REQUEST_STUDENT_DATA';
const receiveStudentDetailType = 'RECEIVE_STUDENT_DATA';

const requestStudentUpdateType = 'REQUEST_STUDENT_UPDATE';
const receiveStudentUpdateType = 'RECEIVE_STUDENT_UPDATE';

const requestStudentCreateType = 'REQUEST_STUDENT_CREATE';
const receiveStudentCreateType = 'RECEIVE_STUDENT_CREATE';

const requestStudentDeleteType = 'REQUEST_STUDENT_DELETE';
const receiveStudentDeleteType = 'RECEIVE_STUDENT_DELETE';

const initialState = { dataStudents: [], isLoading: false };


export const actionCreators = {
    requestStudentsData: () => async (dispatch) => {

        dispatch({ type: requestStudentsDataType });

        const url = `api/students`;
        const response = await fetch(url);
        const dataStudents = await response.json();

        dispatch({ type: receiveStudentsType, dataStudents });


    },


    requestStudentDetail: id => async (dispatch, getState) => {

        let dataStudent = {
            username: '',
            firstName: '',
            lastName: '',
            age: 0,
            career: '',
        }
        
        dispatch({ type: requestStudentDetailType, id });
        dispatch(actions.change('studentUpdate', dataStudent));
        if(id > 0) {
            const url = `api/students/${id}`;
            const response = await fetch(url);
            dataStudent = await response.json();
        }
       
        
              


          

           
        await dispatch(actions.change('studentUpdate', dataStudent));

        dispatch({ type: receiveStudentDetailType, id, dataStudent });
       

    },

    requestStudentUpdate: ( id, student) => async (dispatch, getState) => {

       

        dispatch({ type: requestStudentUpdateType, id });

        const url = `api/students/${id}`;

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student)
        };
        const response = await fetch(url, requestOptions);
        if (response.ok) {
            const result = "true";
            dispatch({ type: receiveStudentUpdateType, id, result });        
        } else {
            const result = "false";
            dispatch({ type: receiveStudentUpdateType, id, result });

        }

       
      
    },
    requestStudentCreate: (id, student) => async (dispatch, getState) => {

        

        dispatch({ type: requestStudentCreateType, id });

        const url = `api/students/`;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student)
        };
        const response = await fetch(url, requestOptions);
        if (response.ok) {
            const result = "true";
            dispatch({ type: receiveStudentCreateType, id, result });
        } else {
            const result = "false";
            dispatch({ type: receiveStudentCreateType, id, result });

        }



    },
    requestStudentDelete: (id) => async (dispatch, getState) => {

        

        dispatch({ type: requestStudentDeleteType, id });

        const url = `api/students/${id}`;

        const requestOptions = {
            method: 'DELETE' ,
           
        };
        const response = await fetch(url, requestOptions);
        if (response.ok) {
            const result = "true";
            dispatch({ type: receiveStudentUpdateType, id, result });
        } else {
            const result = "false";
            dispatch({ type: receiveStudentUpdateType, id, result });

        }



    },
};

export const reducer = (state, action) => {
  state = state || initialState;

    if (action.type === requestStudentsDataType) {
    return {
        ...state,
        isLoading: true,
        success: "false",
    };
  }

    if (action.type === receiveStudentsType) {
    return {
      ...state,
        dataStudents: action.dataStudents,
      isLoading: false
    };
    }

    if (action.type === requestStudentDetailType) {
        return {
            ...state,
            id: action.id,
            dataStudent: '',
            success: "false",
            isLoading: true
        };
    }

    if (action.type === receiveStudentDetailType) {
        

        return {
            ...state,
            id: action.id,
            dataStudent: action.dataStudent,
            isLoading: false
        };
    }


    if (action.type === requestStudentUpdateType) {
        return {
            ...state,
            id: action.id,
            success: "false",
            isLoading: true
        };
    }

    if (action.type === receiveStudentUpdateType) {


        return {
            ...state,
            id: action.id,
            success: action.result,
            isLoading: false
        };
    }

    if (action.type === requestStudentCreateType) {
        return {
            ...state,
            id: action.id,
            success: "false",
            isLoading: true
        };
    }

    if (action.type === receiveStudentCreateType) {


        return {
            ...state,
            id: action.id,
            success: action.result,
            isLoading: false
        };
    }


    if (action.type === requestStudentDeleteType) {
        return {
            ...state,
            id: action.id,
            success: "false",
            isLoading: true
        };
    }

    if (action.type === receiveStudentDeleteType) {


        return {
            ...state,
            id: action.id,
            success: action.result,
            isLoading: false
        };
    }

  return state;
};
