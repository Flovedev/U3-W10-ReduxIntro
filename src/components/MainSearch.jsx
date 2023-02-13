import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { jobSearch } from "../redux/actions";
import jobReducer from "../redux/reducers/jobSearchReducer";
import Job from "./Job";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);
  let search = useSelector((state) => state.search.jobs);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
    // jobReducer(e.target.value);
  };

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
