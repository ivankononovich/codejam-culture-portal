import React from 'react';
import { Link } from "react-router-dom";

function Developers(props) {
    return <>
        <ul>
            {props.developers.map((item, index) => {
                return <li key={index}>
                    <Link key={item.url} to={item.url}>
                        {item.name}
                    </Link>
                </li>
            })}
        </ul>
    </>
}

export default Developers;
