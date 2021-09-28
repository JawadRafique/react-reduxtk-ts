import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import { CustomerCard } from "./components/CustomerCard";
import { ReservationCard } from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {
    const [reservationInput, setReservationInput] = useState<string>("");

    const dispatch = useDispatch();
    const reservations = useSelector(
        (state: RootState) => state.reservations.value
    );
    const customers = useSelector((state: RootState) => state.customers.value);

    const handleAddReservation = () => {
        if (!reservationInput) return;
        dispatch(addReservation(reservationInput));
        setReservationInput("");
    };
    return (
        <div className="App">
            <div className="container">
                <div className="reservation-container">
                    <div>
                        <h5 className="reservation-header">Reservations</h5>
                        <div className="reservation-cards-container">
                            {reservations.map((name, key) => {
                                return <ReservationCard name={name} id={key} />;
                            })}
                        </div>
                    </div>
                    <div className="reservation-input-container">
                        <input
                            type="text"
                            value={reservationInput}
                            onChange={(e) =>
                                setReservationInput(e.target.value)
                            }
                        />
                        <button onClick={handleAddReservation}>Add</button>
                    </div>
                </div>
                <div className="customer-food-container">
                    {customers.map((customer) => {
                        return (
                            <CustomerCard
                                id={customer.id}
                                name={customer.name}
                                food={customer.food}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
