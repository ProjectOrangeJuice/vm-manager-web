import { toast } from 'react-toastify';
type VMStorage = {
  Name: string;
  Mount: string;
  SpaceUsed: number;
}

export type VMDetails = {
  Name: string;
  Serial: string;
  CPU: number;
  Memory: number;
  Version: string;
  Hostname: string;
  Networks: Network[];
  Storage: VMStorage[];
}

export type VMInfo = {
  Name: string;
  Serial: string;
  Fingerprint: string;
}

type Network = {
  IP: string;
  MAC: string;
  Name: string;
}


export type ApiListResponse = {
  ActiveClients: VMDetails[];
  DisconnectedClients: VMInfo[];
  WaitingClients: VMInfo[];
}


export function WaitingTable(data: ApiListResponse) {
  const decline = (id: string) => {
    // Send post request to decline
    return () => {
      fetch(`${process.env.API_URL}/api/waiting/{id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ allow: false }),
      });
    }
  }
  const accept = (id: string) => {
    // Send post request to decline
    return () => {
      fetch(`${process.env.API_URL}/api/waiting/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ allow: true }),
      });
    }
  }

  if (data.WaitingClients.length == 0) {
    return (
      <div className="text-center">
      </div>
    )
  }

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Name</th>
          <th>Serial</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.WaitingClients.map((vm) => (
          <tr>
            <td>{vm.Name}</td>
            <td>{vm.Serial}</td>
            <td><button onClick={accept(vm.Serial)} className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Accept</button>
              <button onClick={decline(vm.Serial)} className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Decline</button></td>
          </tr>
        ))}
      </tbody>
    </table>

  )

}

export function VMTable(data: ApiListResponse) {
  const updateClient = (id: string) => {
    console.log("Updating client id " + id)
    // Send post request to decline
    return () => {
      fetch(`${process.env.API_URL}/api/update/${id}`, {
        method: "POST",
      }).then((response) => {
        if (response.status == 200) {
          toast.success("Update started");
        } else {
          toast.error("Update failed");
        }
      });
    }
  }


  // Display vms in four columns
  return (

    <div className="container m-auto grid md:grid-cols-3">

      {data.ActiveClients.map((vm) => (

        <div className="tile border border-green-200">
          <h1 className="text-lg text-center">{vm.Name}({vm.Hostname})</h1>
          <div className="flex justify-center">
            <img src="server-icon.png" alt="server icon" className="w-20 h-20" />
          </div>

          <div className="tile">
            <h3>Version: <b>{vm.Version}</b> <button className="border" onClick={updateClient(vm.Serial)}>Update</button></h3>
          </div>

          <div className="grid grid-cols-2">
            <div className="tile">
              <h3>CPU: <b>{vm.CPU.toFixed(1)}%</b></h3>
            </div>
            <div className="tile">
              <h3>Memory: <b>{vm.Memory.toFixed(1)}%</b></h3>
            </div>
          </div>

          <hr />
          {vm.Networks.map((network) => (
            <div className="grid grid-cols-2">
              <div className="tile">
                <h3>{network.Name}</h3>
              </div>
              <div className="tile">
                <h3>{network.IP} ({network.MAC})</h3>
              </div>
            </div>
          ))}

          <hr />
          {vm.Storage.map((storage) => (
            <div className="grid grid-cols-2">
              <div className="tile">
                <h3>{storage.Mount} ({storage.Name})</h3>
              </div>
              <div className="tile">
                <h3>Space Used: <b>{storage.SpaceUsed.toFixed(1)}%</b></h3>
              </div>
            </div>
          ))}


        </div>

      ))}


      {/* below are the disconnected machines */}
      {data.DisconnectedClients.map((vm) => (

        <div className="tile border border-green-200">
          <h1 className="text-lg text-center">{vm.Name} <span className="text-red-600">-disconnected-</span></h1>
          <div className="flex justify-center">
            <img src="server-icon.png" alt="server icon" className="w-20 h-20" />
          </div>
        </div>

      ))}

    </div>
  );
}

