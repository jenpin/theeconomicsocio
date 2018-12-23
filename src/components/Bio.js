import React from 'react'
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <div
      style={{
        display: 'flex',
        marginBottom: rhythm(2.5),
      }}
    >
      <img
        src={profilePic}
        alt={`Jennifer Pinto`}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: rhythm(2),
          height: rhythm(2),
        }}
      />
      <p>
        <span role="img" aria-label="sheep">
          🐑
        </span>
        <strong> Jen 🎩 </strong>
        <div> dreamer, a traveller and a learner</div>
      </p>
    </div>
  )
}

export default Bio
