import { Container } from "@material-ui/core";
import { sortBy } from "lodash";
import { useState, useEffect } from "react";
import { getCountries, getReportByCountry } from "./apis";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import "@fontsource/roboto";
import moment from "moment";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryID, setSelectedCountryID] = useState("");
  const [report, setReport] = useState([]);
  useEffect(() => {
    getCountries().then((res) => {
      setCountries(sortBy(res.data, "Country"));
      setSelectedCountryID("vn");
    });
  }, []);
  const handleOnChange = (e) => {
    setSelectedCountryID(e.target.value);
  };

  useEffect(() => {
    if (selectedCountryID) {
      const country = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryID
      );
      getReportByCountry(country.Slug).then((res) => {
        //TODO: Bỏ đi phần tử cuối mảng vì chưa hết ngày nên dữ liệu không chính xác
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [countries, selectedCountryID]);
  return (
    <Container>
      <h1 style={{ fontFamily: "roboto" }}>COVID TRACKER</h1>
      <p style={{ fontFamily: "roboto" }}>{moment().format("DD/MM/YYYY")}</p>
      <CountrySelector
        countries={countries}
        handleOnChange={handleOnChange}
        value={selectedCountryID}
      />
      <Highlight report={report} />
      <Summary report={report} selectedCountryID={selectedCountryID} />
    </Container>
  );
}

export default App;
