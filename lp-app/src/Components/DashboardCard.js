import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  card: {
    margin: "1em 0",
    padding: "1em"
  },
  cardHeadingWrapper: {
    textAlign: "left"
  },
  CardHeading: {
    display: "inline-block",
    fontSize: "2em",
    paddingRight: "0.8em"
  },
  CardSubHeading: {
    display: "inline-block",
    color: "gray",
    fontSize: "0.8em"
  },
  stats: {
    borderRight: "1px solid gray",
    minWidth: '4em',
    margin: '0.5em'
  },
  images: {
    width: "100%"
  },
  cardStats: {
      marginBottom: '3em'
  },
  gridTables: {
      marginTop: '2em'
  }
}));

export default function DashboardCard() {
  const classes = useStyles();

  const stats = {
    Totals: {
      newFeedbacks: 500,
      totalProfit: 15000000,
      newOrders: 0,
      BrandPopularity: 0.99
    }
  };

  const statText = [
    "New Feedbacks",
    "Total Profit",
    "New Orders",
    "Brand Popularity"
  ];

  function cardStats(props) {
    let data = Object.values(props.Totals);
    console.log("data", data);

    return data.map((stat, key) => (
      <Grid item sm={6} md={3} key={key}>
        <div className={classes.stats}>
          <Typography variant="h2" component="h2">
            {stat}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            text
          </Typography>
        </div>
      </Grid>
    ));
  }

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

      <CardContent>
        <Grid container className={classes.cardStats}>
        {cardStats(stats)}
        </Grid>

        <Divider />

        <Grid container  className={classes.gridTables}>
          <Grid item md={6}>
            <img
              src={require("../Images/table2.png")}
              className={classes.images}
            />
          </Grid>
          <Grid item md={6}>
            <img
              src={require("../Images/table1.png")}
              className={classes.images}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
