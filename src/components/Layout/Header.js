import {Fragment} from "react";
import imageMeals from '../../assets/meals.jpg';
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
          <h1>React meals</h1>
          <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
          <img src={imageMeals} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;