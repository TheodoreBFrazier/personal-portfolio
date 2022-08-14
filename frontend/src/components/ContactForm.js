import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "text";
    const name = target.name;
    const message = target.message;

    this.setState({
      [name]: value,
      [message]: value,
    });
  }

  render() {
    return (
      <form action="mailto:theo.frazier@icloud.com">
        <label>
          Your Name:
          <input
            name="senderName"
            type="text"
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Your Message:
          <input
            name="senderName"
            type="text"
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </label>
      </form>
    );
  }
}


export default Contact;