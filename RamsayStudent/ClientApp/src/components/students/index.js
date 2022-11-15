import React from 'react';
import { Route } from 'react-router';
import Students from './Students';
import Details from './Students-details';
import Update from './Students-update';
import Delete from './Students-delete';

export default () => (

     <div>
        <Route exact path='/students/' component={Students} />
        <Route exact path='/students/new' component={Update} />
        <Route exact path='/students/:id/detail' component={Details} />
        <Route exact path='/students/:id/edit' component={Update} />
        <Route exact path='/students/:id/delete' component={Delete} />
     </div>   
  
);