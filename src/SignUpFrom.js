import React from "react";
import "./SignUpForm.css";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        username: "",
        password: "",
        confirmPassword: "",
      },
      noMatch: false,
      formSubmitted: ''
    };
  }

  handleChange = (field) => (event) => {
    const { form } = this.state;
    const newForm = {
      ...form,
      [field]: event.target.value,
    };
    this.setState({ form: newForm });
  };

  handleSubmit = (event) => {
    this.setState({ formSubmitted: true})
    event.preventDefault();
  };

  comparePassword = () => {
    const { password, confirmPassword } = this.state.form;
    if (
      password.length > 0 &&
      confirmPassword.length > 0 &&
      password !== confirmPassword
    ) {
      this.setState({ noMatch: true });
    } else {
      this.setState({ noMatch: false });
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.formSubmitted ? (
          <div className="messageContainer">
            <span>User {this.state.form.username} created</span>
          </div>
        ) : null}
        {this.state.noMatch ? (
          <div className="messageContainer">
            <span>Passwords must match</span>
          </div>
        ) : null}

        <form className="formContainer" onSubmit={this.handleSubmit}>
          <div className="fieldContainer">
            <label>
              Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleChange("username")}
              />
            </label>
          </div>
          <div className="fieldContainer">
            <label>
              Password:
              <input
                type="text"
                value={this.state.password}
                onChange={this.handleChange("password")}
                onBlur={this.comparePassword}
              />
            </label>
          </div>
          <div className="fieldContainer">
            <label>
              Confirm Password:
              <input
                type="text"
                value={this.state.confirmPassword}
                onChange={this.handleChange("confirmPassword")}
                onBlur={this.comparePassword}
              />
            </label>
          </div>

          <input type="submit" value="Submit" className="submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default SignUpForm;
