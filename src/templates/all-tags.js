import React from 'React'
import Link from 'gatsby-link'

const AllTags = ({ pageContext }) => {
  const { tags } = pageContext

  if (tags) {
    return (
      <div>
        <ul>
          {tags.map(tag => {
            return (
              <li>
                <Link to={`tags/${tag}`}>{tag}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

module.export = AllTags
