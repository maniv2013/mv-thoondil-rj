import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact >Shopping</NavigationItem>
        <NavigationItem link="/Cart">Cart</NavigationItem>
        <NavigationItem link="/Checkout">Checkout</NavigationItem>
        <NavigationItem link="/Stock">Stock</NavigationItem>
        <NavigationItem link="/Logout">Logout</NavigationItem>
    </ul>
);

export default NavigationItems;