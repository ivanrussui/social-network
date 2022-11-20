import React from "react";
import styles from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    // для моего изменения статуса
    // constructor(props) {
    //     super(props);
    //     this.newStatusText = React.createRef();
    // }

    state = {       // создаем localState
        editMode: false,
        status: this.props.status
    };

    changeStatusTrue = () => {
        this.setState({   // setState меняет state
            editMode: true
        });

        // для моего изменения статуса
        // let statusText = this.newStatusText.current.value;
        // this.props.changeStatusText(statusText);
    };

    changeStatusFalse = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);

        // для моего изменения статуса
        // let statusText = this.newStatusText.current.value;
        // this.props.changeStatusText(statusText);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }


    render() {
        // console.log(this.props)
        // console.log(this.state)
        return (
            <div className={styles.ProfileStatus}>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.changeStatusTrue}>{this.props.status || 'No Status'}</span>

                        {/*// для моего изменения статуса*/}
                        {/*<input onChange={this.changeStatusTrue} ref={this.newStatusText} value={this.props.statusText} type="text"/>*/}
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.changeStatusFalse} value={this.state.status}/>

                        {/*// для моего изменения статуса*/}
                        {/*<input autoFocus={true} onBlur={this.changeStatusFalse} type="text"/>*/}
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;