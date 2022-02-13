import React from "react";
import { Card, CardContent } from "@mui/material";

import "../App.css";

const Instruction = () => {
  return (
    <Card className="card" raised={true}>
      <CardContent>
        <h2>Coding Trainer (Version 1) </h2>
        {/* <h3>Scenario 1</h3> */}
        {/* <ul>
          <li>The 'Generate' button will randomly produce 2 coding questions for you to practise on</li>
          <li>Taking note of the Question Title and the Difficulty for both questions, repeat this by clicking on 'Generate' AT LEAST 3 times</li>
          <li>Take a screen-capture and upload it in the survey</li>
        </ul> */}
        <h6>
          The Coding Trainer intends to simulate a technical assessment
          environment that majority of tech companies incorporate in their
          interview process. 
          <br />
          Remember when you were younger and you had to
          complete as many Practice Papers as you can before your exam, and
          those Practice Papers are formatted to mimic that of an actual exam
          paper? It is the same with Coding Trainer - except it is for code :D
          <p />
          Here is a quick refresher of how a technical assessment (by top-tier
          companies) is like: 
          <br />
          1) Interviewee will be exposed to 2 coding
          questions 
          <br />
          2) The coding questions are of different difficulty levels
          < br />
          3) The duration is usually 45-60 minutes Similar to a technical
          assessment, the Coding Trainer provides you 2 coding questions for
          your practise. 
          <p />
          We currently have a test-bank of 18 questions; these
          are real questions asked by interviewers from Meta, Amazon and Google!
        </h6>
      </CardContent>
    </Card>
  );
};

export default Instruction;

// Description:
// This is a personal coding trainer to prepare for technical interviews. Questions here are submitted by interviewees of Meta, Amazon and Google. Similar to the real interview, you will be given 60 minutes to complete 2 coding questions of different difficulty level.

// # Constraints:
// # 1) There must be at least 2 difficulty level selected from Easy, Medium, Hard.
// # 2) You can choose up to 2 companies to train with. This means Q1 will be from company A, and Q2 from company B.
