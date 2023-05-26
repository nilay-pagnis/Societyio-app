import "../CSS/reportIssue.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ReportIssues() {
  const navigate = useNavigate();
  const backtohomepage = () => {
    navigate("/");
  };

  const [usercomplaint, setUserComplaint] = useState({
    fname: "",
    lname: "",
    societyname: "",
    complaint: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.value;
    value = e.target.value;

    setUserComplaint({ ...usercomplaint, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { fname, lname, societyname, complaint } = usercomplaint;

    const res = await fetch("/user/report-complaint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        lname,
        societyname,
        complaint,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Error! Error! Error!");
    } else {
      window.alert("Complaint registered Successfully!!");

      backtohomepage();
    }
  };
  return (
    <>
      <div className='bookEvent-wrapper'>
        <div className='main-container'>
          <div className='wrapper'>
            <div className='main-area'>
              <h2 className='signup-heading'>
                Register{" "}
                <span style={{ color: "crimson" }}>issue's here..</span>
              </h2>
              <hr /> <br />
              <form method='POST' className='book-event-area' id='bookEvent'>
                <label className='icon-label' htmlFor='fname'>
                  <i className='fa-solid fa-user'></i>
                </label>
                <input
                  className='input-name'
                  name='fname'
                  id='name'
                  placeholder='First Name'
                  type='text'
                  value={usercomplaint.fname}
                  onChange={handleInputs}
                  autoComplete='off'
                ></input>
                <label className='icon-label' htmlFor='lname'></label>
                <input
                  className='input-name'
                  name='lname'
                  id='lname'
                  placeholder='Last Name'
                  type='text'
                  value={usercomplaint.lname}
                  onChange={handleInputs}
                  autoComplete='off'
                ></input>
                <br />
                <label className='icon-label' htmlFor='societyname'>
                  <i class='fa-solid fa-building'></i>
                </label>
                <input
                  className='society-name'
                  name='societyname'
                  id='societyname'
                  placeholder='Society Name'
                  type='text'
                  value={usercomplaint.societyname}
                  onChange={handleInputs}
                  autoComplete='off'
                ></input>
                <div className='bookingDates'></div>
                <br />
                <label className='icon-label' htmlFor='reportissue'>
                  <i className='fa-regular fa-building'></i>
                </label>
                <textarea
                  className='issue-field'
                  name='complaint'
                  id='reportissue'
                  placeholder='Mention Category then Description. Max 100 char allowed '
                  type='text'
                  value={usercomplaint.complaint}
                  onChange={handleInputs}
                  autoComplete='off'
                />
                <br />
                <br />
                <input
                  className='submit-btn'
                  type='submit'
                  name='reportIssue'
                  id='reportIssue'
                  value='Report issue'
                  onClick={postData}
                />
              </form>
            </div>
            <div className='img-event'>
              <img
                src='https://static.vecteezy.com/system/resources/previews/022/428/233/non_2x/complaint-fill-outline-icons-simple-stock-illustration-stock-vector.jpg'
                alt='reportissueimg'
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReportIssues;
