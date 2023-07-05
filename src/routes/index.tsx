import React from 'react';
import { Router, Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Photo from '../pages/Photo';
import Student from '../pages/Student';
import Students from '../pages/Students';
import NewEditStudents from '../pages/NewEditStudent';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/login" component={Login} />
      <MyRoute exact path="/Student/:id/profile" component={Student} isClosed />
      <MyRoute
        exact
        path="/Student/:id/edit"
        component={NewEditStudents}
        isClosed
      />
      <MyRoute
        exact
        path="/Students/newstudent"
        component={NewEditStudents}
        isClosed
      />
      <MyRoute exact path="/photos/:id" component={Photo} />
      <MyRoute path="/" component={Students} isClosed />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
