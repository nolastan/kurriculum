import React from "react"

class MediaItem extends React.Component {
  render() {
    return (
      <div>
        <a href={this.props.item.url} target="_blank">{this.props.item.title}</a>
      </div>
    );
  }
}

export default MediaItem;