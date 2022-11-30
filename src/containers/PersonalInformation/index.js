import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import TableInfo from "./table";

export default function PersonInformation() {
  const info = useSelector((state) => state.info);
  const navigate = useNavigate();

  return (
    <>
      <TableInfo info={info} />;
      <Button
        className="d-block mx-auto bg-danger"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>
    </>
  );
}
