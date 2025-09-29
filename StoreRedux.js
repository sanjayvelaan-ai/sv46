import { InitialState } from "./ReduceRedux";
import ReduceRedux from "./ReduceRedux";
import { createStore } from "redux";
export const store = createStore(ReduceRedux,InitialState);