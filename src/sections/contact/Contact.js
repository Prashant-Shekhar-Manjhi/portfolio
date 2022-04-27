import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import contactImage from "../../image/contact.jpg";
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
import "./Contact.css"

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
      username:"",
      subject:"",
      email:"",
      message:""
  })
  const [isValid, setIsValid] = useState(false);
  const [sentInfo, setSentInfo] = useState(null);
  const formRef = useRef();
  const validateForm = ()=>{
      if(formData.username && formData.email && formData.message){
        setIsValid(true);
      }
  }
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    validateForm();
    if(isValid){
        setIsSending(true);
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID , formRef.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            setSentInfo("Message successfully sent");
            setSent(true);
            setIsSending(false);
            setFormData({
              username:"",
              subject:"",
              email:"",
              message:""
            })
            setIsValid(false);
        }, (error) => {
            console.log(error.text);
        });
      }
    }
  const closeInfoMessage = ()=>{
    setSent(false);
  }
  return (
    <div className="contact" id="contact">
      <div className="contact-main-container">
        <h2 className="contact-heading">Contact me</h2>
        <div className="contact-container">
          <div className="contact-container-left">
              <div className="contact-image-wrapper">
                <img src={contactImage} alt="" className="contact-image"/>
              </div>
          </div>
          <div className="contact-container-right">
              <h2 className="contact-container-left-heading">What's your story?</h2>
              <div className="form-wrappper">
                <form ref={formRef} className="contact-form" onSubmit={onSubmitHandler}>
                  <input type="text" placeholder='Name' name='username' value={formData.username} onChange={(e)=>{
                    setFormData({
                      username:e.target.value,
                      subject:formData.subject,
                      email:formData.email,
                      message:formData.message
                    })
                  }}/>
                  <input type="text" placeholder='Subject' name='subject' value={formData.subject} onChange={(e)=>{
                    setFormData({
                      username:formData.username,
                      subject:e.target.value,
                      email:formData.email,
                      message:formData.message
                    })
                  }}/>
                  <input type="email" placeholder='Email' name='email'value={formData.email} onChange={(e)=>{
                      setFormData({
                        username:formData.username,
                        subject:formData.subject,
                        email:e.target.value,
                        message:formData.message
                      })
                  }}/>
                  <textarea name="message"  rows="6" placeholder='Message' value={formData.message} onChange={(e)=>{
                      setFormData({
                        username:formData.username,
                        subject:formData.subject,
                        email:formData.email,
                        message:e.target.value
                      })
                  }}></textarea>
                  <div className="button-wrapper">
                    <button type="submit">
                        <div className="btn-text-wrapper">
                          <p>Send message</p>
                          {!isSending && <SendIcon className='send-icon'/>}
                          {isSending && <CircularProgress size="18px" style={{color:"#fff"}} className='send-icon'/>}
                        </div>
                    </button>
                    {sent && <div className='sent-info-wrapper'>
                      <div className="sent-info">
                        <p>{sentInfo}</p>
                        <CloseIcon className='sent-icon' onClick={closeInfoMessage}/>
                      </div>
                    </div>}
                  </div>
                </form>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
