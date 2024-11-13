import React, { createContext, useState } from 'react';

// Create a Context for the bus data
export const BusContext = createContext();

// Create a provider component
export const BusProvider = ({ children }) => {
    const [busDetails, setBusDetails] = useState([
        { id: 1, departure: "08:00 AM", arrival: "12:00 PM", start: "New York", end: "Boston", availableSeats: 5 },
        { id: 2, departure: "09:00 AM", arrival: "01:00 PM", start: "Los Angeles", end: "San Francisco", availableSeats: 99},
        // Add more bus details as needed
    ]);

    const bookBus = (id) => {
        setBusDetails(prevBusDetails => {
            return prevBusDetails.map(bus => {
                if (bus.id === id && bus.availableSeats > 0) {
                    return { ...bus, availableSeats: bus.availableSeats - 1 };
                }
                return bus;
            });
        });
    };

    return (
        <BusContext.Provider value={{ busDetails, bookBus }}>
            {children}
        </BusContext.Provider>
    );
};
