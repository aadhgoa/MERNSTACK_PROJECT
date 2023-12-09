import React, { useRef } from 'react'
import '../Shared/Search.css'
import { Col, Form, FormGroup } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'remixicon/fonts/remixicon.css'




const Search = () => {
  const RoomNameRef = useRef('')
  const AddPeopleRef = useRef(0)
 
  const SearchHandler = ()=>{
    const RoomName = RoomNameRef.current.value
    const AddPeople = AddPeopleRef.current.value

    if(RoomName === '' || AddPeople === ''){
      return alert("All fields are Required")
    }
  }



  return (
    <Col lg='12'>
      <div className='Search_Bar'>
        <Form className='d-flex align-items-center gap-4'>
          <FormGroup   className='d-flex gap-3 form_group form_gorup-fast'>
            <span><i class="ri-hotel-bed-fill"></i></span>
            <div>
              <h5>Room Names</h5>
              <p>select your Room</p>
              <input type='text' placeholder='Delux, Standard?' ref={RoomNameRef}></input>
            </div>
          </FormGroup>
          <FormGroup   className='d-flex gap-3 form_group form_gorup-last'>
            <span>
            <i class="ri-user-add-fill"></i></span>
            <div>
              <h5>Add people</h5> <p>2 Adults Per Room (additional charges for more then 2 people)</p>
              <input type='number' placeholder='Enter number of People' ref={AddPeopleRef}></input>
            </div>
          </FormGroup>
          <span  className="search_icon" type="submit" onClick={SearchHandler}>
          <i class="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  )
}

export default Search