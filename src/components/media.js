import React from "react"
import MediaItem from "./media-item"

class Media extends React.Component {
  render() {
    if(!this.props.items) { return null }
    return (
      <ul>
      {this.props.items.map((item, index) => {
        return(
          <li key={index}>
            <MediaItem item={item} />
          </li>
        )
      })}
      </ul>
    );
  }
}

export default Media;