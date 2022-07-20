import classNames from "classnames/bind";
import styles from "./Highlight.module.scss";

const cx = classNames.bind(styles);

function HighlightItem({ title, count, color }) {
  return (
    <li className={cx("item", color)}>
      <p className={cx("title")}>{title}</p>
      <span className={cx("figure")}>{count}</span>
    </li>
  );
}

export default HighlightItem;
