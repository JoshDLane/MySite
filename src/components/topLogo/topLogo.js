import React from 'react';
import './topLogo.css'
import MyLogo from '../../assets/img/myLogo';
import '../../assets/rootstyles.css'

const TopLogo = () => {
    return (
        <div className="logo_container include">
            <MyLogo/>
        </div>
    );
};

export default TopLogo;