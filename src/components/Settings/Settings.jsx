import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const Settings = () => {
    return <h1 style={{ color: 'indigo'}}>Settings</h1>
};

// HOC
// let AuthRedirectComponent = withAuthRedirect(Settings);

export default compose(
    withAuthRedirect
)(Settings);