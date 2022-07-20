import { Grid } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import { getMapDataByCountryId } from "../../apis";
import HighMaps from "../Charts/HighMaps";
import LineChart from "../Charts/LineChart";

function Summary({ report, selectedCountryID }) {
  const [mapData, setMapData] = useState({});
  useEffect(() => {
    if (selectedCountryID)
      getMapDataByCountryId(selectedCountryID).then((data) => setMapData(data));
  }, [selectedCountryID]);
  return (
    <Grid container spacing={3}>
      <Grid item sm={8} xs={12}>
        <LineChart data={report} />
      </Grid>
      <Grid item sm={4} xs={12}>
        <HighMaps mapData={mapData} />
      </Grid>
    </Grid>
  );
}

export default Summary;
