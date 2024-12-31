import React from 'react';
import "../styles/MOdalForm.css";

const MOdalForm = () => {
    return (
        <div>
             <div className="reserve-form">
       <h2 className="reserve-title">Reserve Your Table</h2>
       <form className='modaltext'>
         <label>Name:</label>
         <input type="text" placeholder="Enter your name" />
         <label>Email:</label>
         <input type="email" placeholder="Enter your email" />
         <label>Date:</label>
         <input type="date" />
         <label>Time:</label>
         <input type="time" />
         <label>Guests:</label>
         <input type="number" min="1" placeholder="Number of guests" />
         <button type="submit" className="submit-btn">
           Submit
         </button>
       </form>
     </div>
        </div>
    );
}

export default MOdalForm;
