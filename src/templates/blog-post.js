import React from "react"
import Layout from '../Components/layout'
import { graphql } from "gatsby"
import Navigation from '../Components/NavComponent'
import {Helmet} from 'react-helmet'

export default function Post({data}) {
    const post = data.markdownRemark
    return (
        <Layout>
            <Helmet>
                <title>{post.frontmatter.title} -- Pratik Luitel</title>
                <link rel="canonical" href={`http://pratikl.com.np/${post.fields.slug}`} />
            </Helmet>
            <Navigation/>
            <section className="Blog">
                <div id="main" className="container-fluid" style={{paddingBottom: 0+'px'}}>
                    <div className="row">
                        <div className="col-10 col-md-8 col-lg-6 offset-1 offset-md-2 offset-lg-3">
                            <div className="row row-header justify-content-center" style={{marginTop: 100+'px'}} id="title">
                                <h1><strong>{ post.frontmatter.title }</strong></h1>
                            </div>
                            <div className="row justify-content-center" style={{marginBottom: 40+'px'}} >
                                <img src={`${post.frontmatter.image}`} style={{marginBottom: 5+'px', width:90+'%', borderRadius:5+'px'}} alt=""/>
                                <p className="caption" style={{color:'#434242', fontSize: 'x-small', textAlign: 'right', width: 90+'%'}}>{ post.frontmatter.caption }</p>
                            </div>
                            <div className="row row-content" id="conttt">
                                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                            </div>
                            <div className="row row-content" style={{marginBottom:'50px',marginTop:'30px', justifyContent:'right'}}>
                                <p style={{color:'#434242', fontSize:'small'}}> Posted on: {post.frontmatter.date}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 col-md-6 offset-1 offset-md-3">
                            <br/>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        caption
        image
      }
      fields{
          slug
      }
    }
  }
`