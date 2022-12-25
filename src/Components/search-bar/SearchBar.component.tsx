import { Component } from "react";

type ComponenetProps = {
  // this is a placeholder for onChange
  onEventHandler: React.ChangeEventHandler | any;
  placeholder?: string;
  propStyles?: string
};
type ComponenetState = {};

class SearchBar extends Component<ComponenetProps, ComponenetState> {
  constructor(props: ComponenetProps) {
    super(props);
  }
  render() {
    return (
      <div className="header my-4">
        <input
          type="search"
          className={this.props.propStyles}
          placeholder={this.props.placeholder}
          onChange={this.props.onEventHandler}
        />
      </div>
    );
  }
}

export default SearchBar;
