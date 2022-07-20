import classNames from "classnames/bind";
import styles from "./Highlight.module.scss";
import HighlightItem from "./HighlightItem";

const cx = classNames.bind(styles);

function Highlight({ report }) {
  const data = report && report.length ? report[report.length - 1] : [];
  const summary = [
    {
      title: "Số ca nhiễm",
      count: data.Confirmed,
      color: "red",
    },
    {
      title: "Số ca khỏi",
      count: data.Recovered,
      color: "green",
    },
    {
      title: "Số ca tử vong",
      count: data.Deaths,
      color: "grey",
    },
  ];
  return (
    <ul className={cx("list")}>
      {summary.map((item) => (
        <HighlightItem
          title={item.title}
          count={item.count}
          color={item.color}
        />
      ))}
    </ul>
  );
}

export default Highlight;
