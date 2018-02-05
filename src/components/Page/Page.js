import React, { PureComponent } from "react";
import Header from '../Header';
import Footer from '../Footer';

export default class Page extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <div className="page-wrap">{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}
