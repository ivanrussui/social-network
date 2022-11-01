import styles from './ProfileStatus.module.css';
import {changeStatusText} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import ProfileStatus from "./ProfileStatus";

let mapStateToProps = (state) => {
    return {
        statusText: state.profilePage.statusText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeStatusText: (statusText) => {
            dispatch(changeStatusText(statusText));
        }
    }
}

const ProfileStatusContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileStatus);

export default ProfileStatusContainer;