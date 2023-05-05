import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Footer from './footer';

function Contact(){
    return(
        <>
        <div classname="contact">
        <p>
         <h1 align='center'><font face='Calibri' size='200'><b>Contact Us</b></font></h1>
        <div className='formss'>
        <font face='Calibri' size='5'><b>Leave Your Message</b></font><br></br>
        <font face='Calibri' ><b>We will response as soon as possible</b></font>
        <br></br>
        <br></br>
        <Form>
        <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="enter your email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="enter the subject" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comment</Form.Label>
        <Form.Control as="textarea" rows={6} />
        
        </Form.Group>
        <Button className='button1'>Submit</Button>{' '}
        </Form>
       
        
        </div>
        </p>
        </div>
        </>
    )
}
export default Contact;