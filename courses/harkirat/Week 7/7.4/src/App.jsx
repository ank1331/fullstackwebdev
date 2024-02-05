import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  jobsatom,
  messagingatom,
  networkatom,
  notificationatom,
  totalnotifications,
} from "./store/atom/Newatom";
import { notifications } from "./store/atom/Selectoratom";

function App() {
  const [networkcount, setnetworkcount] = useRecoilState(notifications);

  return (
    <div>
      <button>Home</button>
      <button>My Network({networkcount.network > 100 ? "99+" : networkcount.network})</button>
      <button>Jobs({networkcount.jobs})</button>
      <button>Messaging({networkcount.messaging})</button>
      <button>Notifications({networkcount.notifications})</button>
      <button>Me({networkcount.totalnotificationsnew})</button>
    </div>
  );
}

export default App;

// const network = useRecoilValue(networkatom)
// const jobs = useRecoilValue(jobsatom)
// const messaging = useRecoilValue(messagingatom)
// const notifications = useRecoilValue(notificationatom)
// const totalnotificationsnew = useRecoilValue(totalnotifications)

// return (

//     <div>
//       <button>Home</button>
//       <button>My Network({network >100 ?"99+":network})</button>
//       <button>Jobs({jobs})</button>
//       <button>Messaging({messaging})</button>
//       <button>Notifications({notifications})</button>
//       <button>Me({totalnotificationsnew})</button>
//     </div>

// )
