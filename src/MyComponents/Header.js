import React from 'react'

export default function Header(props) {
  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
    </div>
    </nav>
  )
}
