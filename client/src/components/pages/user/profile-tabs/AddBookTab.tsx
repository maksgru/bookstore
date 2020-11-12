import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { addNewBook } from "../../../../api/bookApi";

interface Astate {
  name: string;
  author: string;
  description: string;
  bookImage: any
}
interface Aprops {}

class AddBookTab extends Component<Aprops, Astate> {
  constructor(props: Aprops) {
    super(props);
    this.state = {
      name: "",
      author: "",
      description: "",
      bookImage: null
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const key = e.target.name;
    this.setState({ [key]: value } as any);
  };
  handleFile = (e: any) => {
    e.preventDefault();
    this.setState({bookImage: e.target.files[0]})
  };
  createBook = async () => {
    const formData = new FormData();
    formData.append('bookImg', this.state.bookImage);
    formData.append('name', this.state.name);
    formData.append('author', this.state.author);
    formData.append('description', this.state.description);
    await addNewBook(formData);
  };

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Control
            name="name"
            onChange={this.handleChange}
            placeholder="Book Title"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            name="author"
            onChange={this.handleChange}
            placeholder="Book Author"
          />
        </Form.Group>
        <Form.Group>
          <Form.File onChange={this.handleFile} id="exampleFormControlFile1" label="Choose book image" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Book description</Form.Label>
          <Form.Control
            name="description"
            onChange={this.handleChange}
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Button onClick={this.createBook} type="submit" variant="outline-primary" className="float-right">
          <span>
            <span>Add Book</span>
            <i className="fa fa-book fa-lg ml-2" aria-hidden="true" />
          </span>
        </Button>
      </Form>
    );
  }
}

export default AddBookTab;
