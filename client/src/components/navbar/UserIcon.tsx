import React, { useEffect, useState } from "react";
import { Figure } from "react-bootstrap";
import { Link } from "react-router-dom";

import {io} from 'socket.io-client';
export const socket = io('http://localhost:4000/');

interface userIconType {
  iconUrl: string;
  userName: string;
}

const UserIcon = ({ iconUrl, userName }: userIconType) => {
  const [isNoticeShow, setNotice] = useState(false);
  useEffect(() => {
    const showNotice = () => {
      setNotice(true);
    };
    socket.on('newBook', showNotice)
  },[isNoticeShow]);
  return (
  <>
    {isNoticeShow && <i className="fa fa-bell mr-3 text-warning" area-hidden="true" />}
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
  </>)
};
export default UserIcon;
