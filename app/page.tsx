'use client'
import VMTable from "./vm-table";
import { VMDetails } from "./vm-table";
import { useState, useEffect } from "react";

export default function Home() {
  const [vmDetails, setVmDetails] = useState<VMDetails[]>([]);
  useEffect(() => {
    const fetchVmDetails = async () => {
      // Fetch data from API on different port
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
    <div>
      <h1>Hello, here are your VMs</h1>
      { VMTable(vmDetails)}
    </div>
  );
}



let sampleVMs: VMDetails[] = [
  {
    "Name":"Test client",
    "CPU":17.77,
    "Memory":31.40,
    "Storage":[
      {"Name":"tmpfs","Mount":"/run","SpaceUsed":0.15},
      {"Name":"/dev/mapper/vgubuntu-root","Mount":"/","SpaceUsed":19.75},
      {"Name":"tmpfs","Mount":"/dev/shm","SpaceUsed":2.22},
      {"Name":"tmpfs","Mount":"/run/lock","SpaceUsed":0.20},
      {"Name":"/dev/sda2","Mount":"/boot","SpaceUsed":17.45},
      {"Name":"/dev/sda1","Mount":"/boot/efi","SpaceUsed":1.19},
      {"Name":"tmpfs","Mount":"/run/user/1000","SpaceUsed":0.01}
    ]
  },
  {
    "Name":"Production server",
    "CPU":23.45,
    "Memory":64.20,
    "Storage":[
      {"Name":"tmpfs","Mount":"/run","SpaceUsed":0.10},
      {"Name":"/dev/mapper/vgubuntu-root","Mount":"/","SpaceUsed":25.50},
      {"Name":"tmpfs","Mount":"/dev/shm","SpaceUsed":3.00},
      {"Name":"tmpfs","Mount":"/run/lock","SpaceUsed":0.25},
      {"Name":"/dev/sda2","Mount":"/boot","SpaceUsed":20.00},
      {"Name":"/dev/sda1","Mount":"/boot/efi","SpaceUsed":1.50},
      {"Name":"tmpfs","Mount":"/run/user/1000","SpaceUsed":0.02}
    ]
  },
  {
    "Name":"Development machine",
    "CPU":12.34,
    "Memory":16.78,
    "Storage":[
      {"Name":"tmpfs","Mount":"/run","SpaceUsed":0.05},
      {"Name":"/dev/mapper/vgubuntu-root","Mount":"/","SpaceUsed":10.00},
      {"Name":"tmpfs","Mount":"/dev/shm","SpaceUsed":1.50},
      {"Name":"tmpfs","Mount":"/run/lock","SpaceUsed":0.10},
      {"Name":"/dev/sda2","Mount":"/boot","SpaceUsed":8.00},
      {"Name":"/dev/sda1","Mount":"/boot/efi","SpaceUsed":0.50},
      {"Name":"tmpfs","Mount":"/run/user/1000","SpaceUsed":0.01}
    ]
  }
];
