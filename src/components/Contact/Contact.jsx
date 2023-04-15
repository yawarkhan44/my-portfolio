import "./Contact.scss"


const Contact = () => {

 
  return (
    
    <div className="contactSection">
      <div className="contactContainer">
        <div className="leftSection">
          <div className="contactForm" >
            <h1>Contact Us</h1>
            <input placeholder="Name" name="name" />
            <input placeholder="Email" name="email" />
            <textarea
              className="textMessage"
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <button type="submit">Send</button>
            
          </div>
        </div>
        <div className="rightSection">

        </div>
      </div>
    </div>
  )
}

export default Contact