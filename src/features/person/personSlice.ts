import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { PersonObj } from "./Person";

interface PersonState {
	persons: PersonObj[];
}

const initialState: PersonState = {
	persons: [],
};

export const personSlice = createSlice({
	name: "person",
	initialState,
	reducers: {
		addPerson: (state, action: PayloadAction<PersonObj>) => {
			state.persons = [action.payload, ...state.persons];
		},
	},
});

export const { addPerson } = personSlice.actions;

export const personAll = (state: RootState) => state.person.persons;

export default personSlice.reducer;
