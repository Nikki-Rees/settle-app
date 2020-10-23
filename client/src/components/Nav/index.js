import React from "react";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        <img src="../assets/logos/rsz_5.png" alt="Settle logo with the letter T forming a house in the middle of the word"></img> </a>
      <a className="navbar-brand" href="/houseprofile/">
        House Profiles
      </a>
      <a className="navbar-brand" href="/conditionreport/">
        Condition Report
      </a>
      <a className="navbar-brand" href="/conditionreport/">
        Manage issues
      </a>
    </nav>
  );
}

export default Nav;
