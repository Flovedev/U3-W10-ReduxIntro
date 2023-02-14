import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLoading, jobSearch } from "../redux/actions";
import Job from "./Job";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  let search = useSelector((state) => state.search.jobs);
  const applicationLoading = useSelector((state) => state.search.isLoading);
  const applicationError = useSelector((state) => state.search.isError);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    dispatch(getLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3 d-flex justify-content-between">
          <h1>Remote Jobs Search</h1>
          <Link to={"/favourites"}>
            <Button variant="info">Favourites</Button>
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(getLoading(true));
              dispatch(jobSearch(search));
            }}
          >
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        {applicationError && (
          <Alert variant="danger" className="mr-2">
            Something very bad happened with the search... 😨
          </Alert>
        )}
        {applicationLoading && (
          <Spinner className="mr-2" animation="border" variant="success" />
        )}

        {search[0] ? (
          <Col xs={10} className="mx-auto mb-5">
            {search[0].map((jobData, i) => (
              <Job key={jobData._id} data={jobData} i={i} />
            ))}
          </Col>
        ) : (
          ""
        )}
      </Row>
    </Container>
  );
};

export default MainSearch;
