import React from 'react'
import Link from 'gatsby-link'
const backgroundImage = require('./melbourne.jpg')

const Tags = ({ pageContext }) => {
  const { posts, tagName } = pageContext
  if (posts) {
    return (
      <div
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <span>Posts about {tagName};</span>

        <ul>
          {posts.map(post => {
            return (
              <li>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Tags
