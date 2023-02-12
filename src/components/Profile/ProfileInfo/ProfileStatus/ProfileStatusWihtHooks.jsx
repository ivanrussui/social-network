import React, {useEffect, useState} from "react";
import styles from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const changeStatusTrue = () => {
        setEditMode(true);
    }

    const changeStatusFalse = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div className={styles.ProfileStatus}>
            { !editMode &&
                <div>
                    <span onDoubleClick={changeStatusTrue}>{props.status || 'No Status'}</span>
                </div>
            }
            { editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true}
                           onBlur={changeStatusFalse}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;