import React from 'react';

const Header = (props) => {
  return (
    <header className="main-header">
			<a href="javascript:void(0)" className="logo" onClick={props.toggleSidebar}>
	   		<span className="logo-mini"><b>S</b>MT</span>
	   		<span className="logo-large"><b>Save</b>MyTime</span>
			</a>
    </header>
  )
}

export default Header;
