import React from "react";
import { Card, CardContent, Grid } from "@material-ui/core";

export const FinalScoreCard = ({ finalScore }) => {
  return (
    <Card elevation={1}>
      <CardContent>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs="auto">
            {`You got ${finalScore} out of 10 questions correct!`}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
