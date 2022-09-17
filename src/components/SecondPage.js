import React from 'react'
import { Link } from 'react-router-dom'

export default function SecondPage(props) {


  const sendEPC = (id) => {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
        // do your stuff here
      }
    });

    if (props.section === 1) {
      xhr.open("POST", `${props.section1.toString().split('"')[1]}/searchEPC`);
    } else if (props.section === 2) {
      xhr.open("POST", `${props.section2.toString().split('"')[1]}/searchEPC`);
    } else {
      xhr.open("POST", `${props.section3.toString().split('"')[1]}/searchEPC`);
    }
    xhr.setRequestHeader("Content-Type", "text/plain");

    xhr.send(id.toString());
  }
  return (
    <div>
      {props.section1} section1
      {props.section2} section2
      {props.section3} section3
      <h1>RFID file tracker</h1>
      <div className='file-btn-container'>


{/* 1234 is id */}
        {
          props.section === 1 ? 
          <div className='file-btn-container'>
            <FileComponent sendEPC={sendEPC} filenumber={1}>1234</FileComponent>
            <FileComponent sendEPC={sendEPC} filenumber={2}>1234</FileComponent>
            <FileComponent sendEPC={sendEPC} filenumber={3}>1234</FileComponent>
            <FileComponent sendEPC={sendEPC} filenumber={4}>1234</FileComponent>
            <FileComponent sendEPC={sendEPC} filenumber={5}>1234</FileComponent>
          </div>

            : props.section === 2 ?

              <div className='file-btn-container'>
                <FileComponent sendEPC={sendEPC} filenumber={6}>1234</FileComponent>
                <FileComponent sendEPC={sendEPC} filenumber={7}>1234</FileComponent>
                <FileComponent sendEPC={sendEPC} filenumber={8}>1234</FileComponent>
                <FileComponent sendEPC={sendEPC} filenumber={9}>1234</FileComponent>
                <FileComponent sendEPC={sendEPC} filenumber={10}>1234</FileComponent>
              </div>
              
              :

              <div className='file-btn-container'>
                <FileComponent sendEPC={sendEPC} filenumber={11}>1234</FileComponent>
                <FileComponent sendEPC={sendEPC} filenumber={12}>1234</FileComponent>
                <FileComponent sendEPC={sendEPC} filenumber={13}>1234</FileComponent>
                <FileComponent sendEPC={sendEPC} filenumber={14}>1234</FileComponent>
                <FileComponent sendEPC={sendEPC} filenumber={15}>1234</FileComponent>
              </div>
        }



      </div>

      <Link style={{ textDecoration: 'none', color: 'white' }} to={'/'}>
        <div className='backbtn' >
          <a>Back</a>
        </div>
      </Link>
    </div>
  )
}


const FileComponent = (props) => {
  return (
    <div className='btn' onClick={() => { props.sendEPC(props.children) }}>
      <a>FILE {props.filenumber}</a>
    </div>
  )
}
