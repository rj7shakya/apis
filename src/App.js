// import logo from "./logo.svg";
// import "./App.css";
// import { useEffect, useState } from "react";

// import axios from "axios";

// function App() {
//   const [users, setUsers] = useState(null);

//   useEffect(() => {
//     const callFxn = async () => {
//       axios
//         .get("https://jsonplaceholder.typicode.com/users")
//         .then((response) => {
//           //before filter method

//           const allUsers = response?.data;

//           const last2Users = allUsers.filter((user) => user.id > 8);

//           setUsers(last2Users);

//           //setUsers(response.data)
//         })
//         .catch((err) => console.log(err));
//     };

//     callFxn();
//   }, []);

//   // console.log("users", users);

//   return (
//     <div className="App">
//       {users ? (
//         users.map((item, index) => <div key={index}>{item?.name}</div>)
//       ) : (
//         <div>laoding users</div>
//       )}
//     </div>
//   );
// }

// export default App;

// import logo from './logo.svg';

import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const callFxn = async () => {
      axios
        // .get("https://jsonplaceholder.typicode.com/users")
        // .then((response) => {
        //   console.log(response?.data);
        // })
        // .catch((err) => console.log(err));

        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          //before filter method
          // const allUsers = response?.data;
          // const topUsers = allUsers.filter((item) => item.id<6);

          // setUsers(topUsers);

          console.log(response?.data);
        })
        .catch((err) => console.log(err));
    };
    callFxn();
  }, []);

  console.log("users", users);

  return (
    <div className="App">
      {users ? (
        users.map((item, index) => <div key={index}>{item?.name}</div>)
      ) : (
        <div>loading users</div>
      )}
    </div>
  );
}

export default App;
