import React, { useState, useEffect } from 'react';
import CommonSection from '../Shared/CommonSection';
import RoomCard from '../Shared/RoomCard';
import Search from '../Shared/Search';
import Newsletter from '../Shared/Newsletter';
import { Container, Row, Col } from 'reactstrap';
import useFetch from '../hooks/usefetch';
import { BASE_URL } from '../utils/config';

const Room = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const { data: rooms, loading, error } = useFetch(`${BASE_URL}/rooms?page=${page}`);
  const { data: roomCount } = useFetch(`${BASE_URL}/rooms/search/getRoomCount`);

  useEffect(() => {
    if (roomCount) {
      const pages = Math.ceil(roomCount / 8); // Assuming 8 rooms per page
      setPageCount(pages);
    }
  }, [roomCount]);

  return (
    <>
      <CommonSection Title={"All Rooms"} />
      <section>
        <Container>
          <Row>
            <Search />
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading....</h4>}
          {error && <h4 className='text-center pt-5'>{error.message}</h4>}
          {!loading && !error && (
            <Row>
              {rooms?.map(room => (
                <Col lg='3' md='6' sm='6' key={room._id}>
                  <RoomCard room={room} />
                </Col>
              ))}
              <Col lg='12'>
                <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                  {[...Array(pageCount).keys()].map(number => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? 'active_page' : ''}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Room;
