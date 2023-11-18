import { configureStore } from "@reduxjs/toolkit";
import SortSlice from "../features/SortSlice";

export default configureStore({
  reducer: {
    sortVisualizer: SortSlice,
  },
});
