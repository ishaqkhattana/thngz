import React, { Fragment } from 'react'
import Nav from '../Nav/Nav'
import Products from '../products/Products'

const Dashboard = () => {
    const navigation = [
        { name: "Dashboard", href: "/", current: true },
      ];
    return (

        <div>
            <Nav navigation = {navigation}/>
            <Products/>
        </div>
    )
}

export default Dashboard