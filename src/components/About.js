import React from 'react'

export default function About(props) {
   


    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#495057' : 'white'
    }
    

  return (
    <div className={`container ${props.mode === 'dark' ? 'dark-mode' : ''}`} style={myStyle}>
        <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                About TextUtils
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>TextUtils</strong> is a simple yet powerful React-based web application designed to make text manipulation quick and efficient. It provides essential utilities like converting text to uppercase, lowercase, removing extra spaces, and copying text instantly. The goal of this project is to offer a clean, fast, and user-friendly interface for everyday text processing needs.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                Features
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>TextUtils</strong> offers a variety of useful features including text transformation (uppercase/lowercase), space cleanup, and one-click copy functionality. It also supports a responsive design and dark mode for better user experience. The application is lightweight, fast, and works seamlessly across devices.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                Purpose
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                 This project was built to improve productivity and demonstrate practical React concepts such as component-based architecture, state management, and conditional styling. It is ideal for students, developers, and anyone who frequently works with text and needs quick formatting tools.
            </div>
            </div>
        </div>
        </div>
       
    </div>
  )
}
