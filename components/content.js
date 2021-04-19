import Tiles from "./tiles";
import React from "react";

class Content extends React.Component {
  render() {
    console.log(this.props.data);

    return (
      <div className="tile">
        <Tiles data={this.props.data} />
      </div>
    );
  }
}
export default Content;
