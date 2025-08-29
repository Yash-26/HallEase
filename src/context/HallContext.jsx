import { createContext, useContext, useState, useEffect } from "react";

const HallContext = createContext();

export const HallProvider = ({ children }) => {
  const [selectedHall, setSelectedHall] = useState(null);

  useEffect(() => {
    const storedHall = localStorage.getItem("selectedHall");
    if (storedHall) {
      setSelectedHall(JSON.parse(storedHall));
    }
  }, []);

  useEffect(() => {
    if (selectedHall) {
      localStorage.setItem("selectedHall", JSON.stringify(selectedHall));
    } else {
      localStorage.removeItem("selectedHall");
    }
  }, [selectedHall]);

  return (
    <HallContext.Provider value={{ selectedHall, setSelectedHall }}>
      {children}
    </HallContext.Provider>
  );
};

export const useHall = () => useContext(HallContext);
