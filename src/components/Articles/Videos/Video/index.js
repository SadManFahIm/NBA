import React, {Component} from "react";
import axios from 'axios';
import {URL} from '../../../../config'
import Header from './header'
import VideosRelated from "../../../widgets/VideosList/VideosRelated/videosRelated";



class VideoArticle extends Component {

    state = {
        article: [],
        team: [],
        teams:[],
        related: []
    }

    componentWillMount() {
        axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
            .then(response =>{
                let article = response.data[0];

                axios.get(`${URL}/teams?id=${article.team}`)
                    .then(response => {
                        this.setState({
                            article:article,
                            team: response.data
                        });
                        this.getRelated();
                    })
            })
    }

    getRelated = () => {
        axios.get(`${URL}/teams`)
            .then( response => {
                let teams = response.data;
                axios.get(`${URL}/videos?q=${this.state.team[0].city}&_limit=3`)
                    .then(response => {
                        this.setState({
                            teams,
                            related: response.data
                        })
                    })
            })
    }


    render() {
        const article = this.state.article;
        const team = this.state.team;
        return (
            <div className="container">
                <Header teamData={team[0]}/>
                <div>
                    <h1 className="text-center">{article.title}</h1>
                    <div>
                        <iframe
                            title="VideoPlayer"
                            width="100%"
                            height="600px"
                            src={`https://www.youtube.com/embed/${article.url}`}
                        ></iframe>
                    </div>
                    <VideosRelated
                        data={this.state.related}
                        teams={this.state.teams}
                    />
                </div>
            </div>
        );
    }
}
export default VideoArticle