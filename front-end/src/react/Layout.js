import React, { Component } from "react";
import axios from "axios";

class Layout extends Component {
  render() {
    return <div>
      <div>Kiddo</div>
      <div>
        Paypal Basic Test
      </div>
    </div>;
  }
  testPaypal(){
    
  }
  componentDidMount(){
    console.log("DOM has been mounted");
  }
}
export default Layout;
