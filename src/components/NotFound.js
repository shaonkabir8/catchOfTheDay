import React from 'react'


function NotFound({location}) {
    return (
        <div className="not-found">
            <h1>No Page Found as {location.pathname}</h1>
        </div>
    )
}

export default NotFound;