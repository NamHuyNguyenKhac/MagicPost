import { createContext, useEffect, useState } from "react";

export const AddOrderContext = createContext({});

export const AddOrderProvider = ({ children }) => {

  const [openAddOrder, setOpenAddOrder] = useState("close");
  const [openTableAGP, setOpenTableAGP] = useState("close");
  const [openTableATP, setOpenTableATP] = useState("close");
  const [openTableAS, setOpenTableAS] = useState("close");
  const [openTableASG, setOpenTableASG] = useState("close");
  const [openTableAETP, setOpenTableAETP] = useState("close");

  const [openTableSGP, setOpenTableSGP] = useState("close");
  const [openTableSTP, setOpenTableSTP] = useState("close");

  const [dataGatheringPointList, setDataGatheringPointList] = useState([]);
  const [dataTradingPointList, setDataTradingPointList] = useState([]);
  const [dataUsersList, setDataUsersList] = useState([]);
  const [reRenderGPL, setReRenderGPL] = useState(false);

  const [isDataFetched, setIsDataFetched] = useState(false);

  const [dataGatheringPoint_SGP, setDataGatheringPoint_SGP] = useState();
  const [dataTradingPoint_STP, setDataTradingPoint_STP] = useState();

  const [dataTPLeader, setDataTPLeader] = useState([]);

  const [rootUserId, setRootUserId] = useState(0);

  // useEffect(() => {
  //   console.log("!!",rootUserId);
  // },[rootUserId])

  useEffect(() => {
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
          console.log("API getGathering error!");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    //Lay danh sach diem giao dich
    fetch("http://localhost:8080/admin/getTransactionPoints")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          var list = data.data;
          const newData2 = list.map((item) => ({
            id: item.id,
            chief: item.employeeId,
            name: item.name,
            address: item.address,
            gathering: item.gatheringPointName,
            gatheringId: item.gatheringPointId,
          }));
          if (newData2) {
            // console.log(list);
            setDataTradingPointList(newData2);
          }
          setIsDataFetched(true);
          setReRenderGPL(true);
        } else {
          console.log("API getTrans P error!");
        }
      })
      .catch((err) => {
        console.log(err);
      });

      // fetch() 

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
      recipientAddress: "237 Han Thuyen, Tp Nam din111111111111111h",
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

  return (
    <AddOrderContext.Provider
      value={{
        rootUserId,
        setRootUserId,
        openTableASG,
        setOpenTableASG,
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
        setDataTradingPointList,
        dataGatheringPointList,
        setDataGatheringPointList,
        reRenderGPL,
        setReRenderGPL,
        openTableAS,
        setOpenTableAS,
        dataUsersList,
        setDataUsersList,
        openTableSGP,
        setOpenTableSGP,
        openTableSTP,
        setOpenTableSTP,
        dataGatheringPoint_SGP,
        setDataGatheringPoint_SGP,
        dataTradingPoint_STP,
        setDataTradingPoint_STP,
        openTableAETP,
        setOpenTableAETP,
      }}
    >
      {children}
    </AddOrderContext.Provider>
  );
};
