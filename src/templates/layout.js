import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div
        style={{
          width: "100%",
          maxWidth: "1140px",
          padding: "0 15px",
          margin: "0 auto",
          boxSizing: "border-box"
        }}
      >
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}
