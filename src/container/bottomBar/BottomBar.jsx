import React from 'react';
import './BottomBar.css';

const BottomBar = () => {
  return (
    <div className="bottom-bar text-center py-3 ">
      <b>&copy; {new Date().getFullYear()} Tescops All rights reserved.</b>
    </div>
  );
}

export default BottomBar;
