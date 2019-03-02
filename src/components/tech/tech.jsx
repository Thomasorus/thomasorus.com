import React from 'react';
import Styles from './tech.module.css'
class Tech extends React.Component {
    render() {

        return (
            <article className={Styles.tech}
                key={this.props.name}
            >
                <a href={this.props.url} className={Styles.techContent} >
                    <div className={Styles.url}>
                        <h2> {this.props.name}</h2>
                    </div>
                    <h3>client :  {this.props.client}</h3>

                    <div>
                        <h4>Design : {this.props.design}</h4><br />
                        <h4>Tech : {this.props.tech}</h4>


                    </div>
                 
                </a>
            </article>
        );
    }
}


export default Tech;