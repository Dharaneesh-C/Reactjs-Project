import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Form, FormControl, Modal } from 'react-bootstrap';


function App() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);


    const apiKey='';

    const searchMovies = async()=>{
        try{
            const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`)
            setMovies(response.data.Search || []);
            
        }
        catch(error){
            setError(error);
            setShowModal(true)
        }
    }


    const getMovieDetails = async(id)=>{
        try{
            const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`)
            setSelectedMovie(response.data)
        }
        catch(error){
            setError(error);
            setShowModal(true)
        }
    }

    const handleClose = () => {
        setShowModal(false);
        setError(null);
    };


  return (
    <>
    {apiKey=='' && <h1>Please visit to this website and create your api key and paste in this app.js file
        
        <a href="https://www.omdbapi.com/apikey.aspx" target='_blank'>click</a>
        
        
        </h1>}
    {apiKey!='' &&
    
    <Container>
    <h1 className="my-4">Movie Search App by Guvi</h1>

    
    <Form inline className="mb-4">
          <FormControl
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for movies"
              className="mr-sm-2"
          />
           <Button variant="primary mt-3" onClick={searchMovies}>Search</Button>
         
      </Form>

<hr />
{selectedMovie && (
          <Row>
              <Col>
                  <Card className="mt-4">
                      <Card.Img variant="top" style={{width:"300px",height:"300px"}} src={selectedMovie.Poster} />
                      <Card.Body>
                          <Card.Title>{selectedMovie.Title}</Card.Title>
                          <Card.Text>
                              <strong>Year:</strong> {selectedMovie.Year}
                          </Card.Text>
                          <Card.Text>
                              <strong>Plot:</strong> {selectedMovie.Plot}
                          </Card.Text>
                          <Card.Text>
                              <strong>Director:</strong> {selectedMovie.Director}
                          </Card.Text>
                          <Card.Text>
                              <strong>Cast:</strong> {selectedMovie.Actors}
                          </Card.Text>
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
      )}

<hr />
      <Row>
          {movies.map(movie => (
              <Col key={movie.imdbID} sm={12} md={6} lg={4} className="mb-4">
                  <Card onClick={() => getMovieDetails(movie.imdbID)} style={{ cursor: 'pointer' }}>
                      <Card.Img variant="top" style={{width:"auto", height:"350px"}} src={movie.Poster} />
                      <Card.Body>
                          <Card.Title>{movie.Title}</Card.Title>
                          <Card.Text>{movie.Year}</Card.Text>
                          <Card.Text>{movie.imdbID}</Card.Text>
                      </Card.Body>
                  </Card>
              </Col>
          ))}
      </Row>

     
      <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
              <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>{error}</Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                  Close
              </Button>
          </Modal.Footer>
      </Modal>

  </Container>
    
    }
    </>
   
  )
}

export default App