import * as React from "react";
import { Figure } from "react-bootstrap";
import { Link } from "react-router-dom";


interface userIconType {
  iconUrl: string;
}

const UserIcon = ({ iconUrl }: userIconType) => (
  <Link to="/profile" className="p-0 mr-4">
    <Figure className="m-0">
      <Figure.Image
        className="m-0 rounded-circle"
        width={40}
        height={40}
        alt=""
        src={iconUrl}
      />
  
    </Figure>
  </Link>
);
export default UserIcon;
