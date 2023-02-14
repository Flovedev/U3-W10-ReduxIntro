import { useEffect } from "react";
import { Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { companyJobSearch } from "../redux/actions";

const CompanySearchResults = () => {
  let search = useSelector((state) => state.search.company);
  const applicationLoading = useSelector((state) => state.search.isLoading);
  const applicationError = useSelector((state) => state.search.isError);

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(companyJobSearch(params.companyName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        {applicationError && (
          <Alert variant="danger" className="mr-2">
            Something very bad happened with the search... 😨
          </Alert>
        )}
        {applicationLoading && (
          <Spinner className="mr-2" animation="border" variant="success" />
        )}

        {search[0] ? (
          <Col>
            {search[0].map((jobData, i) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        ) : (
          ""
        )}
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
