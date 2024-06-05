import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, changesearchTerm, addCar, removeCar } from "./slices/carsSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

// console.log(store.getState());

export { store, changeName, changeCost, changesearchTerm, addCar, removeCar };