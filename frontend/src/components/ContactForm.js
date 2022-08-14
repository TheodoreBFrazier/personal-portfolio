import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      message: "",
    };
  }

  //form submit handler being added

  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="form">
        <p>Contact Me</p>
        <div>
          <form action="/action_page.php">
            <label>First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              //State of input and changing input
              value={this.state.fname}
              onChange={(event) => this.setState({ fname: event.target.value })}
            />
            <label>Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              //State of input and changing input
              value={this.state.lname}
              onChange={(event) => this.setState({ lname: event.target.value })}
            />

            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              //State of input and changing input
              value={this.state.email}
              onChange={(event) => this.setState({ email: event.target.value })}
            />

            <label>Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              //State of input and changing input

              onChange={(event) =>
                this.setState({ message: event.target.value })
              }
              value={this.state.message}
            ></textarea>
            <input type="submit" onClick={event => this.handleFormSubmit(event)} value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
