import React, { Component } from 'react';

import { Navbar, } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <div>
        <Navbar className='footer' light expand="md">
          Woah check out this nice footer
        </Navbar>
      </div>
    );
  }
}

export default Footer;