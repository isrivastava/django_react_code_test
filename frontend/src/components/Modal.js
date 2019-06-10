 import React, { Component } from "react";
    import {
      Button,
      Modal,
      ModalHeader,
      ModalBody,
      ModalFooter,
      Form,
      FormGroup,
      Input,
      Label
    } from "reactstrap";

    export default class CustomModal extends Component {
      constructor(props) {
        super(props);
        this.state = {
          activeItem: this.props.activeItem
        };
      }
      handleChange = e => {
        let { name, value } = e.target;
	console.log("isha");
        const activeItem = { ...this.state.activeItem, [name]: value };
	console.log("activeItem " + activeItem );
        this.setState({ activeItem });
      };
      render() {
        const { toggle, onSave } = this.props;
        return (
          <Modal isOpen={true} toggle={toggle}>
            <ModalHeader toggle={toggle}> Add/Edit Book</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="title">Title</Label>
                  <Input
                    type="text"
                    name="title"
                    value={this.state.activeItem.title}
                    onChange={this.handleChange}
                    placeholder="Enter book Title"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="description">Description</Label>
                  <Input
                    type="text"
                    name="description"
                    value={this.state.activeItem.description}
                    onChange={this.handleChange}
                    placeholder="Enter book description"
                  />
		</FormGroup>
		<FormGroup>
                  <Label for="author">Author</Label>
                  <Input
                    type="text"
                    name="author"
                    value={this.state.activeItem.author}
                    onChange={this.handleChange}
                    placeholder="Enter book author"
                  />
                </FormGroup>
		<FormGroup>
                  <Label for="tags">Tags</Label>
                  <Input
                    type="text"
                    name="tags"
                    value={this.state.activeItem.tags}
                    onChange={this.handleChange}
                    placeholder="Enter book tags"
                  />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                Save
              </Button>
            </ModalFooter>
          </Modal>
        );
      }
    }