import { Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FavouriteList = () => {
  const favList = useSelector((state) => state.favorites.content);

  return (
    <>
      {favList ? (
        <Container fluid>
          <h1>hello from fav</h1>
          <ul>
            {favList.map((ele, i) => {
              return (
                <Col key={i}>
                  <li>
                    <Link to={`/${ele.company_name}`}>{ele.company_name}</Link>
                    <p>{ele.title}</p>
                  </li>
                </Col>
              );
            })}
          </ul>
        </Container>
      ) : (
        <Container fluid>
          <h1>Add favorites job to see them here</h1>
        </Container>
      )}
    </>
  );
};

export default FavouriteList;
