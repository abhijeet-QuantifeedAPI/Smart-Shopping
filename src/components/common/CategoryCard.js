import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 220,
  },
  content: {
    background: "#3f51b5",
    color: "#fff",
  },
});

export default function CategoryCard({ name, label, id, image, onClick }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => onClick(id)}>
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + image}
          title={name}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" color="white" component="h5">
            {name}
          </Typography>
          <Typography variant="body1" color="white" component="p">
            {label}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
