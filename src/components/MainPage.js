import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

export default function MainPage(props) {


  const gotoFiles = (node_id,sectionNumber) => {

    const header = {
      "type": "get",
      "nodeid": "RFIDreader-Rpi1"
    }
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(JSON.parse(this.responseText));
        if(sectionNumber===1){
          props.setsection1(JSON.parse(this.responseText).publiclink)
          props.setsection(1)
        }else if(sectionNumber===2){
          props.setsection2(JSON.parse(this.responseText).publiclink)
          props.setsection(2)
        }else {
          props.setsection3(JSON.parse(this.responseText).publiclink)
          props.setsection(3)
        }
      }
    });

    xhr.open("POST", "https://k2ivkyoc35ova3nphda26jwncq0ythgy.lambda-url.ap-south-1.on.aws/");
    xhr.setRequestHeader("Content-Type", "text/plain");

    xhr.send(JSON.stringify(header));
    
  }
  return (
    <div>
      <h1>RFID file tracker</h1>
      <div>
        <Link style={{ textDecoration: 'none', color: 'white' }} to={'/rfid'}>
          <div className='btn' onClick={() => { gotoFiles("RFIDreader-Rpi1",1) }}>
            <a>SECTION 1</a>
          </div>
        </Link>
        <Link style={{ textDecoration: 'none', color: 'white' }} to={'/rfid'}>
          <div className='btn' onClick={() => { gotoFiles("RFIDreader-Rpi1",2) }}>
            <a>SECTION 2</a>
          </div>
        </Link>
        <Link style={{ textDecoration: 'none', color: 'white' }} to={'/rfid'}>
          <div className='btn' onClick={() => { gotoFiles("RFIDreader-Rpi1",3) }}>
            <a>SECTION 3</a>
          </div>
        </Link>
      </div>
    </div>
  )
}
