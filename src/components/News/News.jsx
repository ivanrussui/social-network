import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const News = () => {
    return <h1 style={{color: 'indigo'}}>News</h1>
};

// HOC
// let AuthRedirectComponent =  withAuthRedirect(News);

export default compose(
    // withAuthRedirect
)(News);


