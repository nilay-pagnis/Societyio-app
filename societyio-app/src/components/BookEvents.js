import "../CSS/BookEvents.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookEvents() {
  const [date, setDate] = useState();
  const [date1, setDate1] = useState();

  const navigate = useNavigate();
  const backtohomepage = () => {
    navigate("/");
  };

  const [event, setEvent] = useState({
    fname: "",
    lname: "",
    eventFrom: date,
    eventTo: date1,
    eventname: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setEvent({
      ...event,
      eventFrom: date,
      eventTo: date1,
      [name]: value,
    });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { fname, lname, eventFrom, eventTo, eventname } = event;

    const res = await fetch("/user/book-arena", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        lname,
        eventFrom,
        eventTo,
        eventname,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Please book another slot..");
    } else {
      window.alert("Event arena booked Successfully!!");
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
                Book <span style={{ color: "crimson" }}>Event Arena</span>
              </h2>
              <hr /> <br />
              <form method='POST' className='book-event-area' id='bookEvent'>
                <label className='icon-label' htmlFor='fname'>
                  <i class='fa-solid fa-user'></i>
                </label>
                <input
                  className='input-name'
                  name='fname'
                  id='name'
                  placeholder='First Name'
                  type='text'
                  value={event.fname}
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
                  value={event.lname}
                  onChange={handleInputs}
                  autoComplete='off'
                ></input>
                <br />
                <div className='bookingDates'>
                  <label htmlFor='start'>
                    <i class='fa-solid fa-calendar-days'></i> From
                  </label>
                  <input
                    type='date'
                    name='eventFrom'
                    // min='2023-06-01'
                    //max='2023-06-30'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />

                  <br />
                  <label htmlFor='start'>
                    <i class='fa-solid fa-calendar-days'></i> To
                  </label>
                  <input
                    type='date'
                    name='eventTo'
                    // min='2023-06-01'
                    // max='2023-06-30'
                    value={date1}
                    onChange={(e) => setDate1(e.target.value)}
                  />
                </div>
                <br />
                <label className='icon-label' htmlFor='eventname'>
                  <i class='fa-solid fa-calendar-day'></i>
                </label>
                <input
                  className='event-name'
                  name='eventname'
                  id='eventname'
                  placeholder='event Name'
                  type='text'
                  value={event.eventname}
                  onChange={handleInputs}
                  autoComplete='off'
                />
                <br />
                <br />
                <input
                  className='submit-btn'
                  type='submit'
                  name='bookEvent'
                  id='bookEvent'
                  value='Book Event'
                  onClick={postData}
                />
              </form>
            </div>
            <div className='img-event'>
              <img
                src='https://cdni.iconscout.com/illustration/premium/thumb/events-4352689-3611150.png'
                alt='bookevent'
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookEvents;
