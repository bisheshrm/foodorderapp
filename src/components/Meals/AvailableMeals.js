import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const CUR_MEALS = [
  {
    id: "m1",
    name: "Butter Chicken",
    description: "Baked Chicken wih creamy sauce",
    price: 15,
  },
  {
    id: "m2",
    name: "Goat Curry",
    description: "Goat meat with curry sauce",
    price: 18,
  },
  {
    id: "m3",
    name: "Combo Biryani",
    description: "Basmati rice cooked with shrimp, chicken, lamb, green peas, nuts and raisins",
    price: 20,
  },
  {
    id: "m4",
    name: "Mango Lassi",
    description: "Mango based yougurt drink",
    price: 5,
  },
];

const AvailableMeals = () => {
  const mealsList = CUR_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return <section className={classes.meals}>
      <Card><ul>{mealsList}</ul></Card></section>;
};

export default AvailableMeals;
