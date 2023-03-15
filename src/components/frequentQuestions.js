import React, { useState } from "react";
import styles from "../styles/frequentQuestions.module.scss";
import Image from "next/image";

export default function FrequentQuestions() {
  const questionsArray = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. \n \n You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 2 490 Ft to 4 490 Ft a month. No extra costs, no contracts.",
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. \n \n You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      question: "What can I watch on Netflix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      question: "Is netflix for kids?",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. \n \n Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  function renderQuestions() {
    return questionsArray.map((question, index) => {
      return (
        <div className={styles.questionContainer} key={index}>
          <div
            style={{
              display: "flex",

              alignItems: "center",
            }}
          >
            <button
              type="button"
              className={styles.collapsible}
              name={`question${index}`}
              onClick={(e) => handleCHangeQuestions(e)}
              value={questions[`question${index}`]}
            >
              {question.question}
            </button>
            <Image
              src="/plus.svg"
              width={24}
              height={24}
              style={{ filter: "invert(100%)" }}
            ></Image>
          </div>

          <div
            className={styles.content}
            style={{
              display: questions[`question${index}`] ? "flex" : "none",
              width: "80vw",
            }}
          >
            <p className={styles.pee}>{question.answer}</p>
          </div>
          
        </div>
        
      );
    });
  }

  const arr = questionsArray.map((index) => ({
    [`question${index}`]: false,
  }));

  const [questions, setQuestions] = useState(arr);

  const handleCHangeQuestions = (e) => {
    setQuestions({ ...questions, [e.target.name]: !questions[e.target.name] });
  };

  return (
    <div className={styles.something}>
      {renderQuestions()}
      <br />
      
    </div>
  );
}
