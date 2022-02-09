import React, {Component} from "react";
import axios from 'axios';
import {URL} from '../../../config'
import Button from "../Button/button";
import VideosListTemplate from "./VideosListTemplate";

class VideosList extends Component{

    state = {
        teams: [],
        videos: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }
    renderTitle = () => {
         return this.props.title ?
             <h3><strong>NBA</strong> Videos</h3>
         : null
    }

    componentWillMount() {
        this.request(this.state.start,this.state.end)
    }

    request = (start,end) => {
        if (this.state.teams.length < 1){
            axios.get(`${URL}/teams`)
                .then(response => {
                    this.setState({
                        teams: response.data
                    })
                })
        }

        axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
            .then( response => {
                this.setState({
                    videos:[...this.state.videos,...response.data],
                    end: end
                })
            })
    }

    renderVideos = () => {
            let template = null;
            switch (this.props.type) {
                case('card'):
                    template = <VideosListTemplate
                                data={this.state.videos}
                                teams={this.state.teams}/>
                    break;
                default:
                    template = null;
            }
            return template;
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount
        this.request(this.state.end,end)
    }
    renderButton = () => {
        return this.props.loadmore ?
            <Button
                type="loadmore"
                loadMore = {()=>this.loadMore()}
                cta = "load more videos"
            />
        :
            <Button
                type="linkTo"
                cta = "More Videos"
                linkTo = "/videos"
            />
    }
    render() {
        console.log(this.state.teams);
        return (
            <div className="container-fluid">
                {this.renderTitle()}
                {this.renderVideos()}
                {this.renderButton()}
            </div>
        )
    }
}
export default VideosList
