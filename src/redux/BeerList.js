import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBeers } from './actions';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const BeerList = () => {
  const dispatch = useDispatch();
  const beers = useSelector(state => state.beers);
  const currentPage = useSelector(state => state.currentPage);

  useEffect(() => {
    dispatch(fetchBeers(currentPage));
  }, [currentPage, dispatch]);

  const handlePageChange = page => {
    dispatch(fetchBeers(page));
  };

  return (
    <><Container>
          <Table striped bordered hover>
              <thead>
                  <tr>
                      <th>S.No</th>
                      <th>Name</th>
                      <th>First Brewed</th>
                      <th>Tag Line</th>
                  </tr>
              </thead>
              <tbody>
                  {beers.map((beer) => {
                      return <tr>
                          <td>{beer.id}</td>
                          <td>{beer.name}</td>
                          <td>{beer.first_brewed}</td>
                          <td>{beer.tagline}</td>
                      </tr>;
                  })}
              </tbody>
          </Table>
          <div>   
              <Button as="input" type="submit" value="Previous Page" onClick={() => handlePageChange(currentPage - 1)} style={{ marginRight: '15px' }} />
              <Button as="input" type="reset" value="Next" onClick={() => handlePageChange(currentPage + 1)} />
            </div>
      </Container>
            
          </>
    
  );
};

export default BeerList;


