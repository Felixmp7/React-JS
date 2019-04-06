import React, {Component} from 'react'
import './Video.css'

class Video extends Component {
  togglePlay = () =>{
    if (this.props.pause) {
      this.video.play()
    } else {
      this.video.pause()
    }
  }
  componentWillReceiveProps(nextProps){
    // console.log(nextProps)
    if(nextProps.pause !== this.props.pause){
      this.togglePlay()
    }
  }

  setRef = element => {
    this.video = element
  }
  render() {
    const {
      handleLoadedMetadata,
    } = this.props
    return(
      <div className="Video">
        <video
          ref={this.setRef}
          autoPlay={this.props.autoPlay}
          src={this.props.src}
          onLoadedMetadata={handleLoadedMetadata}
        />
      </div>
    )
  }
}

 export default Video
