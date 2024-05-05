import React from 'react'
import styled from 'styled-components';

const Contact = () => {
  const Wrapper=styled.section`
  // background-color:#AECDCD;
  padding: 20px;
  margin-bottom:40px;

  padding-bottom:4rem;
  // background-color:red;

  h2 {
    text-align: center;
    color: #333;
  }

  iframe {
    display: block;
    margin: 20px auto;
    border: 0;
  }

  .container {
    background-color: #E0E2E6;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 50%;
    margin: 0 auto;
  }

  .contact-form {
    width: 100%;
  }

  .main-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input[type="text"],
  textarea {
    width: calc(100% - 20px);
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
  }

  input[type="submit"] {
    width: 50%;
    margin: 10px auto;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #333;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  input[type="submit"]:hover {
    background-color: #555;
  }
  `;
return (
<>
<Wrapper>
  {/* <h2>Contact Us</h2> */}

  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.0498048570803!2d83.97200027580611!3d28.20579937590043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995956db5f22503%3A0x55189e70e1db6ca3!2sXDezo%20Technologies!5e0!3m2!1sen!2snp!4v1714402808786!5m2!1sen!2snp" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

  <div className="container">
    <div className="contact-form">
      <form action="https://formspree.io/f/xgeqlgkk" method="POST" className="main-form">
        <input type="text"
        name="Username"
        placeholder="Username"
        autoComplete='off' />
        <br/>
        <input type="text"
        name="Email"
        placeholder="Enter your Email"
        autoComplete='off' />
        <textarea name="Message" cols="30" rows="10" autoComplete='off' placeholder='enter your message here'></textarea>
        <input type="submit" value="Send" />
      </form>
      {/* // form ko action chai email pathauna milni raixa formspree bhanni bata  */}
    </div>
  </div>
</Wrapper>
</>
)
}

export default Contact