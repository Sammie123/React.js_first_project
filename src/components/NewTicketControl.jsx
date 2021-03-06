import React from "react";
import NewTicketForm from "./NewTicketForm";

class NewTicketControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {formVisibleOnPage: false};
    this.handleDisplayingNewTicketForm = this.handleDisplayingNewTicketForm.bind(this);
  }

  handleDisplayingNewTicketForm(event) {
    console.log("New Ticket button was clicked");
    this.setState({formVisibleOnPage: true});

  }

  render() {
    const formVisibleOnPage = this.state.formVisibleOnPage;
    let formAreaContent = null;
    if(formVisibleOnPage) {
      formAreaContent = <NewTicketForm/>
    } else {
      formAreaContent = <button onClick={this.handleDisplayingNewTicketForm}>Request Help!</button>
    }
    return(
      <div>{formAreaContent}</div>
    );
  }
}

export default NewTicketControl;
