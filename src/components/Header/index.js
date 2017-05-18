import React from 'react';

import './styles.css';

function Header({ children }) {
    return (
      <div className="header">
        <h2>{ children }</h2>
      </div>
    );
}

export default Header;