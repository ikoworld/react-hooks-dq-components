import React from "react";
import TopMenu from "./TopMenu.js";
import GenrePicker from "./GenrePicker.js";
import AlbumList from "./AlbumList.js";
function MainContent() {
  return <main>{/* What components go here? */}
    <TopMenu/>
  <GenrePicker/>
  <AlbumList/>
  </main>;
}

export default MainContent;
