import React, { Component } from "react";
import { Form } from "../components";

export class FormGeneric extends Component {
  constructor() {
    super();
    this.state = {
      title: "A Form",
      name: "",
      email: "",
      password: ""
    };
  }
  onClickButton(dataForm) {
    // What you should do with the form datas...
    console.log(dataForm);
  }

  render() {
    const { title, name, email, password } = this.state;
    return (
      <div>
        <Form
          title={title}
          inputs={[
            {
              nameInput: "Name",
              typeInput: "text",
              valueInput: name
            },
            {
              nameInput: "Email",
              typeInput: "email",
              valueInput: email
            },
            {
              nameInput: "Password",
              typeInput: "password",
              valueInput: password
            }
          ]}
          onClickButton={this.onClickButton}
        />
      </div>
    );
  }
}
