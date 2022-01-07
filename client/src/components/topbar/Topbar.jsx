import "./topbar.css";
import { Search,  Chat } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Welcome</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Chat />
          </div>
        </div>
        <Link to={`/register`}>
          <img
            src={require("../../assets/images/img_avatar.png")}
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}
