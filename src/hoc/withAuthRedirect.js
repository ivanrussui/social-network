import React from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

// classes HOC
export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'} />;
            return <Component {...this.props} />
        }
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedAuthRedirectComponent;
}

// functional HOC
// export const withAuthRedirect = (Component) => {
//
//     let RedirectComponent = () => {
//         if (!this.props.isAuth) return <Navigate to={'/login'} />;
//         return <Component {...this.props} />;
//     }
//     let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
//     return ConnectedAuthRedirectComponent;
// }
