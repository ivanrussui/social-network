import React from "react";
import styles from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {   // создаем localState
        editMode: false,
        statusText: `I'm JS Ninja`
    };

    changeStatusTrue = (e) => {
        this.setState({   // setState меняет state
            editMode: true,
            statusText: e.currentTarget.value
        });
    };

    changeStatusFalse = (e) => {
        this.setState({
            editMode: false,
            statusText: e.currentTarget.value
        });
    };

    render() {
        console.log(this.state.statusText)
        return (
            <div className={styles.ProfileStatus}>
                {!this.state.editMode &&
                    <div>
                        {/*<span onDoubleClick={this.changeStatusTrue}>{this.props.status}</span>*/}
                        <span onDoubleClick={this.changeStatusTrue} >{this.state.statusText}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        {/*<input autoFocus={true} onBlur={this.changeStatusFalse} type="text" value={this.props.status}/>*/}
                        <input autoFocus={true} type={'text'} onBlur={this.changeStatusFalse}
                               defaultValue={`I'm JS Ninja`}  value={this.state.statusText}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;