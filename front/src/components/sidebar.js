import React from "react";

const Sidebar = (props) => {
	let styleClass = "main-sidebar";
	styleClass += props.collapsed ? " collapsed" : "";
	return (
		<asset className={styleClass}>
			<div>This is sidebar</div>
		</asset>
	)
}

export default Sidebar;
