// import React from 'react';
import {Navigate} from "react-router-dom";
import React from "@types/react/package.json";

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'} />;

            return <Component {...this.props} />
        }
    }
    return RedirectComponent;
}

// functional
// export const withAuthRedirect = (Component) => {
//     if (!this.props.isAuth) return <Navigate to={'/login'} />;
//     return <Component {...this.props} />;
// }
