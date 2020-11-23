import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleAuthors } from "../../actions/filterActions";
import { RootState } from "../../reducers";

const Authors = () => {
  const dispatch = useDispatch();
  const { authors, selectedAuthors } = useSelector((state: RootState) => ({
    authors: state.authors,
    selectedAuthors: state.filter.authors
  }));
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.id;
    const checked = e.target.checked;
    if (checked && selectedAuthors) {
        dispatch(handleAuthors([...selectedAuthors, value]))
    } else if (selectedAuthors){
        dispatch(handleAuthors(selectedAuthors.filter((author: string) => author !== value)))
    }
  };
  return (
    <Form className="mb-2">
      <strong>Authors</strong>
      {authors.map((author: string) => (
        <Form.Check
          onChange={handleChange}
          className="ml-1"
          key={author}
          type="checkbox"
          id={author}
          label={author}
        />
      ))}
    </Form>
  );
};
export default Authors;
