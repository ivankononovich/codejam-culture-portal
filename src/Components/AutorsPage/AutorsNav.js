import React from 'react';
import { Link } from "react-router-dom";

import { autors } from '../../store';

function Autors() {
    return <>
        <ul>
            {autors.map((item, index) => {
                return <li key={index}>
                    <Link key={item.url} to={item.url}>
                        {item.name}
                    </Link>
                </li>
            })}
        </ul>
    </>
}

export default Autors;