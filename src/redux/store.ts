import { combineReducers, configureStore } from '@reduxjs/toolkit'
import treeReducer from './slices/treeSlice'

const reducer = combineReducers({
  tree: treeReducer,
})

export const store = configureStore({
  reducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
