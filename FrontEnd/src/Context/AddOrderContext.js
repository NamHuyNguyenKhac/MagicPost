import { createContext, useEffect, useState } from "react";

export const AddOrderContext = createContext({});

export const AddOrderProvider = ({children}) => {
        const [openAddOrder, setOpenAddOrder] = useState('close');

        return <AddOrderContext.Provider value={{openAddOrder, setOpenAddOrder}}>
            {children}
        </AddOrderContext.Provider>
}