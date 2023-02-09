import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Favourites = () => {
  let favourites = useSelector((state) => state.favourites.content);
  console.log(favourites._id);

  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <Col xs={10} className="mx-auto my-3 d-flex justify-content-between">
          <h1>Favourites jobs:</h1>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {favourites.map((data, i) => {
            return (
              <Row
                className="mx-0 mt-3 p-3"
                style={{ border: "1px solid #00000033", borderRadius: 4 }}
                key={data._id}
              >
                <Col xs={3}>
                  <Link to={`/${data.company_name}`}>{data.company_name}</Link>
                </Col>
                <Col xs={6}>
                  <a href={data.url} target="_blank" rel="noreferrer">
                    {data.title}
                  </a>
                </Col>
                <Col xs={3}>
                  <Button
                    variant="danger"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_FAVOURITES",
                        payload: i,
                      });
                    }}
                  >
                    Delete from favourites
                  </Button>
                </Col>
              </Row>
            );
          })}
        </Col>
      </Container>
    </>
  );
};

export default Favourites;
