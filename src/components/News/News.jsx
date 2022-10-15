import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const News = () => {
    return <h1 style={{paddingLeft: '10px', color: 'indigo'}}>News</h1>
};

// HOC
let AuthRedirectComponent =  withAuthRedirect(News);

export default AuthRedirectComponent;


