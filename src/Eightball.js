import React, { useState } from "react";

import "./Eightball.css";
import defaultAnswers from "./answers.json";
import { choice } from "./random";

/* The EightBall should take a single property, answers, which should be an array of objects, with each object having a key for msg and color. */

function Eightball({ answers = defaultAnswers }) {
    const [answer, setAnswer] = useState({
        msg: "Think of a Question.",
        color: "black",
    });

    function handleClick(evt) {
        setAnswer(choice(answers));
    }

    return (
        <div className="EightBall"
            onClick={handleClick}
            style={{ backgroundColor: answer.color }}
        >
            <b>{answer.msg}</b>
        </div>
    );
}

export default Eightball;