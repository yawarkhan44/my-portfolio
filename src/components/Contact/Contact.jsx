
import "./Contact.scss"
import Map from "../Map/Map"
import {motion} from "framer-motion"

const Contact = () => {

 
  return (
    
    <div className="contactSection">
      <div className="contactContainer">
        <motion.div className="leftSection"
        initial={{x: -300}}
        viewport={{once: true, amount : 0.01}}
           whileInView={{ x: 0}}
           transition={{
             duration: 1.5,
             type:'spring',
           bounce: 0.4}}
        >
          <div className="contactForm" >
            <h1>Contact</h1>
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
        </motion.div>
        <motion.div className="rightSection"
        initial={{scale: 0}}
        viewport={{once: true, amount : 0.01}}
           whileInView={{ scale: 1}}
           transition={{
             duration: 1.5,
             type:'spring',
           bounce: 0.4}}
        >
          <Map />
        </motion.div>
      </div>
    </div>
  )
}

export default Contact