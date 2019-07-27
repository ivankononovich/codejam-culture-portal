import React from 'react';
import {Link} from "react-router-dom";

function Developers(props) {
  return <>
    <ul>
      {props.developers.map((item, index) => {
        return <div key={index}>
           <p>{item.name}</p>
          <Link key={item.github} to={item.github}>
            {item.github}
          </Link>
        </div>
      })}
    </ul>
  </>
}

export default Developers;
