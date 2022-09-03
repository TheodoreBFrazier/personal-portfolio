import React from "react";

import axios from "axios";

const API_PATH =
  "http://localhost:1992/react-contact-form/api/contact/index.php";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      message: "",
      //Adding two properties to state on to check if email sent and other to check if error
      mailSent: false,
      error: null,
    };
  }

  //form submit handler being added

  handleFormSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      url: `${API_PATH}`,
      headers: { "content-type": "application/json" },
      data: this.state,
    })
      .then((result) => {
        this.setState({
          mailSent: result.data.sent,
        });
      })
      .catch((error) => this.setState({ error: error.message }));
  };

  render() {
    return (
      <div className="form">
        <p>Contact Me</p>
        <br />
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

            <br />

            <label>Last Name</label>
            <br />
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              //State of input and changing input
              value={this.state.lname}
              onChange={(event) => this.setState({ lname: event.target.value })}
            />

            <br />

            <label>Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              //State of input and changing input
              value={this.state.email}
              onChange={(event) => this.setState({ email: event.target.value })}
            />

            <br />

            <label>Subject</label>
            <br />
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

            <input
              type="submit"
              onClick={(event) => this.handleFormSubmit(event)}
              value="Submit"
            />
            <div>
              {this.state.mailSent && (
                <div>Mail sent! You'll hear from me soon!</div>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
