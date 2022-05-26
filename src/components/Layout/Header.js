import {Fragment} from "react";
import imageMeals from '../../assets/meals.jpg';
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
          <h1>Nepali React Meals</h1>
          <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
          <img src={imageMeals} alt='A table full of delicious Nepalese food!' />
      </div>
    </Fragment>
  );
};

export default Header;
