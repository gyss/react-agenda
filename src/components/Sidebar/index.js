import React from 'react';

import './styles.css';

function Sidebar({ children }) {
    return (
      <div className="sidebar">
        { children }
      </div>
    );
}

export default Sidebar;