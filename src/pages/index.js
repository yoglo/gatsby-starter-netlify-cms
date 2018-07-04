import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import shirtimg from '../img/maillot2.jpg'
import ghcmainlogo from '../img/GlasgowHandballLogo.png'
import ballimg from '../img/ball.png'
import trainingboardimg from '../img/training_board.png'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <figure className="image">
                    <img src={ghcmainlogo} alt="GHC-logo" style={{ width: '330px' }} />
                </figure>
              </div>
            </div>
            <div
                className="full-width-image-container margin-top-0"
                style={{ backgroundImage: `url(${shirtimg})` }}
              >
            </div>
            <div class="columns">
              <div class="column is-7">
                <h3 class="has-text-weight-semibold is-size-2">Join us</h3>
                <p>
                  Whether you're completely new or have many years of experience, play handball for Glasgow and come along to one of our free taster sessions! Everyone is friendly and welcoming, so why not give it a try?
                </p>
              </div>
            </div>
            <div class="columns is-multiline">
              <div class="column is-6">
                <section class="section">
                  <p class="has-text-centered">
                    <img alt="" src={ballimg}/>
                  </p>
                  <p>
                    We currently have a senior Men and Ladies teams, but are always looking for new members! We welcome all ages (>16 years old) and abilities, and currently have players from many European countries with varying skill levels. We all have in common great interest in sport and want to contribute on and off the court in making Glasgow Handball Club great!
                  </p>
                </section>
              </div>
              <div class="column is-6">
                <section class="section">
                  <p class="has-text-centered">
                    <img alt="" src={trainingboardimg}/>
                  </p>
                  <p>Trainings are every <strong>Thursday</strong> at <strong>8:00pm.</strong><br/>
                    <strong>Hutchesons' Grammar School</strong><br/>
                    <strong>21 Beaton Rd,</strong><br/>
                    <strong>Glasgow, G41 4NW</strong><br/>
                  See our latest stories section or about page for more details.
                  </p>
                </section>
              </div>
            </div>
            
            <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
          </div>
          {posts
            .map(({ node: post }) => (
              <div
                className="content"
                style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                key={post.id}
              >
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </div>
            ))}
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
