import classNames from "classnames/bind";
import styles from "./Highlight.module.scss";

const cx = classNames.bind(styles);

function Highlight() {
  return (
    <ul className={cx("list")}>
      <li className={cx("item", "red")}>
        <p className={cx("title")}>Số ca nhiễm</p>
        <span className={cx("figure")}>300</span>
      </li>
      <li className={cx("item", "green")}>
        <p className={cx("title")}>Số ca khỏi</p>
        <span className={cx("figure")}>300</span>
      </li>
      <li className={cx("item", "grey")}>
        <p className={cx("title")}>Số ca tử vong</p>
        <span className={cx("figure")}>300</span>
      </li>
    </ul>
  );
}

export default Highlight;
