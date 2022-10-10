import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import React from "@types/react/package.json";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";  // todo хз это с ХОКом пришло попробуй удалить

// HOC
// let AuthRedirectComponent = (props) => {
//     if (!this.props.isAuth) return <Navigate to={'/login'} />;
//     return <Dialogs {...props} />;
// }

let AuthRedirectComponent =  withAuthRedirect(Dialogs);


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;


