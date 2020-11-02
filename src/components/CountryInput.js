import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
export default function CountryInput({ getCountry }) {
  const classes = useStyles();
  const [country, setcountry] = React.useState("");

  const [state, setstate] = React.useState({});

  React.useEffect(() => {
    const fetchApi = async () => {
      let url = await fetch(`https://covid19.mathdro.id/api/countries`);
      let res = await url.json();
      return res;
    };
    fetchApi().then((a) => setstate(a));
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormControl
        className={classes.formControl}
        onSubmit={getCountry(country)}
      >
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          onChange={(event) => {
            setcountry(event.target.value);
          }}
        >
          {state?.countries?.map((a) => (
            <MenuItem key={a.name} value={a.name}>
              {a.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
