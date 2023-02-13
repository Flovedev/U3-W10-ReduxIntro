import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavorites, removeFromFavourites } from "../redux/actions";

const Job = ({ data, i }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(true);

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      {selected ? (
        <Button
          variant="success"
          onClick={() => {
            dispatch(addToFavorites(data));
            setSelected(false);
          }}
        >
          Add to Favourites
        </Button>
      ) : (
        <Button
          variant="danger"
          onClick={() => {
            dispatch(removeFromFavourites(i));
            setSelected(true);
          }}
        >
          Delete from Favourites
        </Button>
      )}

      <Col xs={3}></Col>
    </Row>
  );
};

export default Job;
