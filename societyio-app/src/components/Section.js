import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";


function Section() {
  return (
    <section>
      <div className='section-container'>
        <h1 className='section-heading'>We Manage Society For You</h1>
        <div className='design1'></div>
        <br />
        <br />
        <div className='feature-info'>
          <br />
          <h1>Housing Society Management Software</h1>
          <ul>
            <li>No more unnecessary messages on community chats.</li>
            <li>Send society Complaint's on single click.</li>
            <li>Book event arena's with simple click.</li>
            <li>Easy to use.</li>
          </ul>
        </div>
        <div>
          <img
            alt='society-img'
            className='society-img'
            src='https://adda.io/assets/images/home-page-new/adda.io-masthead%20copy-2.png'
          ></img>
        </div>
        <br />
        <br />
        <div className='card-container'>
          <div className='card1'>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ height: "190px" }}
                variant='top'
                src='https://media.istockphoto.com/id/1249763893/vector/people-on-city-balcony-during-quarantine-vector-illustration-cartoon-flat-man-woman.jpg?s=612x612&w=0&k=20&c=Pvpxe2dLE-ymCoI9MkxlzhQF8DZhirwSfoxBC_xM3VI='
              />
              <Card.Body>
                <Card.Title>Create Society</Card.Title>
                <Card.Text>
                  Note: User can create single society and become member of
                  single society.
                </Card.Text>
                <Button variant='primary'>
                  <NavLink
                    style={{ textDecoration: "none", color: "black" }}
                    to='/create-society'
                  >
                    Create Society
                  </NavLink>
                </Button>
                <p style={{ marginBottom: "0px", color: "gray" }}>
                  coming soon...
                </p>
              </Card.Body>
            </Card>
          </div>
          <div className='card2'>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant='top'
                src='https://static.vecteezy.com/system/resources/previews/004/154/417/original/teamwork-or-team-building-office-business-meeting-conference-and-brainstorming-annual-report-and-statistics-graphics-discussion-and-planning-in-flat-style-free-vector.jpg'
              />
              <Card.Body>
                <Card.Title>Report issues</Card.Title>
                <Card.Text>
                  Note: User can create single issue / month.
                </Card.Text>
                <Button variant='primary'>
                  <NavLink
                    style={{ textDecoration: "none", color: "black" }}
                    to='/report-issues'
                  >
                    Report Issues
                  </NavLink>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className='card3'>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant='top'
                src='https://img.freepik.com/free-vector/hand-drawn-people-talking-table_23-2149075400.jpg?w=360'
              />
              <Card.Body>
                <Card.Title>Book event Arena</Card.Title>
                <Card.Text>
                  Note: User can book as per the availability.
                </Card.Text>
                <Button variant='primary'>
                  <NavLink
                    style={{ textDecoration: "none", color: "black" }}
                    to='book-arena'
                  >
                    Book Events
                  </NavLink>
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <br />
      <hr />
    </section>
  );
}

export default Section;
