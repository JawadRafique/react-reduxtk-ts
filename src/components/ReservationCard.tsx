import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../features/customerSlice";
import { removeReservation } from "../features/reservationSlice";
import { v4 as uuid } from "uuid";

interface ReservationCardType {
    name: string;
    id: number;
}

export const ReservationCard = ({ name, id }: ReservationCardType) => {
    const [cardName, setCardName] = useState<string>("");
    const dispatch = useDispatch();

    const handleCardClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        name: string
    ) => {
        // setCardName(name);
    };

    return (
        <div
            className="reservation-card-container"
            key={id}
            onClick={(e) => handleCardClick(e, name)}
        >
            {name}
            <span
                className="remove"
                onClick={() => dispatch(removeReservation(id))}
            >
                X
            </span>
            <span
                className="add"
                onClick={() => {
                    dispatch(
                        addCustomer({
                            id: uuid(),
                            name: name,
                            food: [],
                        })
                    );
                    dispatch(removeReservation(id));
                }}
            >
                +
            </span>
        </div>
    );
};
