import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    ids: [],
    entities: {},
}

const companiesSlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        addCompany(state, action) {
            const { companyName, ...companyData} = action.payload;
            state.entities[companyName] = companyData;
            state.ids.push(companyName);
        },
    },
});

export const { actions } = companiesSlice;
export default companiesSlice.reducer;
