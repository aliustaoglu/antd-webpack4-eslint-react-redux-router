import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import { AppRoute } from 'components/Routes/AppRoute';
import LandingLayout from 'components/Layouts/LandingLayout';
import LandingScreen from 'components/Screens/Landing/LandingScreen';

class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <AppRoute exact path="/" layout={LandingLayout} component={LandingScreen} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Routes;
