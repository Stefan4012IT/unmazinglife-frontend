import React from "react";

const MobileMenu = ({ isOpen }) => {

    const navName = ['logout', 'settings']


    return (
        <div className={`mobile-menu ${isOpen ? 'showMobieMenu' : 'hideMobileMenu'}`}>

        </div>
    )
}

export default MobileMenu;