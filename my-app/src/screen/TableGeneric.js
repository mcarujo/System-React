import React, { Component } from "react";
import { Table } from "../components";

export class TableGeneric extends Component {
  constructor() {
    super();
    this.state = {
      title: "A Table",
      headers: ["Name", "Age", "City", "Email"],
      lines: [
        ["Joao", "25", "Sao Paulo", "joao@gmail.com"],
        ["Jose", "24", "Rio de Janeiro", "jose@yahoo.com"],
        ["Maria", "36", "Belo Horizonte", "maria@hotmail.com"],
        ["Luiza", "35", "Salvador", "luiza@outlook.com"]
      ]
    };
  }

  render() {
    const { title, headers, lines } = this.state;
    return (
      <div>
        <Table title={title} headers={headers} lines={lines} />
      </div>
    );
  }
}
