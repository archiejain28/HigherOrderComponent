import React from "react";
import "./HOC.css";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";

const HOC = (WrappedComponent) => {
  return class NewComponent extends React.Component {
    state = {
      term: "",
    };
    render() {
      const { data } = this.props;
      const filteredData = data.filter((item) => {
        return item.toLowerCase().indexOf((this.state.term).toLowerCase()) >= 0;
      });
      NewComponent.propTypes= {
        data:PropTypes.array,
      }
      return (
        <div>
          <div className="navBox">
          <div className="searchBox">
            <input
              type="text"
              value={this.state.term}
              placeholder= "Search the item here..."
              aria-label="Search here"
              onChange={(e) => {
                this.setState({ ...this.state, term: e.target.value });
              }}
            />
            <FaSearch className="icon"/>
          </div>
          </div>
          <WrappedComponent data={filteredData}></WrappedComponent>
        </div>
      );
    }
  };
};


HOC.propTypes = {
  WrappedComponent: PropTypes.element,
  data:PropTypes.array,
}

export default HOC;
