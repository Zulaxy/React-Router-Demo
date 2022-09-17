import { Fragment } from "react";
import AppBarMUI from "./AppBarMUI";

import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <Fragment>
      <AppBarMUI />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
