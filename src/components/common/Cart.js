import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { checkout, removeFromCart } from "../../store/actions";
import {
  getTotal,
  getCartProducts,
  getCheckoutError,
  isCheckoutPending,
} from "../../store/reducers";

const CartItem = ({ price, quantity, title, image, onRemove }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt={title} src={process.env.PUBLIC_URL + image} />
      </ListItemAvatar>
      <ListItemText primary={title} secondary={`${quantity} X $ ${price}`} />
      <ListItemText
        edge="end"
        primary={`$ ${price * quantity}`}
        style={{ textAlign: "right", marginRight: 16 }}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={() => onRemove()}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={() => onRemove()}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

const Cart = (props) => {
  const {
    products,
    total,
    error,
    checkoutPending,
    checkout,
    removeFromCart,
  } = props;

  const hasProducts = products.length > 0;
  const checkoutAllowed = hasProducts && !checkoutPending;

  const nodes = !hasProducts ? (
    <Container>
      <img
        src={process.env.PUBLIC_URL + "/media/empty-cart.png"}
        alt="Empty Cart"
      />
      <Typography variant="h6" align="center">
        Please add some products to cart.
      </Typography>
    </Container>
  ) : (
    <List dense={false}>
      {products.map((product) => (
        <CartItem
          title={product.name}
          price={product.price}
          quantity={product.quantity}
          image={product.image}
          key={product.id}
          onRemove={() => removeFromCart(product.id)}
        />
      ))}
    </List>
  );

  return (
    <Container style={{ minWidth: 360, padding: 16 }}>
      <div>
        <Typography style={{ marginBottom: 16 }} variant="h5">
          Your Cart
        </Typography>
        <Paper style={{ minHeight: "calc(100vh - 200px)", marginBottom: 16 }}>
          {nodes}
        </Paper>
        <Typography style={{ marginBottom: 16 }} variant="h6">
          Total: &#36;{total}
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="primary"
          fullWidth
          onClick={checkout}
          disabled={checkoutAllowed ? "" : "disabled"}
        >
          CHECKOUT
        </Button>
        <div style={{ color: "red" }}>{error}</div>
      </div>
    </Container>
  );
};

export default connect(
  (state) => ({
    products: getCartProducts(state),
    total: getTotal(state),
    error: getCheckoutError(state),
    checkoutPending: isCheckoutPending(state),
  }),
  { checkout, removeFromCart }
)(Cart);
