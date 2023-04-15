import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Design";
import Home from "./components/Home";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdrawal";
import UserAccount from "./components/UserLogin";
import AllData from "./components/AllData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Design />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="deposit" element={<Deposit />} />
            <Route path="withdrawal" element={<Withdrawal />} />
            <Route path="myAccount" element={<UserLogin />} />
            <Route path="allData" element={<AllData />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}

export default App;
