import React from "react";
import HOC from "../HOC/HOC";
import "./List.css";
import PropTypes from "prop-types";

const List = ({ data }) => {
  const showList = data.map((item,index) => {
    return <li key={index} className="list">{item}</li>;
  });

  return (
    <div className="listOfItems">
      {showList.length > 0 ? showList : "No Item found :("}
    </div>
  );
};

List.propTypes = {
  data: PropTypes.array
};
export default HOC(List);
