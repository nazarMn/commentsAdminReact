import React, { useState } from "react";
import "./Feedback.css"
import axios from "axios";

const Feedback = () => {

   const [feedback, setFeedback] = useState({ status: false})



    return (
        <div className="feedback">
            <h1>Feedback</h1>
            <div className="boxComentar">
                <input type="text" placeholder="Name" value={feedback.name} onChange={(e) => setFeedback({...feedback, name: e.target.value})}/>
                <textarea name="feedback" id="feedback" cols="30" rows="10" value={feedback.feedback} onChange={(e) => setFeedback({...feedback, feedback: e.target.value})}></textarea>
                <select  id="rating" value={feedback.rating} onChange={(e) => setFeedback({...feedback, rating: parseInt(e.target.value)})}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button onClick={() => axios.post("http://localhost:3000/feedback", feedback)}>Submit</button>
            </div>
        </div>
    );
};

export default Feedback;