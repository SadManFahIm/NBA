import React, {Component} from "react";
import axios from 'axios';
import {URL} from '../../../../config';
import Header from './header';

class NewsArticle extends Component{
    state = {
        article: [],
        team: [],
    }

    componentWillMount() {
        axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
            .then(response =>{
                let article = response.data[0];

                axios.get(`${URL}/teams?id=${article.team}`)
                    .then(response => {
                        this.setState({
                            article:article,
                            team: response.data
                        })
                    })
            })
    }

    render() {

        const article = this.state.article;
        const team = this.state.team;



        return(
            <div className="container">
                <Header
                    teamData={team[0]}
                    date={article.date}
                    author={article.author}
                />
                <div>
                    <h1 className="text-center">{article.title}</h1>
                    <div
                        className="article_image"
                        style={{
                            background:`url('/images/articles/${article.image}')`
                        }}
                    >
                    </div>
                    <div>
                        {article.body}
                    </div>
                </div>

            </div>
        )
    }
}
export default NewsArticle