import React, { useState } from 'react';

import Aux from '../Auxilliary/Auxilliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {

    const [sideDrawerVisible, setSideDrawerVisible] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSideDrawerVisible(false);
    }

    const sideDrawerToggleHandler = () => {
        setSideDrawerVisible(!sideDrawerVisible);
    }

    return (
        <Aux>
            <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
            <SideDrawer
                open={sideDrawerVisible}
                closed={sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
}

export default Layout;