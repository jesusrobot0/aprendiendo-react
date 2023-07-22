import { useState } from 'react'
import PropTypes from 'prop-types'

export function TwitterFollowCard({ children, userName = 'unknown', initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  const textButton = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          src={`https://unavatar.io/${userName}`}
          alt="El avatar de midudev"
          className="tw-followCard-avatar"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button
          className={buttonClassName}
          onClick={handleClick}
        >
          <span className="tw-followCard-text">{textButton}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}

TwitterFollowCard.propTypes = {
  children: PropTypes.node.isRequired,
  userName: PropTypes.string.isRequired,
  initialIsFollowing: PropTypes.bool
}