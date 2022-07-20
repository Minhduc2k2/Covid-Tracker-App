import { useState, useEffect } from "react";
import { getCountries, getReportByCountry } from "./apis";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryID, setSelectedCountryID] = useState("");
  const [report, setReport] = useState([]);
  useEffect(() => {
    getCountries().then((res) => {
      setCountries(res.data);
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
    <div className="App">
      <CountrySelector
        countries={countries}
        handleOnChange={handleOnChange}
        value={selectedCountryID}
      />
      <Highlight report={report} />
      <Summary report={report} />
    </div>
  );
}

export default App;
