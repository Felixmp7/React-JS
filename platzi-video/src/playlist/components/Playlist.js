import React, { Component } from 'react'
import Media from './Media'

class Playlist extends Component {
  render(){
    console.log(this.props.data)
    const playlist = this.props.data.categories[0].playlist
    return(
      <div>
        {
          playlist.map( item => {
            return <Media key={item.id} title={item.title}/>
          })
        }
      </div>
    )
  }
}

export default Playlist;
