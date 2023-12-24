import { createContext, useEffect, useState } from "react";

export const AddOrderContext = createContext({});

export const AddOrderProvider = ({ children }) => {
  const [openAddOrder, setOpenAddOrder] = useState("close");
  const [openTableAGP, setOpenTableAGP] = useState("close");
  const [openTableATP, setOpenTableATP] = useState("close");

  useEffect(() => {
     //Lay danh sach diem tap ket
     fetch("http://localhost:8080/admin/getGatheringPoints")
     .then((res) => {
         return res.json();
     })
     .then((data) => {
         if (data.status === 'success') {
            //  var users = data.data;
            //  checkUser(users, usernameValue, passwordValue)
            // console.log("Success:");
            var list = data.data;
            for (let i = 0; i < list.length; ++i) {
              dataGatheringPointList[i].id = list[i].id;
              dataGatheringPointList[i].chief = list[i].employeeId;
              dataGatheringPointList[i].name = list[i].name;
              dataGatheringPointList[i].address = list[i].address;
            }
         } else {
             console.log('API getAllUsers error!');
         }
     })
     .catch((err) => {
         console.log(err);
     });
  //
  },[]);

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
      name: 'diem tap ket 1',
    },
    {
      id: 2,
      address: '8A Ton That Tuyet, Tp NNNNN',
      chief: 'Ovuoi vuoi vuoi vui',
      name: 'diem tap ket 2',
    },
    {
      id: 3,
      address: '8A Ton That Tuyet, Tp Ha Noi',
      chief: 'Ovuoi vuoi vuoi vuidas',
      name: 'diem tap ket 3',
    }
  ]

  const dataTradingPointList = [
    {
      id: 1,
      address: '1231 Tho Thap, Tp Ha Noi',
      gathering: '8A Ton that Thuyet, Tp Ha Noi',
      chief: 'Pham Minh dsadd',
      staffNumber: 22,
      name: 'diem giao dich 1',
    },
    {
      id: 2,
      address: '1231 Tho Thap, Tp Ha Noi',
      gathering: '8A Ton that Thuyet, Tp Ha Noi',
      chief: 'Pham Minh dsadd',
      staffNumber: 22,
      name: 'diem giao dich 2',
    }
  ]

  return (
    <AddOrderContext.Provider
      value={{ openAddOrder, setOpenAddOrder, openTableAGP, setOpenTableAGP, openTableATP, setOpenTableATP, dataOrderList, dataCustomerList, dataTradingPointList, dataGatheringPointList }}
    >
      {children}
    </AddOrderContext.Provider>
  );
};
