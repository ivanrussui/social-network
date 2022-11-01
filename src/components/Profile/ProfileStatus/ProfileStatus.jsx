import React from "react";
import styles from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.newStatusText = React.createRef();
    }

    state = {   // создаем localState
        editMode: false,
        // statusText: `I'm JS Ninja`
    };

    changeStatusTrue = (e) => {
        this.setState({   // setState меняет state
            editMode: true,
            // statusText: e.currentTarget.value
        });
        let statusText = this.newStatusText.current.value;
        this.props.changeStatusText(statusText);
    };

    changeStatusFalse = (e) => {
        this.setState({
            editMode: false,
            // statusText: e.currentTarget.value
        });
        let statusText = this.newStatusText.current.value;
        this.props.changeStatusText(statusText);
    };



    render() {

        // console.log(this.props)
        // debugger

        return (
            <div className={styles.ProfileStatus}>
                {!this.state.editMode &&
                    <div>
                        {/*<span onDoubleClick={this.changeStatusTrue}>{this.props.status}</span>*/}
                        {/*<span onDoubleClick={this.changeStatusTrue} >{this.state.statusText}</span>*/}
                        <span onDoubleClick={this.changeStatusTrue} ref={this.newStatusText}>{this.props.statusText}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        {/*<input autoFocus={true} onBlur={this.changeStatusFalse} type="text" value={this.props.status}/>*/}
                        {/*<input autoFocus={true} type={'text'} onBlur={this.changeStatusFalse}*/}
                        {/*       defaultValue={`I'm JS Ninja`}  value={this.state.statusText}/>*/}
                        <input autoFocus={true} onBlur={this.changeStatusFalse} ref={this.newStatusText} value={this.props.statusText} type="text"/>
                    </div>
                }
            </div>
        )
        // return (
        //     <div className={styles.ProfileStatus}>
        //         {!this.state.editMode &&
        //             <div>
        //                 {/*<span onDoubleClick={this.changeStatusTrue}>{this.props.status}</span>*/}
        //                 <span onDoubleClick={this.changeStatusTrue} >{this.state.statusText}</span>
        //             </div>
        //         }
        //         {this.state.editMode &&
        //             <div>
        //                 {/*<input autoFocus={true} onBlur={this.changeStatusFalse} type="text" value={this.props.status}/>*/}
        //                 <input autoFocus={true} type={'text'} onBlur={this.changeStatusFalse}
        //                        defaultValue={`I'm JS Ninja`}  value={this.state.statusText}/>
        //             </div>
        //         }
        //     </div>
        // )
    }
}

export default ProfileStatus;