import classNames from "classnames";
import styles from "./Card.module.scss";

export default function Card({
  title,
  theme = "pale-orange",
  className,
  children,
}) {
  return (
    <section
      title={title}
      className={classNames(styles.card, className)}
      data-theme={theme}
    >
      {children}
    </section>
  );
}
