import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = () => <CircularProgress />;
export const When = ({ value, render }) =>
  value === null || value === undefined ? <Spinner color="primary" /> : render(value);

