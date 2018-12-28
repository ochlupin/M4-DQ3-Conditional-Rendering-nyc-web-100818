import React from "react";

const MenuBar = ({ changeSelected, selected }) => {
  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */
  // changeSelected is a function that is passed down as a prop, its a callback for the click event handler

  const handleClick = event => {
    changeSelected(event.target.id);
  };

  return (
    <div className="ui four item menu">
      <a
        className={"item " + (selected === "profile" ? "active" : null)}
        id="profile"
        onClick={handleClick}
      >
        <i className="user large icon" id="profile" />
      </a>

      <a
        className={"item " + (selected === "photo" ? "active" : null)}
        id="photo"
        onClick={handleClick}
      >
        <i className="photo large icon" id="photo" />
      </a>

      <a
        className={"item " + (selected === "cocktail" ? "active" : null)}
        id="cocktail"
        onClick={handleClick}
      >
        <i className="cocktail large icon" id="cocktail" />
      </a>

      <a
        className={"item " + (selected === "pokemon" ? "active" : null)}
        id="pokemon"
        onClick={handleClick}
      >
        <i className=" themeisle large icon" id="cocktail" />
      </a>
    </div>
  );
};

export default MenuBar;
