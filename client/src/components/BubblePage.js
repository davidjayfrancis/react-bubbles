import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import { connect } from "react-redux";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  axiosWithAuth()
    .get("http://localhost:5000/api/colors")
    .then(res => {
      setColorList(res.data);
    })
    .catch(err => {
      console.log(err);
    });

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps)(BubblePage);
