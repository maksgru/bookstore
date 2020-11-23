import React from 'react';
import { Badge } from 'react-bootstrap';

const ChangeComment = () => {
  return (
   <>
      <Badge variant="danger float-right mx-1">
        <i className='fa fa-trash-o' aria-hidden="true"/>
      </Badge>
      <Badge variant="info float-right">
      <i className="fa fa-pencil-square-o" aria-hidden="true"/>
      </Badge>
   </>
  );
};
export default ChangeComment;