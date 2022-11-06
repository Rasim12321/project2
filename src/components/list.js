import ListGroup from "react-bootstrap/ListGroup";

function List() {
  return (
    <ListGroup>
      <ListGroup.Item>
        <div className="d-flex">
          <div className="order-list">1</div>
          <div>
            <h4> Choose test type</h4>
            <div>Run Euc or nework tests</div>
          </div>
        </div>
      </ListGroup.Item>
      <ListGroup.Item>
        <div className="d-flex">
          <div className="order-list">2</div>
          <div>
            <h4> Choose intiator location</h4>
            <div>rest from on-prem location or from the cloud</div>
          </div>
        </div>
      </ListGroup.Item>
      <ListGroup.Item>
        <div className="d-flex">
          <div className="order-list">3</div>
          <div>
            <h4> Configure alert policy</h4>
            <div>choose how you want to be notified about issues</div>
          </div>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default List;
