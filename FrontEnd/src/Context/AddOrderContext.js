import { createContext, useEffect, useState } from "react";

export const AddOrderContext = createContext({});

export const AddOrderProvider = ({ children }) => {
  const [openAddOrder, setOpenAddOrder] = useState("close");

  const dataOrderList = [
    {
      id: 1,
      status: "Success",
      sentDate: "12-09-2003",
      senderName: "Huan Hoa Hong",
      senderAddress: "23 Hoang Trung phu tho, tp Dau Buoi",
      recipientName: "Ngo ba Kha",
      recipientAddress: "237 Han Thuyen, Tp Nam dinh",
    },
    {
      id: 2,
      status: "Failed",
      sentDate: "12-09-2003",
      senderName: "Huan Hoa Hong",
      senderAddress: "2 tp Dau Buoi",
      recipientName: "Ngo ba Kha",
      recipientAddress: "237 Han Thuyen, Tp Nam dinh",
    },
    {
      id: 3,
      status: "Processing",
      sentDate: "12-09-2003",
      senderName: "Huan Hoa Hong",
      senderAddress: "23 Hoang Trung phu tho, tp Dau Buoi",
      recipientName: "Ngo ba Kha",
      recipientAddress: "237 Han Thuyen, Tp Nam dinh",
    },
    {
      id: 4,
      status: "Failed",
      sentDate: "12-09-2003",
      senderName: "Huan Hoa Hong",
      senderAddress: "23 Hoang Trung phu tho, tp Dau Buoi",
      recipientName: "Ngo ba Kha",
      recipientAddress: "237 Han Thuyen, Tp Nam dinh",
    },
  ];

  const dataCustomerList = [
    {
      id: 1,
      firstName: "A Cong",
      lastName: "Web",
      phoneNumber: "0888120903",
      emailAddress: "mhp12092003@gmail.com",
    },
  ];

  const dataGatheringPointList = [
    {
      id: 1,
      address: '8A Ton That Tuyet, Tp Ha Noi',
      chief: 'Ovuoi vuoi vuoi vui',
      staffNumber: 18,
    },
    {
      id: 2,
      address: '8A Ton That Tuyet, Tp NNNNN',
      chief: 'Ovuoi vuoi vuoi vui',
      staffNumber: 23,
    },
    {
      id: 3,
      address: '8A Ton That Tuyet, Tp Ha Noi',
      chief: 'Ovuoi vuoi vuoi vuidas',
      staffNumber: 4,
    }
  ]

  const dataTradingPointList = [
    {
      id: 1,
      address: '1231 Tho Thap, Tp Ha Noi',
      gathering: '8A Ton that Thuyet, Tp Ha Noi',
      chief: 'Pham Minh dsadd',
      staffNumber: 22,
    }
  ]

  return (
    <AddOrderContext.Provider
      value={{ openAddOrder, setOpenAddOrder, dataOrderList, dataCustomerList, dataTradingPointList, dataGatheringPointList }}
    >
      {children}
    </AddOrderContext.Provider>
  );
};
