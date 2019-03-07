import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAuthor: null,
    filterdAuthors: authors
  };
  unselectAuthor = () => {
    this.setState({ currentAuthor: null });
  };
  selectAuthor = author => {
    const newAuthor = author;
    this.setState({ currentAuthor: newAuthor });
  };
  getContentView = () => {
    if (this.state.currentAuthor) {
      return <AuthorDetail author={this.state.currentAuthor} />;
    } else {
      return (
        <AuthorsList
          authors={this.state.filterdAuthors}
          selectAuthor={this.selectAuthor}
          filterAuthors={this.filterAuthors}
        />
      );
    }
  };
  //will return True or Falus
  filterAuthors = query => {
    this.setState({
      filterdAuthors: authors.filter(author =>
        `${author.first_name} ${author.last_name}`
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    });
  };
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar unselectAuthor={this.unselectAuthor} />
          </div>
          <div className="content col-10">{this.getContentView()}</div>
        </div>
      </div>
    );
  }
}

export default App;
