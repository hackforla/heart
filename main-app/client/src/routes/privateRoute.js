/*
 * PrivateRoute
 * Higher Order Component that blocks navigation when the user is not logged in
 * and redirect the user to the login page
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import { UserConsumer } from '../../src/App';

export const PrivateRouteWithoutContext = ({ user, ...rest }) =>
    user ? (
        <Route {...rest} />
    ) : (
        <Redirect
            to={{
                pathname: '/login',
                state: { from: rest.location },
            }}
        />
    );

PrivateRouteWithoutContext.propTypes = {
    user: PropTypes.object,
};

export const PrivateRoute = props => {
    return (
        <UserConsumer>
            {({ user }) => (
                <PrivateRouteWithoutContext user={user} {...props} />
            )}
        </UserConsumer>
    );
};
