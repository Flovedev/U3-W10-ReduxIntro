import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { companyJobSearch } from "../redux/actions";

const CompanySearchResults = () => {
  let search = useSelector((state) => state.search.company);

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(companyJobSearch(params.companyName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
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
