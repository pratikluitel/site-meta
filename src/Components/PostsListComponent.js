import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';

function RenderCard({node}){
    return(
        <div className="card hoverable">
            <div className="card-body">
                <div className="imgcont">
                    {node.frontmatter.image != null ? <img className="card-img-top" src={`${node.frontmatter.image}`} alt=""/>: null }
                    <div id="date">
                        {node.frontmatter.date}
                    </div>
                </div>
                <div className="card-title">
                    <p style={{fontSize: 'xx-large'}}>{node.frontmatter.title}</p>
                </div>
                <div className="card-content">
                    <p>{node.excerpt}</p>
                </div>  
                <div className="card-content" style={{color:'grey', fontSize: 'small'}}>
                    <p>{node.timeToRead} min read</p>
                </div>
                <Link to={node.fields.slug} className="stretched-link"> </Link>
            </div>
        </div>
    )
}
export default function PostList(){
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(sort: { order:DESC, fields: frontmatter___date}) {
                edges {
                  node {
                    timeToRead
                    id
                    excerpt
                    frontmatter {
                      date(formatString: "MMMM DD, YYYY")
                      featured
                      image
                      title
                      category
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
                <div className="col-10 offset-1 col-sm-6 offset-sm-3 col-md-4 offset-md-4" id="blognav">
                    <div className="row align-self-center">
                        <div className="col-4">
                            <a href="/stories" className="stretched-link">Stories</a>
                        </div>
                        <div className="col-4 text-center">
                            <a href="/essays" className="stretched-link">Essays</a>
                        </div>
                        <div className="col-4 text-center">
                            <a href="/poems" className="stretched-link">Poems</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-8 offset-sm-2">
                <div className="row">
                    {data.allMarkdownRemark.edges.map(
                        ({node})=>(
                            node.frontmatter.featured !== true ? <div className="col-md-6">{RenderCard({node})}</div>
                                :
                                <div className="col-md-12">{RenderCard({node})}</div>
                        ))}
                </div>
            </div>
        </section>
    );
}