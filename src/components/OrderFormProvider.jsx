"use client";

import { createContext, useContext, useState } from "react";
import { OrderForm } from "./OrderForm";

const OrderFormContext = createContext({ open: () => {} });

export const OrderFormProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("");

  const open = (source = "") => {
    setSource(source);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  return (
    <OrderFormContext.Provider value={{ open }}>
      {children}
      <OrderForm isOpen={isOpen} onClose={close} source={source} />
    </OrderFormContext.Provider>
  );
};

export const useOrderForm = () => useContext(OrderFormContext);