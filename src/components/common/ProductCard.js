import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
  offerLabel: {
    opacity: 0.5,
    fontSize: 16,
  },
});

export default function ProductCard({
  id,
  name,
  weight,
  price,
  image,
  offerPercent = 0,
  onAddToCart,
  inventory,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {`$ ${price}`}{" "}
            {offerPercent && offerPercent > 0 ? (
              <span
                className={classes.offerLabel}
              >{`(${offerPercent}% OFF)`}</span>
            ) : (
              ""
            )}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {weight}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="medium"
          color="primary"
          fullWidth
          onClick={() => onAddToCart(id)}
          disabled={inventory === 0}
        >
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
}
