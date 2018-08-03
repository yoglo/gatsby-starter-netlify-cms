import React from 'react'
import PropTypes from 'prop-types'
import Features from '../components/Features'

export const TeamPageTemplate = ({
  image,
  heading,
  description,
  intro,
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{ backgroundImage: `url(${image})` }}
              >
              </div>
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-2">
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
              </div>
              <Features gridItems={intro.blurbs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

TeamPageTemplate.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const TeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <TeamPageTemplate
      image={frontmatter.image}
      heading={frontmatter.heading}
      description={frontmatter.description}
      intro={frontmatter.intro}
    />
  )
}

TeamPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default TeamPage

export const teamPageQuery = graphql`
  query TeamPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image
        heading
        description
        intro {
          blurbs {
            image
            text
            items
          }
          heading
          description
        }
      }
    }
  }
`
