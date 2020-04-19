import React from "react";

const Rank = (userData) => {
  return (
    <div>
      <div className="f3 white">{`${userData.nameUser}, your current entries count is`}</div>
      <div className="f1 white">{userData.entriesUser}</div>
    </div>
  );
};

export default Rank;
