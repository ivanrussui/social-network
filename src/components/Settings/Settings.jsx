import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const Settings = () => {
    return <h1 style={{paddingLeft: '10px', color: 'indigo'}}>Settings</h1>
};

// HOC
// let AuthRedirectComponent = withAuthRedirect(Settings);

export default compose(
    withAuthRedirect
)(Settings);