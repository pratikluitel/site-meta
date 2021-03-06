import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image'

export function RenderCard({node}){
    return(
        <div className="card hoverable">
            <div className="card-body">
                <div className="imgcont">
                    {node.frontmatter.featuredImage != null ? <Img className="card-img-top" fluid={node.frontmatter.featuredImage.childImageSharp.fluid} alt={`${node.frontmatter.alt}`}/>: null }
                    <div id="date">
                        {node.frontmatter.date}
                    </div>
                </div>
                <div className="card-title">
                    <p style={{fontSize: 'xx-large'}}>{node.frontmatter.title}</p>
                </div>
                <div className="card-content">
                    <p style={{fontSize: 'small'}}>{node.excerpt}</p>
                </div>  
                <div className="card-content" style={{fontStyle: 'italic'}}>
                    <p style={{fontSize: 'x-small'}}>{node.timeToRead} min read</p>
                </div>
                <Link to={node.fields.slug} className="stretched-link"> </Link>
            </div>
        </div>
    )
}
export default function PostList(){
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: {frontmatter: {title: {ne: "About"}}}, sort: { order:DESC, fields: frontmatter___date}) {
                edges {
                  node {
                    timeToRead
                    id
                    excerpt
                    frontmatter {
                      date(formatString: "MMMM DD, YYYY")
                      featured
                      title
                      category
                      featuredImage {
                        childImageSharp {
                          fluid(maxHeight: 300, quality: 40) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                    fields {
                        slug
                    }
                  }
                }
              }
        }`
    )
    return(
        <section className="Blog"  id="main">
            <div className="text-center" id="bloghead">
                <h1><strong>Posts</strong></h1>
                <br />
                {/* <div className="col-10 offset-1 col-sm-6 offset-sm-3 col-md-4 offset-md-4" id="blognav">
                    <div className="row align-self-center">
                        <div className="col-4">
                            <Link to="/stories" className="stretched-link">Stories</Link>
                        </div>
                        <div className="col-4 text-center">
                            <Link to="/essays" className="stretched-link">Essays</Link>
                        </div>
                        <div className="col-4 text-center">
                            <Link to="/poems" className="stretched-link">Poems</Link>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="col-sm-8 offset-sm-2">
                <div className="row">
                    {data.allMarkdownRemark.edges.map(
                        ({node})=>(
                            node.frontmatter.featured !== true ? <div className="col-md-6" key={node.id}>{RenderCard({node})}</div>
                                :
                                <div className="col-md-12" key={node.id}>{RenderCard({node})}</div>
                        ))}
                </div>
            </div>
        </section>
    );
}