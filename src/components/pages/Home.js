import React from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CategoryCard from "../common/CategoryCard";
import categories, { offers } from "../../data/categories";

const CategoryPage = () => {
  const history = useHistory();

  const handleOfferClick = (offer) => {
    history.push(`/deal/${offer}`);
  };

  const handleCategoryClick = (id) => {
    history.push(`/category/${id}`);
  };

  return (
    <>
      <Container style={{ marginBottom: 64 }}>
        <Typography variant="h4" gutterBottom style={{ marginBottom: 32 }}>
          Welcome to Smart Shopping Mart
        </Typography>
        <Grid container spacing={3}>
          {offers.map((offer) => {
            return (
              <Grid item xs={4}>
                <CategoryCard
                  key={offer.id}
                  name={offer.name}
                  image={offer.image}
                  label={offer.label}
                  id={offer.id}
                  onClick={handleOfferClick}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Container style={{ marginBottom: 64 }}>
        <Typography variant="h4" gutterBottom style={{ marginBottom: 32 }}>
          Featured Product Categories
        </Typography>
        <Grid container spacing={3}>
          {categories.map((offer) => {
            return (
              <Grid item xs={4}>
                <CategoryCard
                  key={offer.id}
                  name={offer.name}
                  image={offer.image}
                  label={offer.label}
                  id={offer.id}
                  onClick={handleCategoryClick}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default CategoryPage;
