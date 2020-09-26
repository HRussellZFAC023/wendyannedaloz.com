import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

export default class ProductsPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <div>
      <Jumbotron image={image} title={entry.getIn(["data", "title"])} />

      

      <div className="mw7 center">
        <div className="mw6 ph3 mb3">
          <h3 className="f3 b lh-title mb2">{entry.getIn(["data", "heading"])}</h3>
          <p>{entry.getIn(["data", "description"])}</p>
        </div>
      </div>
      <div className="flex-ns flex-wrap mhn2-ns mb3">
        {(entry.getIn(["data", "headshots"]) || []).map((headshot, i) => <div className="ph2-ns w-50-ns mb4" key={i}>
          <img src={getAsset(headshot.get("image"))} alt="" className="center db mb3" style={{width: "240px"}}/>
          <p >{headshot.get("text")}</p>
        </div>)}
      </div>

    </div>;
  }
}
