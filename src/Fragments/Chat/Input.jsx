import React, {Component} from "react";
import ChatStyles from "../../Components/Chat/Chat.module.css"



class Input extends Component {
  state = {
    text: ""
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({text: ""});
    this.props.onSendMessage(this.state.text);
  }

  render() {
    return (
      <div className={ChatStyles.InputForm}>
        <form onSubmit={e => this.onSubmit(e)} className={ChatStyles.form}>
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Enter your message and press ENTER"
            autoFocus={true}
          />
          <button className={ChatStyles.ChatBtn}>Send</button>
        </form>
      </div>
    );
  }
}

export default Input;
