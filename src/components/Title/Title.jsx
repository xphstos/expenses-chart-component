import classNames from "classnames";
import { createElement } from "react";
import styles from "./Title.module.scss";

export default function Title({ as = h1, className, children }) {
  return createElement(
    as,
    {
      className: classNames(styles.title, className),
    },
    ...children
  );
}
