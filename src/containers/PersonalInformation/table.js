import Table from "react-bootstrap/Table";

function TableInfo(props) {
  return (
    <div>
      <Table striped bordered hover className="w-50 mt-50 mx-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(props.info).map(([key, value], order) => (
            <tr key={order}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableInfo;
