import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import TableInfo from "../components/table";

export default function Page2() {
  const info = useSelector((state) => state.info);
  const countries = useSelector((state) => state.countries);
  const navigate = useNavigate();

  console.log(info);
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
