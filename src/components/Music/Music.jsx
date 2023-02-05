import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const Music = () => {
    return <h1 style={{color: 'indigo'}}>Music</h1>
};

// HOC
// let AuthRedirectComponent = withAuthRedirect(Music);

export default compose(
    // withAuthRedirect
)(Music);