import React from 'react'
import './style.css'

export const AppFooter = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; LegalEagle AI</p>
        <p>
          Built with
          <span className="icon is-small icon-heart">
            <i className="fas fa-heart" />
          </span>
          from Melbourne
        </p>
      </div>
    </footer>
  )
}
