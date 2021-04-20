import Tiles from "./tiles";
import React from "react";

class Content extends React.Component {
  render() {
    return (
      <div>
        <Tiles data={this.props.data} />
      </div>
    );
  }
}
export default Content;
