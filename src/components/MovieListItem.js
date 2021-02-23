import React from 'react'

const MovieListItem = (props) => {
    return (
        <div>
            <h1 className="header">
                {props}
            </h1>
        </div>
    )
}

MovieListItem.defaultProps = {
    url : "https://linkedin.com",
    name : "Task Tracker App",
}

export default MovieListItem

