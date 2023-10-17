
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
            <td>{vm.CPU.toFixed(1)}%</td>
            <td>{vm.Memory.toFixed(1)}%</td>
            <td>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Mount</th>
                  <th>Space Used</th>
                </tr>
              </thead>
              <tbody>
            {vm.Storage.map((storage) => (
              <tr key={storage.Mount}>
                <td>{storage.Name}</td>
                <td>{storage.Mount}</td>
                <td>{storage.SpaceUsed.toFixed(2)}%</td>
              </tr>
            ))}
              </tbody>
            </table>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default VMTable;



  