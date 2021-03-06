import * as React from "react";
import * as style from "./style.scss";
import { Link } from "react-router-dom";

interface IProps {}

interface IState {}

class App extends React.Component<IProps, IState> {
  render() {
    return (
      <div>
        <h1 className={style.header}>Frontend: Header Component</h1>
        <div className={style.linkbox}>
          <Link to="/">Main</Link>
        </div>
        <div className={style.linkbox}>
          <Link to="/content">Content</Link>
        </div>
        <div className={style.linkbox}>
          <Link to="/user">User</Link>
        </div>
        <div className={style.linkbox}>
          <Link to="/user/123">User:id 123</Link>
        </div>
        <div className={style.linkbox}>
          <Link to="/about">about (404)</Link>
        </div>
      </div>
    );
  }
}

export default App;
