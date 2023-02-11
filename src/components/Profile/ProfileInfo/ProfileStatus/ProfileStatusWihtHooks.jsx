import React, {useState} from "react";
import styles from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {
    let startedSetState = useState(false);
    debugger
    let editMode = startedSetState[0];
    let setEditMode = startedSetState[1];
    return (
        <div className={styles.ProfileStatus}>
            {!editMode &&
                <div>
                    <span>{props.status || 'No Status'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input value={'state.status'}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;