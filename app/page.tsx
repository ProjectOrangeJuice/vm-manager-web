'use client'
import VMTable from "./vm-table";
import { ApiListResponse } from "./vm-table";
import { useState, useEffect } from "react";

export default function Home() {
  const [vmLists, setVmDetails] = useState<ApiListResponse>({
    ActiveClients: [],
    DisconnectedClients: [],
    WaitingClients: [],
  });
  useEffect(() => {
    const fetchVmDetails = async () => {
      const response = await fetch("http://localhost:8081/api/list");
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
      { VMTable(vmLists) }
    </body>
  );
}

