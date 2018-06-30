import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export const AppRoute = props => {
  const { component: Component, authentication, layout: Layout, ...rest } = props;
    return (
      <Route
        {...rest}
        render={props => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    );

};

AppRoute.propTypes = {
  component: PropTypes.func,
  layout: PropTypes.func
};
