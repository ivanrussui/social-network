import React from "react";
import styles from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    // для моего изменения статуса
    // constructor(props) {
    //     super(props);
    //     this.newStatusText = React.createRef();
    // }

    state = { editMode: false }; // создаем localState

    changeStatusTrue = () => {
        this.setState({   // setState меняет state
            editMode: true,
        });

        // для моего изменения статуса
        // let statusText = this.newStatusText.current.value;
        // this.props.changeStatusText(statusText);
    };

    changeStatusFalse = () => {
        this.setState({
            editMode: false,
        });

        // для моего изменения статуса
        // let statusText = this.newStatusText.current.value;
        // this.props.changeStatusText(statusText);
    };


    render() {
        // console.log(this.state)
        return (
            <div className={styles.ProfileStatus}>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.changeStatusTrue}>{this.props.status}</span>

                        {/*// для моего изменения статуса*/}
                        {/*<input onChange={this.changeStatusTrue} ref={this.newStatusText} value={this.props.statusText} type="text"/>*/}
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.changeStatusFalse} type="text" value={this.props.status}/>

                        {/*// для моего изменения статуса*/}
                        {/*<input autoFocus={true} onBlur={this.changeStatusFalse} type="text"/>*/}
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;