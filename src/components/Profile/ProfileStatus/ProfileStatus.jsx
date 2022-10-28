import React from "react";
import styles from './ProgileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {editMode: false};

    changeStatusTrue = () => {
        this.setState({
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
                        <span onDoubleClick={this.changeStatusTrue}>{this.props.status} </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onBlur={this.changeStatusFalse} type="text" value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;