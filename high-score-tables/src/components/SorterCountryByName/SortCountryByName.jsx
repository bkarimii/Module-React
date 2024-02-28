import React from "react";
function Sorter(a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  if (a.name == b.name) {
    return 0;
  }
}

export default Sorter;
