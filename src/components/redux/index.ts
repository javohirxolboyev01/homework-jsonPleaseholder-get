import { configureStore } from "@reduxjs/toolkit";
import postos from "./feature/postsSlice";
import comments from "./feature/commentsSlice";
import albums from "./feature/albumSlice";
import photos from "./feature/photoSlice";
import todos from "./feature/todoSlice";
import users from "./feature/userSlice";
export const store = configureStore({
  reducer: {
    postos,
    comments,
    albums,
    photos,
    todos,
    users,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
