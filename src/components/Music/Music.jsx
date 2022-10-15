import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Music = () => {
    return <h1 style={{paddingLeft: '10px', color: 'indigo'}}>Music</h1>
};

// HOC
let AuthRedirectComponent = withAuthRedirect(Music);

export default AuthRedirectComponent;
