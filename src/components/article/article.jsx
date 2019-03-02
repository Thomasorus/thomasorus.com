import React from 'react';
import Styles from './article.module.css'
class Article extends React.Component {
    render() {
     
          
        return (
            <article className={Styles.article}
                key={this.props.name}
                >
                <a href={this.props.url} className={Styles.articleContent} >
                    <h4>#{this.props.sujet}</h4>
                    <h2> {this.props.name}</h2>

                    <h3>client : {this.props.client}</h3>

                </a>
            </article>
        );
    }
}

export default Article;