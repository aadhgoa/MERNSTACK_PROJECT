import React, { useRef } from 'react';
import '../Shared/Search.css';
import { Col, Form, FormGroup } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'remixicon/fonts/remixicon.css';
import { BASE_URL } from '../utils/config';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const RoomNameRef = useRef('');
  const AddPeopleRef = useRef(0);
  const navigate = useNavigate();



  const SearchHandler = async () => {
    const RoomName = RoomNameRef.current.value;
    const AddPeople = AddPeopleRef.current.value;

    console.log('RoomName:', RoomName);
    console.log('AddPeople:', AddPeople);

    if (RoomName === "" || AddPeople === "") {
      return alert('All fields are Required');
    }
    const res = await fetch(`${BASE_URL}/rooms/search/getRoomBySearch?Rooms=${RoomName}&adults=${AddPeople}`);


    const result = await res.json();

    navigate(`/rooms/search?Rooms=${RoomName}&adults=${AddPeople}`, { state: result.data });
  };

  return (
    <Col lg='12'>
      <div className='Search_Bar'>
        <Form className='d-flex align-items-center gap-4'>
          <FormGroup className='d-flex gap-3 form_group form_gorup-fast'>
            <span><i className="ri-hotel-bed-fill"></i></span>
            <div>
              <h5>Room Names</h5>
              <p>select your Room</p>
              <input type='text' placeholder='Delux, Standard?' ref={RoomNameRef}/>
            </div>
          </FormGroup>
          <FormGroup className='d-flex gap-3 form_group form_gorup-last'>
            <span>
              <i className="ri-user-add-fill"></i>
            </span>
            <div>
              <h5>Add people</h5> <p>2 Adults Per Room (additional charges for more than 2 people)</p>
              <input type='number' placeholder='Enter number of People' ref={AddPeopleRef}/>
            </div>
          </FormGroup>
          <span className="search_icon" type="submit" onClick={SearchHandler}>
            <i className="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default Search;
