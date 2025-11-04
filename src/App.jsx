import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const frontendQnA = [
    {
      question: "What is the difference between HTML and JSX?",
      answer:
        "HTML is a markup language used to structure web pages, while JSX is a syntax extension for JavaScript used in React to write HTML-like code inside JS files.",
    },
    {
      question: "What does the 'useState' hook do in React?",
      answer:
        "useState lets you add state to functional components. It returns a state variable and a function to update it.",
    },
    {
      question: "What is the purpose of CSS Flexbox?",
      answer:
        "Flexbox provides a layout model that makes it easier to design flexible and responsive layout structures without using floats or positioning.",
    },
    {
      question: "What does 'DOM' stand for and why is it important?",
      answer:
        "DOM stands for Document Object Model. It represents the page as a tree structure, allowing JavaScript to access and manipulate HTML elements dynamically.",
    },
    {
      question: "What is the difference between '==' and '===' in JavaScript?",
      answer:
        "'==' compares values after type conversion, while '===' compares both value and type without converting.",
    },
    {
      question: "What is the Virtual DOM in React?",
      answer:
        "The Virtual DOM is a lightweight copy of the actual DOM that React uses to efficiently update and render components by comparing differences before applying changes to the real DOM.",
    },
    {
      question: "What are props in React?",
      answer:
        "Props are short for properties. They are read-only values passed from a parent component to a child component to configure or customize its behavior.",
    },
    {
      question:
        "What is the difference between inline, inline-block, and block elements in CSS?",
      answer:
        "Inline elements do not start on a new line and only take up as much width as needed, block elements start on a new line and take up full width, and inline-block elements combine properties of both.",
    },
    {
      question: "What are semantic HTML elements?",
      answer:
        "Semantic elements clearly describe their meaning to both the browser and developer, such as <header>, <article>, <footer>, and <section>.",
    },
    {
      question: "What is event bubbling in JavaScript?",
      answer:
        "Event bubbling is when an event starts from the deepest target element and then propagates upward through the DOM tree to ancestor elements.",
    },
    {
      question: "What is the difference between 'let', 'const', and 'var'?",
      answer:
        "'var' has function scope and can be redeclared, 'let' and 'const' have block scope, but 'const' cannot be reassigned.",
    },
    {
      question: "What are React components?",
      answer:
        "Components are reusable, self-contained pieces of UI in React that can be either functional or class-based.",
    },
    {
      question: "What does 'useEffect' do in React?",
      answer:
        "useEffect allows you to perform side effects in functional components, like fetching data, updating the DOM, or setting up subscriptions.",
    },
    {
      question: "What is responsive design?",
      answer:
        "Responsive design ensures that a website adjusts smoothly to different screen sizes and devices by using flexible layouts, images, and CSS media queries.",
    },
    {
      question: "What is the difference between padding and margin in CSS?",
      answer:
        "Padding is the space between an element’s content and its border, while margin is the space outside the border, separating the element from others.",
    },
  ];

  // console.log(frontendQnA);

  const [isAnswerShowed, setIsAnswerShowed] = useState(false);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(frontendQnA[index].question);

  const totalCards = frontendQnA.length;
  const progress = ((index + 1) / totalCards) * 100;

  useEffect(() => {
    setIsAnswerShowed(false);
    setText(frontendQnA[index].question);
  }, [index]);

  function toggleAnswer() {
    if (!isAnswerShowed) setText(frontendQnA[index].answer);
    if (isAnswerShowed) setText(frontendQnA[index].question);
    setIsAnswerShowed((prev) => !prev);
  }

  function displayNextQuestion() {
    if (index < 14) setIndex((prev) => prev + 1);
  }
  function displayPreviousQuestion() {
    if (index > 0) setIndex((prev) => prev - 1);
  }
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "DM Serif Text",
          fontSize: "70px",
        }}
      >
        Flash Cards
      </h1>
      <div
        style={{
          textAlign: "center",
          fontFamily: "Sour Gummy",
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div
          style={{
            fontSize: "25px",
          }}
        >
          {index + 1}/{totalCards}
        </div>
        <div
          style={{
            border: "solid 2px black",
            width: "700px",

            margin: "0 auto",
            padding: "5px 10px",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-text"> &nbsp;{Math.round(progress)}% </div>
        </div>
        <div
          style={{
            border: "solid 2px black",
            width: "700px",
            margin: "0 auto",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          <div
            id="text "
            style={{
              fontSize: "30px",
              backgroundColor: "#F0EEE6",
              borderRadius: "20px",
              padding: "55px 50px",
              fontSize: "40px",
            }}
          >
            {text}
          </div>
          <div id="navigation">
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                justifyContent: "space-around",
                backgroundColor: "#F0EEE6",
                borderRadius: "20px",
                padding: "15px 10px",
              }}
            >
              <button onClick={displayPreviousQuestion} disabled={index === 0}>
                Previous
              </button>
              <button onClick={toggleAnswer} style={{}}>
                {isAnswerShowed ? "Hide" : "Show"} Answer
              </button>
              <button
                onClick={displayNextQuestion}
                disabled={index === totalCards - 1}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
