import React from "react";

function SortScoresDecsending(scoreOne, scoreTwo) {
  if (Number(scoreOne.s) > Number(scoreTwo.s)) {
    return -1;
  }
  if (Number(scoreOne.s) < Number(scoreTwo.s)) {
    return 1;
  }
  if (Number(scoreOne.s) == Number(scoreTwo.s)) {
    return 0;
  }
}

export default SortScoresDecsending;
