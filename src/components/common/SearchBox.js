import React from "react";
class SearchBox extends React.Component {
  render() {
    return (
        <div className="input-group search-box">
          <input className="form-control left-border-none" {...this.props} />
          <span className="input-group-addon transparent addon-color">Search</span>
        </div>
    );
  }
}
export default SearchBox;
