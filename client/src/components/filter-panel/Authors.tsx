import React from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Authors = () => {
  const { authors } = useSelector((state: any) => ({
    authors: state.authors
  }));
  return (
    <Form className="mb-2">
    <strong>Authors</strong>
    {authors.map((author: string) => (
      <Form.Check
      className="ml-1"
        key={author}
        type="checkbox"
        id="authorNme"
        label={author}
      />
    ))}
  </Form>
  );
};
export default Authors;