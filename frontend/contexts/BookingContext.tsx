import React, { createContext, useContext, useState, ReactNode } from "react";

/* ===== Booking Type ===== */
export type Booking = {
    customer: string;
    service: string;
    date: string;
    time: string;
};

/* ===== Context Type ===== */
type BookingContextType = {
    bookings: Booking[];
    addBooking: (booking: Booking) => void;
    clearBookings: () => void;
};

/* ===== Create Context ===== */
const BookingContext = createContext<BookingContextType | undefined>(
    undefined
);

/* ===== Provider ===== */
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

/* ===== Hook ===== */
export const useBooking = () => {
    const context = useContext(BookingContext);

    if (!context) {
        throw new Error(
            "useBooking must be used inside a BookingProvider"
        );
    }

    return context;
};
