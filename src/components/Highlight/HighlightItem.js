import classNames from "classnames/bind";
import styles from "./Highlight.module.scss";
import CountUp from "react-countup";
const cx = classNames.bind(styles);

function HighlightItem({ title, count, color }) {
  return (
    <li className={cx("item", color)}>
      <p className={cx("title")}>{title}</p>
      <span className={cx("figure")}>
        <CountUp end={count} duration={5} separator=" " />
      </span>
    </li>
  );
}

export default HighlightItem;
