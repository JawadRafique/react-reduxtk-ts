import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood, CustomerType } from "../features/customerSlice";

export const CustomerCard = ({ id, name, food }: CustomerType) => {
    const [foodItem, setFoodItem] = useState<string>("");

    const dispatch = useDispatch();

    return (
        <div className="customer-food-card-container" key={id}>
            <p>{name}</p>
            <div className="customer-foods-container">
                <div className="customer-food">
                    {food.map((fooditem, key) => {
                        return <p key={key}>{fooditem}</p>;
                    })}
                </div>
                <div className="customer-food-input-container">
                    <input
                        type="text"
                        value={foodItem}
                        onChange={(e) => setFoodItem(e.target.value)}
                    />
                    <button
                        onClick={() => {
                            dispatch(addFood({ id: id, food: foodItem }));
                            setFoodItem("");
                        }}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};
