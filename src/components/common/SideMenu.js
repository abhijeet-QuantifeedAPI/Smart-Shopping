import React from "react";
import { useHistory } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Popover from "@material-ui/core/Popover";
import HomeIcon from "@material-ui/icons/Home";
import CategoryIcon from "@material-ui/icons/Category";

export const SideMenu = () => {
  let history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleHomeClick = () => {
    history.push("/");
  };

  const handleCategoryClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCategoryClose = () => {
    setAnchorEl(null);
  };

  const handleCategorySubMenuClick = (category) => {
    handleCategoryClose();
    history.push(`/category/${category}`);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <ListItem button onClick={handleHomeClick}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem
        button
        onClick={handleCategoryClick}
        style={{ backgroundColor: open ? "#ddd" : "white" }}
      >
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Category" />
      </ListItem>
      <Popover
        id="simple-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handleCategoryClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
      >
        <ListItem
          button
          onClick={() => handleCategorySubMenuClick("vegetables")}
        >
          <ListItemText primary="Vegetables" />
        </ListItem>
        <ListItem button onClick={() => handleCategorySubMenuClick("fruits")}>
          <ListItemText primary="Fruits" />
        </ListItem>
        <ListItem
          button
          onClick={() => handleCategorySubMenuClick("household")}
        >
          <ListItemText primary="Household" />
        </ListItem>
      </Popover>
    </div>
  );
};
