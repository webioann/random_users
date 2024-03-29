import React from 'react';
import { useSelector } from 'react-redux';
import '../less/side-bar.less';

function SideBar(props) {
    const sideBarStatus = useSelector((state) => state.dialect.sideBarStatus);
    const themeMode = useSelector((state) => state.dialect.themeMode);

    return (
        <div className={`side-bar-${themeMode} ${sideBarStatus}`}>
            {props.children}
        </div>
    );
}

export default SideBar;
