// import {changeStatusText} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import ProfileStatus from "./ProfileStatus";
// import {getStatus, updateStatus} from "../../../redux/profileReducer";

let mapStateToProps = (state) => {
    return {
        status: state.profilePage.status

        // для моего изменения статуса
        // statusText: state.profilePage.statusText
    }
}

// для моего изменения статуса
// let mapDispatchToProps = (dispatch) => {
//     return {
//         changeStatusText: (statusText) => {
//             dispatch(changeStatusText(statusText));
//         }
//     }
// }

// для моего изменения статуса
// const ProfileStatusContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileStatus);

// const ProfileStatusContainer = connect(mapStateToProps, {getStatus, updateStatus})(ProfileStatus);

// export default ProfileStatusContainer;