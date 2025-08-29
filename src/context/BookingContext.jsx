import { createContext, useContext, useState, useEffect } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const storedBooking = localStorage.getItem("bookingDetails");
    if (storedBooking) {
      setBookingDetails(JSON.parse(storedBooking));
    }
  }, []);

  useEffect(() => {
    if (bookingDetails) {
      localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    } else {
      localStorage.removeItem("bookingDetails");
    }
  }, [bookingDetails]);

  return (
    <BookingContext.Provider value={{ bookingDetails, setBookingDetails }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
