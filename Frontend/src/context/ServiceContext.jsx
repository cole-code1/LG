// src/context/ServiceContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [selectedService, setSelectedService] = useState(() => {
    return localStorage.getItem("selectedService") || "";
  });

  useEffect(() => {
    if (selectedService) {
      localStorage.setItem("selectedService", selectedService);
    }
  }, [selectedService]);

  return (
    <ServiceContext.Provider
      value={{
        selectedService,
        setSelectedService,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => useContext(ServiceContext);