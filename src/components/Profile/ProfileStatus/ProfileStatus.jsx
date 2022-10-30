import React from "react";
import styles from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {editMode: false}; // создаем localState

    changeStatusTrue = () => {
        this.setState({   // setState меняет state
            editMode: true
        });
    };

    changeStatusFalse = () => {
        this.setState({
            editMode: false
        });
    };

    render() {

        return (
            <div className={styles.ProfileStatus}>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.changeStatusTrue}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true } onBlur={this.changeStatusFalse} type="text" value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;