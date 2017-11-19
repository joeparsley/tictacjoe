import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to={'/about'}>
        nav bar works
        </Link>
      </div>
    );
  }
}

export default NavBar;