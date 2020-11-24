import React from "react";
import { Badge, Nav } from "react-bootstrap";

interface ChangeCommentType {
  handleChange: VoidFunction;
  handleDelete: VoidFunction;
}

const ChangeComment = ({ handleChange, handleDelete }: ChangeCommentType) => {
  return (
    <>
        <Badge
        onClick={handleDelete}
        variant="danger float-right mx-1"
        >
        <Nav.Link className="p-1 text-light">
          <i className="fa fa-trash-o" aria-hidden="true" />
      </Nav.Link>
        </Badge>
        <Badge onClick={handleChange} variant="info float-right mx-1">
      <Nav.Link className="p-1 text-light">
          <i className="fa fa-pencil-square-o" aria-hidden="true" />
      </Nav.Link>
        </Badge>
    </>
  );
};
export default ChangeComment;
