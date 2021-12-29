import React, {useState} from 'react';
import './Postview.css';
import {Navbar, Container, Card, Row, Col} from 'react-bootstrap'


const Postview=()=> {
const [posts, setPost]=useState([]);
React.useEffect(()=>{
fetch("http://localhost:3004/user")
.then((res)=>res.json())
.then((responseData)=>setPost(responseData));
}, [])


  return (
    <div className="site-container">
      <div class='page-header'>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Instaclone</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
              <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
              <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
            </svg>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
      <div className='post-container'>
        {
          posts.map((post, index)=>{
            return(
            <Container key={index} style={{marginTop:'20px'}}>
              <Row>
                <Col md={{span:6, offset:3}}>
                  <Card className="text-center">
                    <Card.Header style={{textAlign:'left'}}>
                          {post.name}
                          <span className='three-dots'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg> </span>
                        <br/>
                          <span className='location'>{post.location}</span>
                        </Card.Header>
                    <Card.Body>
                      <Card.Title>
                        <img src={post.PostImage} className='img'></img>
                      </Card.Title>                     
                      <button className='like-button'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" marginRight="50px" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg> </button>
<button className='like-button'>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
</svg></button>
<span className='date-created'>{new Date(post.date).toLocaleDateString()}</span>

                    
                    </Card.Body>
                    <Card.Footer className="text-muted">
                    <span style={{textAlign:'left'}}>{post.likes} Likes</span>
                    <br/>
                      <span style={{fontWeight:'bold', color:'black'}}>{post.description}</span>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </Container>)
          })
        }

      </div>
    </div>
  );
}

export default Postview;
