
type VMStorage = {
  Name: string;
  Mount: string;
  SpaceUsed: number;
}

export type VMDetails = {
  Name: string;
  CPU: number;
  Memory: number;
  Storage: VMStorage[];
}

export type VMInfo = {
  Name: string;
  Serial: string;
  Fingerprint: string;
}

export type ApiListResponse = {
  ActiveClients: VMDetails[];
  DisconnectedClients: VMInfo[];
  WaitingClients: VMInfo[];
}


function VMTable(data: ApiListResponse) {

  // Display vms in four columns
  return (

    <div className="container m-auto grid md:grid-cols-3">

      {data.ActiveClients.map((vm) => (

        <div className="tile border border-green-200">
          <h1 className="text-lg text-center">{vm.Name}</h1>
          <img src="server-icon.png" alt="server icon" className="w-20 h-20" />
          <div className="grid grid-cols-2">
            <div className="tile">
              <h3>CPU: <b>{vm.CPU.toFixed(1)}%</b></h3>
            </div>
            <div className="tile">
              <h3>Memory: <b>{vm.Memory.toFixed(1)}%</b></h3>
            </div>
          </div>

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
          <img src="server-icon.png" alt="server icon" className="w-20 h-20" />
        </div>

      ))}

    </div>
  );
}

export default VMTable;



