import React from 'react';

import { autors } from '../../store';

function Autors() {
    return <>
        <ul>
            {
                autors.map((item) => {
                    return <li>
                        <span>{item.name}</span><br />
                        <a href={item.github}>link github</a>
                    </li>
                })
            }
        </ul>
    </>
}

export default Autors;