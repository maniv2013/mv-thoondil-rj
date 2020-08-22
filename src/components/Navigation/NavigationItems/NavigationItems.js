import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Shopping</NavigationItem>
        <NavigationItem link="/">Cart</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default NavigationItems;