import React, { createContext, useContext, useState, ReactNode } from "react";

export type Booking = {
    customer: string;
    service: string;
    date: string;
    time: string;
};

type BookingContextType = {
    bookings: Booking[];
    addBooking: (booking: Booking) => void;
    clearBookings: () => void;
};

const BookingContext = createContext<BookingContextType | undefined>(
    undefined
);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
    const [bookings, setBookings] = useState<Booking[]>([]);

    const addBooking = (booking: Booking) => {
        setBookings((prev) => [...prev, booking]);
    };

    const clearBookings = () => {
        setBookings([]);
    };

    return (
        <BookingContext.Provider
            value={{
                bookings,
                addBooking,
                clearBookings,
            }}
        >
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = () => {
    const context = useContext(BookingContext);

    if (!context) {
        throw new Error(
            "useBooking must be used inside a BookingProvider"
        );
    }

    return context;
};
