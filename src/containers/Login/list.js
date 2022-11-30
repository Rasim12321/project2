import { useMemo } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { INFO_LIST_ITEMS } from "./constants";
import styles from "./login.module.css";

function List() {
  const listItems = useMemo(
    () =>
      INFO_LIST_ITEMS.map((listItem, index) => (
        <ListGroup.Item key={index}>
          <div className="d-flex">
            <div className={styles.orderList}>{index + 1}</div>
            <div>
              <h4> {listItem.title}</h4>
              <div>{listItem.subTitle}</div>
            </div>
          </div>
        </ListGroup.Item>
      )),
    []
  );

  return <ListGroup>{listItems}</ListGroup>;
}

export default List;
