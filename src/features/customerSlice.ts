import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CustomerType {
    id: string;
    name: string;
    food: string[];
}

interface FoodType {
    id: string;
    food: string;
}

export interface CustomersType {
    value: CustomerType[];
}

const initialState: CustomersType = {
    value: [],
};

export const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<CustomerType>) => {
            console.log(action.payload);
            state.value.push(action.payload);
        },
        addFood: (state, action: PayloadAction<FoodType>) => {
            state.value.forEach((customer) => {
                if (customer.id === action.payload.id) {
                    customer.food.push(action.payload.food);
                }
            });
        },
    },
});

export const { addCustomer, addFood } = customerSlice.actions;

export default customerSlice.reducer;
