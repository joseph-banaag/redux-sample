import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/app/features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState} see inside reducer object
// counter: counterState
export type AppDispatch = typeof store.dispatch;
