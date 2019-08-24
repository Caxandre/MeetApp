import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import MeetupCreate from '~/pages/Meetup/MeetupCreate';
import MeetupDetails from '~/pages/Meetup/MeetupDetails';
import MeetupUpdate from '~/pages/Meetup/MeetupUpdate';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard/:page?" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/addmeetup" exact component={MeetupCreate} isPrivate />
      <Route path="/meetup/:id" component={MeetupDetails} isPrivate />
      <Route path="/editmeetup/:id" exact component={MeetupUpdate} isPrivate />
    </Switch>
  );
}
