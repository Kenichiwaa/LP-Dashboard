import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
      margin: '1em 0',
      padding: '1em'
  },
  cardHeadingWrapper: {
      textAlign: 'left'
  },
  CardHeading: {
      display: 'inline-block',
      fontSize: '2em',
      paddingRight: '0.8em'
  },
  CardSubHeading: {
    display: 'inline-block',
    color: 'gray',
    fontSize: '0.8em'
  }
}));

export default function DashboardCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
    <div className={classes.cardHeadingWrapper}>
      <Typography heading className={classes.CardHeading}>
        Totals
      </Typography>
      <Typography heading className={classes.CardSubHeading}>
        Last Week
      </Typography>
    </div>
  </Card>
  );
}
