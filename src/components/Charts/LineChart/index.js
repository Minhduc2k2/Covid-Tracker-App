import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
import React, { useEffect, useState } from "react";
// import classNames from "classnames/bind";
import "./LineChart.css";

// const cx = classNames.bind(styles);

const generateOptions = (data) => {
  const categories = data.map((item) => moment(item.Date).format("DD/MM/YYYY"));
  return {
    chart: {
      height: 500,
    },
    title: {
      text: "Tổng ca nhiễm",
    },
    xAxis: {
      categories: categories,
      crosshair: true,
    },
    colors: ["#F3585B"],
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        align: "right",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Tổng Ca nhiễm",
        data: data.map((item) => item.Confirmed),
      },
    ],
  };
};

function LineChart({ data }) {
  const [options, setOptions] = useState({});
  const [reportType, setReportType] = useState({});

  useEffect(() => {
    let customData = [];
    switch (reportType) {
      case "all":
        customData = data;
        break;
      case "month":
        customData = data.slice(data.length - 30);
        break;
      case "week":
        customData = data.slice(data.length - 7);
        break;
      default:
        break;
    }
    setOptions(generateOptions(customData));
  }, [data, reportType]);

  const handleOnClick = (e) => {
    const button_list = document.querySelectorAll("button");
    const button_arr = [...button_list];
    button_arr.forEach((button) => button.classList.remove("active"));
    e.target.classList.add("active");
  };
  return (
    <div>
      <div className={"button-group"}>
        <button
          onClick={(e) => {
            setReportType("all");
            handleOnClick(e);
          }}
        >
          TẤT CẢ
        </button>
        <button
          onClick={(e) => {
            setReportType("month");
            handleOnClick(e);
          }}
        >
          30 Ngày
        </button>
        <button
          onClick={(e) => {
            setReportType("week");
            handleOnClick(e);
          }}
        >
          7 Ngày
        </button>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default LineChart;
