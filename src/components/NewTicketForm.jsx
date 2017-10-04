import React from "react";

class NewTicketForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleNewTicketFormSubmission = this.handleNewTicketFormSubmission.bind(this);
  }

  handleNewTicketFormSubmission(event) {
    event.preventDefault()
    const {_names, _location, _issue } = this.refs;
    alert(`Data Gathered! ${_names.value} `)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleNewTicketFormSubmission}>
          <input
            ref="_names"
            type="text"
            id="names"
            placeholder="pair names"/>
          <input
            ref="_location"
            type="text"
            id="location"
            placeholder="location"/>
          <textarea
            ref="_issue"
            id="issue"
            placeholder="issue"/>
          <button type="submit">Help!</button>
        </form>
      </div>
    );
  }
}

export default NewTicketForm;
