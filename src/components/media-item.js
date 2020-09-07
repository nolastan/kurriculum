import React from "react"

class MediaItem extends React.Component {
  render() {

    const icons = {
      Video: '📺',
      Podcast: '🎙',
      Article: '📄',
      Mindfulness: '😌'
    }

    return (
      <a 
        href={this.props.item.url} 
        target="_blank"
        rel="noreferrer"
        title={this.props.item.note}>
        <img 
          src={'https://emoji.beeimg.com/' + icons[this.props.item.type]} 
          alt={icons[this.props.item.type]}
          title={this.props.item.type}
          height="14"
          style={{margin: '0 0.3em 0 0'}} />
        <span className="link-title">{this.props.item.title}</span>
        <Source source={this.props.item.source} />
      </a>
    );
  }
}

class Source extends React.Component {
   render() {
      if(this.props.source) {
        return <span> from {this.props.source}</span>
      } else {
        return null
      }
   }
}

export default MediaItem;