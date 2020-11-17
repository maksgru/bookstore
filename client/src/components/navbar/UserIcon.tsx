import * as React from "react";
import { Figure } from "react-bootstrap";
import { Link } from "react-router-dom";


interface userIconType {
  iconUrl: string;
  userName: string;
}

const UserIcon = ({ iconUrl, userName }: userIconType) => (
  <Link to="/profile" className="p-0 mr-4 btn-bdnone" style={{textDecoration: "none"}}>
    <span className="mr-4" >{userName}</span>
    <Figure className="m-0">
      <Figure.Image
        className="m-0 rounded-circle"
        width={60}
        height={60}
        alt=""
        src={iconUrl}
      />
  
    </Figure>
  </Link>
);
export default UserIcon;
