import React, { Component } from "react";

class Layout extends Component {
  render() {
    return <div>Hello Cordova App</div>;
  }
  componentDidMount(){
    console.log("DOM has been mounted");
  }
}
export default Layout;
