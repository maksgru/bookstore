import React from "react";
import { Badge } from "react-bootstrap";

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
        <i className="fa fa-trash-o" aria-hidden="true" />
      </Badge>
      <Badge onClick={handleChange} variant="info float-right">
        <i className="fa fa-pencil-square-o" aria-hidden="true" />
      </Badge>
    </>
  );
};
export default ChangeComment;
