import React from 'react';

import appLogo from '../../assets/Images/Logo/Logo.png';
import classes from './Logo.css';

const Logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={appLogo} alt="Fishing" />
    </div>
);

export default Logo;