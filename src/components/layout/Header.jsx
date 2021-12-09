
import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom';
import { RiShoppingCartLine } from "react-icons/ri"

function Header() {

    const numberOfItems = useSelector(state => state.cartCR.numberOfItems)

    return (
        <div className="myNav d-flex justify-content-between align-items-center">
            <Link className="link ms-4" to="/">Pizzazz</Link>
            <div className="mb-2">
                <Link className="link mx-3" to="deals">Deals</Link>
                <Link className="link mx-3" to="/builder">Builder</Link>
                <Link className="cartIcon ms-3 me-5 h2" to="cart">
                    <RiShoppingCartLine className="me-2"/>
                    {(numberOfItems > 0) && numberOfItems}
                </Link>
            </div>
        </div>
    )
}

export default Header
