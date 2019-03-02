import React from 'react'
import Link from 'gatsby-link'
import Article from '../components/article/article'
import Tech from '../components/tech/tech'
import Img from "gatsby-image";

import Content from '../files/json/content.json'
import _ from 'lodash'
import Styles from './page.module.css'
class IndexPage extends React.Component {

    render() {
        const articles = []
        _.forEach(Content.articles, function (value) {
            articles.push(value)
        })
        const techs = []
        _.forEach(Content.tech, function (value) {
            techs.push(value)
        })
        return (
            <div>
                <div className={Styles.whoIAm}>

                    <div className={Styles.photo}>
                        <Img sizes={this.props.data.profilepic.sizes} className={Styles.profilePic} />

                    </div>

                
                    <div className={Styles.presentation}>
                        <h1>Thomasorus</h1>
                        <h2>FRONT-DEV & JOURNALIST</h2>

                        <div>
                            <h3>Who am I ?</h3>
                            <p>I'm a front-end developper since 2015 and independant journalist specialized in fighting games since 2009. As someone acting both in content creation and container creation, I have a unique experience that helps me create better websites for my clients.</p>
                            <p>Need a website, an article about fighting games or some insight on both those subjects? Please get in touch!</p>

                            <div>
                                <ul>
                                    <li><a href="mailto:contact@thomasorus.com">contact@thomasorus.com</a></li>
                                    <li><a href="http://twitter.com/brownleatherguy">Twitter</a></li>
                                    <li><a href="https://www.linkedin.com/in/thomas-loreille/">LinkedIn</a></li>
                                </ul>
                                <span>or</span>
                                <p>
                                    <a className={Styles.learnMore} href="#learn-more"><i>Learn more about me...</i></a>
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className={Styles.devWrapper}>

                    <div className={Styles.sectionTitle}>
                        <h2>Articles</h2>
                        <p>As a journalist, I am specialized in fighting games going from classic series like Street Fighter to modern ones and even indies. With 20 years as a fan and 10 years as a writer, I provide deep coverage of games, studios, social gatherings and tournaments.</p>
                    </div>
                    <div className={Styles.sectionTitle}>
                        <h2>Front-end dev</h2>
                        <p>As a developer, I am specialized in project management and front-end tools, using mostly html, css and javascript. All along my career I used classic tools like Bootstrap and jQuery as well as more moderns one like React and Gatsby JS. I also focus on speed optimization in the browser. </p>

                    </div>
                </div>

                <div className={Styles.devWrapper}>

                    <div className={Styles.articles}>

                        {articles.map(article => (
                            <Article
                                key={article.name}
                                name={article.name}
                                client={article.client}
                                sujet={article.sujet}
                                url={article.url}
                            />
                        ))}
                    </div>
                    <div className={Styles.techs}>

                        {techs.map(tech => (
                            <Tech
                                key={tech.name}
                                name={tech.name}
                                client={tech.client}
                                tech={tech.tech}
                                design={tech.design}
                                url={tech.url}
                            />
                        ))}
                    </div>
                </div>
                <div className={Styles.about}>
                    <section id="learn-more">
                        <div className={Styles.sorus}>
                            <h2>More about Thomasorus</h2>
                        </div>
                        <div className={Styles.aboutSection}>

                            <article>
                                <h3>Degrees:</h3>
                                <ul>
                                    <li><a href="http://ufrsciences.unicaen.fr/formations-proposees/licences-professionnelles/webmestre/">2015 - Pro Licence ACT Webmaster - Dev cursus</a></li>
                                    <li><a href="http://www.esam-c2.fr">2009 - National diploma of arts and media - communication cursus</a></li>
                                    <li><a href="https://www.youtube.com/watch?v=1neerUH0rWw">2004 - Baccalauréat Littéraire - english option</a></li>
                                </ul>
                            </article>
                            <article>
                                <h3>I work(ed) for:</h3>
                                <ul>
                                    <li><a href="https://www.compteepargneco2.com/">Compte CO2</a></li>

                                    <li><a href="https://www.redbull.com/fr-fr/tags/esports">Red Bull Esport</a></li>
                                    <li><a href="http://id3i.fr/">ID3i</a></li>
                                    <li><a href="http://gamekult.com">Gamekult</a></li>
                                    <li><a href="http://canardpc.com">Canard PC</a></li>
                                    <li><a href="http://thirdeditions.com">Third Edition</a></li>
                                    <li><a href="https://www.facebook.com/Universbdcaen/">Univers BD</a></li>
                                    <li>And many non profit fighting games organizations</li>
                                </ul>
                            </article>
                            <article>
                                <h3>Other skills:</h3>
                                <ul>
                                    <li>Project management</li>
                                    <li>Event organisation</li>
                                    <li>Community management</li>
                                    <li>Video and audio editing</li>
                                    <li>Conference animation</li>
                                    <li>Some backend (node, asp.net mvc)</li>
                                </ul>
                            </article>

                        </div>
                    </section>
                </div>
               
            </div >
        )
    }
}

export default IndexPage;

export const pageQuery = graphql`
  query HeaderImageQuery {
    profilepic: imageSharp(id: { regex: "/moi/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
