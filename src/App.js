import './App.css';
import {Form, Button, Navbar,Nav,Container, Card, } from 'react-bootstrap'; 

function App() {
  return (
    <div className="App">
  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">JSX INTOR</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">courses</Nav.Link>
      <Nav.Link href="#pricing">links</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

<h1 className="titlered"> Welcome to JSX </h1>

<div className="container row">


<div className="col"><img src="/JSX.png"/></div>
<div className="col"><img src="/JSX1.png"/></div>


<div className="row">
<h1 className="titlered"> Define what’s JSX? </h1>
<p>
JSX is a syntax extension to JavaScript usually used with React to describe what the UI should look like.

JSX may remind you of a template language, but it comes with the full power of JavaScript.
In ReactJS we are using JSX to create HTML elements as a JavaScript code, that will be placed inside the DOM without using createElement() or appendChild() methods.
Using JSX in ReactJS is recommended because it brings some benefits to your applications. Here’s why you should use JSX: - it simplifies creating component’s templates - it’s faster than Javascript because it performs optimization when transiting to JS - it helps to keep logic and template together as components without the mess.
Finally, just to clarify what’s exactly JSX stands for. JSX stands for a JavaScript eXtension or JavaScript XML.
</p>
</div>
<div className="col"><img src="/JSX2.png"/></div>
<div className="row">
<h1 className="titlered"> How does it work? </h1>
<p>
At first glance, JSX and HTML look very similar, but in reality they are very different. Working with JSX makes the manipulation of the HTML elements much easier and more effective.

Since every website is built with HTML and browsers naturally understand HTML and not JSX, you might be wondering: what is the link between JSX and HTML?

Tip: if you inspect the source code of React’s webpage in your browser, you will only find HTML and not JSX.</p>


<iframe width="640" height="360" src="https://www.youtube.com/embed/hkt0oJsO5Po" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
<div className="row">



<h1 className="titlered"> JSX and HTML Recap</h1>

<h2> Let’s recap! </h2>
<p>
The biggest difference between JSX and HTML is that nested JSX must return just one element. It means that if you’d like to create siblings elements, they always need to have parents; in HTML, it’s not necessary.
If JSX code wouldn’t have a div parent, it couldn’t compile, and it would show the error.
Another difference is that with HTML, we can use a class keyword to define CSS classes, but with JSX, this keyword is already taken; that’s why creators had to find out something else. In JSX, we have to use className to define class names to be used with styles. It’s similar to properties like onclick in HTML and onClick in JSX.
The next difference is that in JSX, any element can be written as a self-closing tag if there aren’t any children elements inside. In HTML, just a few elements have self-closing tags; the others have separate opening and closing tags.
</p>
</div>
</div>
<Card>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">about us</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#disabled" disabled>
          contact
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>for more please contact us</Card.Title>
    <Card.Text>
    If you liked it share and comment!
    </Card.Text>
    <Button variant="primary">Go to next page</Button>
  </Card.Body>
</Card>




    </div>
    ); 
}

export default App;
