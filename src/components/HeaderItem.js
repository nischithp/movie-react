import React from 'react'
import { Button } from './Button'

const HeaderItem = (props) => {
    return (
        <div>
            <h1 className="header">
                <a href={props.url}>
                {props.name}
                </a>
            </h1>
        </div>
    )
}

HeaderItem.defaultProps = {
    url : "https://linkedin.com",
    name : "Task Tracker App",
}

export default HeaderItem

