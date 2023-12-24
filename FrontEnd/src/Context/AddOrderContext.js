import { createContext, useEffect, useState } from "react";

export const AddOrderContext = createContext({});

export const AddOrderProvider = ({ children }) => {
  const [openAddOrder, setOpenAddOrder] = useState("close");
  const [openTableAGP, setOpenTableAGP] = useState("close");
  const [openTableATP, setOpenTableATP] = useState("close");
  const [dataGatheringPointList, setDataGatheringPointList] = useState([]);
  const [reRenderGPL, setReRenderGPL] = useState(false);

  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    // if (!isDataFetched) {

      // console.log('re render');
      //Lay danh sach diem tap ket
      fetch("http://localhost:8080/admin/getGatheringPoints")
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            var list = data.data;
            const newData = list.map((item) => ({
              id: item.id,
              chief: item.employeeId,
              name: item.name,
              address: item.address,
            }));
            setDataGatheringPointList(newData);
            setIsDataFetched(true);
            setReRenderGPL(true);
          } else {
            console.log("API getAllUsers error!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    // }
  }, [isDataFetched]);

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

  const dataTradingPointList = [
    {
      id: 1,
      address: "1231 Tho Thap, Tp Ha Noi",
      gathering: "8A Ton that Thuyet, Tp Ha Noi",
      chief: "Pham Minh dsadd",
      staffNumber: 22,
      name: "diem giao dich 1",
    },
    {
      id: 2,
      address: "1231 Tho Thap, Tp Ha Noi",
      gathering: "8A Ton that Thuyet, Tp Ha Noi",
      chief: "Pham Minh dsadd",
      staffNumber: 22,
      name: "diem giao dich 2",
    },
  ];

  return (
    <AddOrderContext.Provider
      value={{
        openAddOrder,
        setOpenAddOrder,
        setIsDataFetched,
        openTableAGP,
        setOpenTableAGP,
        openTableATP,
        setOpenTableATP,
        dataOrderList,
        dataCustomerList,
        dataTradingPointList,
        dataGatheringPointList,
        setDataGatheringPointList,
        reRenderGPL,
        setReRenderGPL,
      }}
    >
      {children}
    </AddOrderContext.Provider>
  );
};
