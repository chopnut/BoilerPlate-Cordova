import React, { Component } from "react";

class Layout extends Component {
  render() {
    return <div>
      <div>Kiddo</div>
      <div>
        Paypal Basic Test
      </div>
    </div>;
  }
  componentDidMount(){
    console.log("DOM has been mounted");
  }
}
export default Layout;
