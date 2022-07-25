import React, { Component } from 'react'

import {Consumer} from '../../context'
import Track from './Track'

export default class Tracks extends Component {
  render() {
    return (
      <Consumer>
          {value=>{
              console.log(value);
              const {track_list,heading}=value;
              if(track_list===undefined||track_list.length===0){
                 return null}
              else{
                 return(
                     <React.Fragment>
                        <h3 className="text-center mb-4">{heading}</h3>
                     <div className="row">
                        {track_list.map(item=>(
                            <Track key={item.track.track_id} track={item.track}/>
                        ))}
                     </div>
                     </React.Fragment>
                 )
              }
          }}
      </Consumer>
    )
  }
}
