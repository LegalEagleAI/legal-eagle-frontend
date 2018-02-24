import React from 'react'
import './style.css'

export const AppFooter = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; LegalEagle AI</p>
        <p>
          Built with{' '}
          <span class="icon is-small icon-heart">
            <i class="fas fa-heart" />
          </span>{' '}
          from Melbourne
        </p>
      </div>
    </footer>
  )
}
