'use client'
import VMTable from "./vm-table";
import { VMDetails } from "./vm-table";
import { useState, useEffect } from "react";

export default function Home() {
  const [vmDetails, setVmDetails] = useState<VMDetails[]>([]);
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
      { VMTable(sampleVMs) }
    </body>
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
  },
  {
    "Name":"Web server",
    "CPU":8.90,
    "Memory":12.34,
    "Storage":[
      {"Name":"tmpfs","Mount":"/run","SpaceUsed":0.02},
      {"Name":"/dev/mapper/vgubuntu-root","Mount":"/","SpaceUsed":5.00},
      {"Name":"tmpfs","Mount":"/dev/shm","SpaceUsed":0.50},
      {"Name":"tmpfs","Mount":"/run/lock","SpaceUsed":0.05},
      {"Name":"/dev/sda2","Mount":"/boot","SpaceUsed":4.00},
      {"Name":"/dev/sda1","Mount":"/boot/efi","SpaceUsed":0.25},
      {"Name":"tmpfs","Mount":"/run/user/1000","SpaceUsed":0.01}
    ]
  },
  {
    "Name":"Database server",
    "CPU":15.67,
    "Memory":32.10,
    "Storage":[
      {"Name":"tmpfs","Mount":"/run","SpaceUsed":0.05},
      {"Name":"/dev/mapper/vgubuntu-root","Mount":"/","SpaceUsed":15.00},
      {"Name":"tmpfs","Mount":"/dev/shm","SpaceUsed":2.00},
      {"Name":"tmpfs","Mount":"/run/lock","SpaceUsed":0.15},
      {"Name":"/dev/sda2","Mount":"/boot","SpaceUsed":12.00},
      {"Name":"/dev/sda1","Mount":"/boot/efi","SpaceUsed":0.75},
      {"Name":"tmpfs","Mount":"/run/user/1000","SpaceUsed":0.01}
    ]
  },
  {
    "Name":"Backup server",
    "CPU":5.43,
    "Memory":8.90,
    "Storage":[
      {"Name":"tmpfs","Mount":"/run","SpaceUsed":0.01},
      {"Name":"/dev/mapper/vgubuntu-root","Mount":"/","SpaceUsed":2.50},
      {"Name":"tmpfs","Mount":"/dev/shm","SpaceUsed":0.25},
      {"Name":"tmpfs","Mount":"/run/lock","SpaceUsed":0.02},
      {"Name":"/dev/sda2","Mount":"/boot","SpaceUsed":2.00},
      {"Name":"/dev/sda1","Mount":"/boot/efi","SpaceUsed":0.10},
      {"Name":"tmpfs","Mount":"/run/user/1000","SpaceUsed":0.01}
    ]
  },
];
