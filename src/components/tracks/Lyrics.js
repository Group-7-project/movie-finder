import React, { Component } from 'react'
import axios from 'axios';

import {Link} from 'react-router-dom'
//import Moment from 'react-moment';

class Lyrics extends Component {
  state={
      track:{},
      lyrics:{}
  } 
   
  componentDidMount(){
    axios.get(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_KEY}`)
    .then(res=>{
      //console.log(res.data)
      this.setState({lyrics:res.data.message.body.lyrics})
       
      return axios.get(`http://cors-https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_KEY}`)
    })
    .then(res=>{
        //console.log(res.data)
        this.setState({track:res.data.message.body.track})
    })
    .catch(err=>console.log(err))

  }

    render() {
        const {track,lyrics}=this.state
    if(track===undefined
        ||lyrics===undefined
        ||Object.keys(track).length===0
        ||Object.keys(lyrics).length===0){
        return <div>Loading...</div>
    }
    else{
         return(
            <React.Fragment>
            <Link to="/" className="btn btn-dark btn-sm mb-4">
              Go Back
            </Link>            
            <div className="card">
              <h5 className="card-header">
                {track.track_name} by{' '}
                <span className="text-secondary">{track.artist_name}</span>
              </h5>
              <div className="card-body">
                <p className="card-text">{lyrics.lyrics_body}</p>
              </div>
            </div>
  
            <ul className="list-group mt-3">
              <li className="list-group-item">
                <strong>Movie ID</strong>: {track.album_id}
              </li>
              <li className="list-group-item">
                <strong>Movie Genre</strong>:{' '}
               { track.primary_genres.music_genre_list.length === 0 ? 'NO GENRE AVAILABLE' : track.primary_genres.music_genre_list[0].music_genre.music_genre_name }
              </li>
              <li className="list-group-item">
                <strong>Explicit Words</strong>:{' '}
                {track.explicit === 0 ? 'No' : 'Yes'}
              </li>
            </ul>
          </React.Fragment>
         )
    }
  }
}

export default  Lyrics;