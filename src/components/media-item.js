import React from "react"

class MediaItem extends React.Component {
  render() {

    const icons = {
      Video: '📺',
      Podcast: '🎧',
      Article: '📄',
      Mindfulness: '😌'
    }

    return (
      <a 
        href={this.props.item.url} 
        target="_blank"
        rel="noreferrer">
        <img 
          src={'https://emoji.beeimg.com/' + icons[this.props.item.type]} 
          alt={icons[this.props.item.type]}
          title={this.props.item.type}
          height="18"
          style={{marginRight: '0.2em'}} />
        {this.props.item.title}
      </a>
    );
  }
}

export default MediaItem;