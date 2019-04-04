import React, {Component} from 'react'
import VideoPlayerLayout from '../components/VideoPlayerLayout'
import Video from '../components/Video'
import Title from '../components/Title'
import PlayPause from '../components/Play-Pause.jsx'

class VideoPlayerContainer extends Component {
  state = {
    pause: true
  }

  togglePlay = event => {
    this.setState({
      pause: !this.state.pause
    })
  }
  render() {
    return(
      <VideoPlayerLayout>
        <Title
          title="Esto es un video chill"
        />
        <PlayPause
          handleClick={this.togglePlay}
          pause={this.state.pause}
        />
        <Video
          autoplay={true}
          src='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayerContainer
