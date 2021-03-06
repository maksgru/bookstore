import React, { useEffect, useState } from "react";
import { Figure } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { io } from "socket.io-client";
import { RootState } from "../../reducers";
export const socket = io("http://localhost:4000/");

interface userIconType {
  iconUrl: string;
  userName: string;
}

const UserIcon = ({ iconUrl, userName }: userIconType) => {
  const { userId } = useSelector((state: RootState) => ({
    userId: state.auth.id
  }));
  const [isNoticeShow, setNotice] = useState(false);
  useEffect(() => {
    const showNotice = () => {
      setNotice(true);
    };
    socket.on("newBook", (data: {userId: string}) => {
      if (data.userId !== `${userId}`) showNotice();
    });
  }, [isNoticeShow, userId]);
  return (
    <>
      {isNoticeShow && (
        <i className="fa fa-bell mr-3 text-warning" area-hidden="true" />
      )}
      <Link
        to="/profile"
        className="p-0 mr-4 btn-bdnone"
        style={{ textDecoration: "none" }}
      >
        <span className="mr-4">{userName}</span>
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
    </>
  );
};
export default UserIcon;
