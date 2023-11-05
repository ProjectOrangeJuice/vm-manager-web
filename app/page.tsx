'use client'

import { ApiListResponse, WaitingTable, VMTable } from "./vm-table";
import { useState, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  const [apiResp, setVmDetails] = useState<ApiListResponse>({
    ActiveClients: [],
    DisconnectedClients: [],
    WaitingClients: [],
  });
  useEffect(() => {
    const fetchVmDetails = async () => {
      const response = await fetch(`${process.env.API_URL}/api/list`);
      const data = await response.json();
      setVmDetails(data);
    };

    fetchVmDetails();

    const interval = setInterval(() => {
      fetchVmDetails();
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return ( 
    <body className="h-full">
      { VMTable(apiResp) }
      { WaitingTable(apiResp) }
      <ToastContainer />
    </body>
  );
}

