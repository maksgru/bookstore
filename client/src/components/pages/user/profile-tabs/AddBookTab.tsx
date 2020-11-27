import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { addNewBook } from "../../../../api/bookApi";
import { RootState } from "../../../../reducers";

interface Astate {
  name: string;
  author: string;
  gener: string;
  price: string;
  description: string;
  bookImage: string | Blob;
  isSendPossible: boolean;
}
interface Aprops {
  geners: string[];
  authors: string[];
}

class AddBookTab extends Component<Aprops, Astate> {
  constructor(props: Aprops) {
    super(props);
    this.state = this.initialState;
  }
  initialState = {
    name: "",
    author: "",
    gener: "",
    price: "",
    description: "",
    bookImage: '',
    isSendPossible: false
  };

  checkForm = (state: Astate) => {
    for (let key in state) {
      if (key === 'isSendPossible') continue;
      if (!key) return false 
    }
    return true;
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const key = e.target.name;
    this.setState({ [key]: value } as any);
    this.setState((state) => ({isSendPossible: this.checkForm(state)}));
  };
  handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({ bookImage: e.target.files![0] });
  };
  createBook = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    if (!this.state.isSendPossible) return;  
    const formData = new FormData();
    formData.append("bookImg", this.state.bookImage);
    formData.append("name", this.state.name);
    formData.append("author", this.state.author);
    formData.append("gener", this.state.gener);
    formData.append("price", this.state.price);
    formData.append("description", this.state.description);
    await addNewBook(formData);
    this.setState({...this.initialState});
  };

  render() {
    return (
      <Form className="mt-4">
        <Form.Group>
        <Form.Label>Book title</Form.Label>
          <Form.Control
            name="name"
            onChange={this.handleChange}
            placeholder="Book Title"
            value={this.state.name}
          />
        </Form.Group>
        <Form.Group>
        <Form.Label>Book author</Form.Label>
          <Form.Control
            name="author"
            onChange={this.handleChange}
            as="select"
          >
            {
              this.props.authors.map((author: string) => (<option key={author}>{author}</option>))
            }
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Book gener</Form.Label>
          <Form.Control as="select" name="gener" onChange={this.handleChange}>
            {
              this.props.geners.map((gener: string) => (<option key={gener}>{gener}</option>))
            }
          </Form.Control>
        </Form.Group>
        <Form.Group>
        <Form.Label>Book price</Form.Label>
          <Form.Control
            name="price"
            onChange={this.handleChange}
            placeholder="Book price"
            value={this.state.price}
          />
        </Form.Group>
        <Form.Group>
          <Form.File
            onChange={this.handleFile}
            id="exampleFormControlFile1"
            label="Choose book image"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Book description</Form.Label>
          <Form.Control
            name="description"
            onChange={this.handleChange}
            as="textarea"
            rows={3}
            value={this.state.description}
          />
        </Form.Group>
        <Button
          onClick={this.createBook}
          type="submit"
          variant="outline-primary"
          className="float-right"
          disabled={!this.state.isSendPossible}
        >
          <span>
            <span>Add Book</span>
            <i className="fa fa-book fa-lg ml-2" aria-hidden="true" />
          </span>
        </Button>
      </Form>
    );
  }
}
const mstp = (state: RootState) => ({
  geners: state.geners,
  authors: state.authors
});

export default connect(mstp)(AddBookTab);
