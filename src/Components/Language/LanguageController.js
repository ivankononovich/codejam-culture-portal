import React from 'react';

function LanguageController(props) {
    return <>
        <ul>
            <li data-language="ru" onClick={props.onClick}>RU</li>
            <li data-language="en" onClick={props.onClick}>EN</li>
            <li data-language="by" onClick={props.onClick}>BY</li>
        </ul>
    </>
}

export default LanguageController;