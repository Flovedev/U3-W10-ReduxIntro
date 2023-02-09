import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Job = ({ data, i }) => {
  let favourites = useSelector((state) => state.favourites.content);

  const [favourite, setFavourite] = useState(false);

  // console.log(data, favourites);

  const dispatch = useDispatch();

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

      {favourite ? (
        <Button
          variant="danger"
          onClick={() => {
            dispatch({
              type: "REMOVE_FROM_FAVOURITES",
              payload: i,
            });
            setFavourite(false);
          }}
        >
          Remove from Favourites
        </Button>
      ) : (
        <Button
          variant="success"
          onClick={() => {
            dispatch({
              type: "ADD_TO_FAVOURITES",
              payload: data,
            });
            setFavourite(true);
          }}
        >
          Add to Favourites
        </Button>
      )}

      <Col xs={3}></Col>
    </Row>
  );
};

export default Job;
