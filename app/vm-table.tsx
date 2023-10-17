
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


function VMTable(data : VMDetails[]) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>CPU</th>
          <th>Memory</th>
          <th>Storage</th>
        </tr>
      </thead>
      <tbody>
        {data.map((vm) => (
          <tr key={vm.Name}>
            <td>{vm.Name}</td>
            <td>{vm.CPU}</td>
            <td>{vm.Memory}</td>
            <td>{vm.Storage.map((storage) => (
              <tr key={storage.Name}>
                <td>{storage.Name}</td>
                <td>{storage.Mount}</td>
                <td>{storage.SpaceUsed}</td>
              </tr>
            ))}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default VMTable;



  