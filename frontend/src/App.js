  // frontend/src/App.js

    import React, { Component } from "react";
    import Modal from "./components/Modal";
    import axios from "axios";

    class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
	  modal: false,
	  activeItem: {
            title: "",
            description: "",
            author: "",
	    tags: ""
          },
          todoList: []
        };
      }
      componentDidMount() {
        this.refreshList();
      }
      refreshList = () => {
        axios
          .get("http://localhost:8000/api/django_tests/")
          .then(res => this.setState({ todoList: res.data }))
          .catch(err => console.log(err));
      };
	
      toggle = () => {
        this.setState({ modal: !this.state.modal });
      };
      handleSubmit = item => {
        this.toggle();
         if (item.id) {
          axios
            .put(`http://localhost:8000/api/django_tests/${item.id}/`, item)
            .then(res => this.refreshList());
          return;
        }
        axios
          .post("http://localhost:8000/api/django_tests/", item)
          .then(res => this.refreshList());
      };
      handleDelete = item => {
       axios
          .delete(`http://localhost:8000/api/django_tests/${item.id}`,item)
          .then(res => this.refreshList());
      };
      createItem = () => {
        const item = { title: "", description: "",author: "",tags: "" };
        this.setState({ activeItem: item, modal: !this.state.modal });
      };
      editItem = item => {
        this.setState({ activeItem: item, modal: !this.state.modal });
      };
      renderTabList = () => {
        return (
          <div className="my-5 tab-list">
		<h3>List of Books</h3>
          </div>
        );
      };
      renderItems = () => {
        const newItems = this.state.todoList;
        return newItems.map(item => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span
              className={`todo-title mr-2`}
              title={item.author}
            >
              {item.title}
            </span>
            <span>
              <button onClick={() => this.editItem(item)} className="btn btn-secondary mr-2">  {" "}
                Edit{" "} </button>
              <button onClick={() => this.handleDelete(item)} className="btn btn-danger"> Delete{" "} </button>
            </span>
          </li>
        ));
      };
      render() {
        return (
          <main className="content">
            <h1 className="text-white text-uppercase text-center my-4">Django-React Code Challenge App</h1>
            <div className="row ">
              <div className="col-sm-10 mx-auto p-0">
                <div className="card p-3">
                  {this.renderTabList()}
                  <ul className="list-group list-group-flush">
                    {this.renderItems()}
                  </ul>
  		  <div className="text-right add-book-btn">
                    <button onClick={this.createItem} className="btn btn-primary">Add book</button>
                  </div>
                </div>
              </div>
            </div>
	   {this.state.modal ? (
              <Modal
                activeItem={this.state.activeItem}
                toggle={this.toggle}
                onSave={this.handleSubmit}
              />
            ) : null}
          </main>
        );
      }
    }
    export default App;