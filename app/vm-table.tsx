'use client'

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
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.Name}</td>
            <td>{item.CPU}</td>
            <td>{item.Memory}</td>
            <td>
              <ul>
                {item.Storage.map((storage, index) => (
                  <li key={index}>
                    {storage.Name} ({storage.Mount}): {storage.SpaceUsed} GB
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default VMTable;



  