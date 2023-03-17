import React, { useState, useEffect } from "react"
import styles from "./Home.module.css"
import affirmation from "./affirmations.json"
import facts from "./facts.json"

const Home = () => {
  const [affirmationVar, setAffirmationVar] = useState("")
  const [affirmationFact, setAffirmationFact] = useState("")

  //from the affirmation.json file load a random affirmation on page load
  useEffect(() => {
    const randomAffirmation =
      affirmation.affirmations[
        Math.floor(Math.random() * affirmation.affirmations.length)
      ]
    setAffirmationVar(randomAffirmation)
  }, [])

  //From the facts.json file load a random fact on page load
  useEffect(() => {
    const randomFact =
      facts.facts[Math.floor(Math.random() * facts.facts.length)]
    console.log(randomFact)
    setAffirmationFact(randomFact)
  }, [])

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar_container}>
          <p className={styles.n_header}>vow.</p>
          <p className={styles.n_text}>dose of daily affirmation</p>
        </div>
      </div>
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.affirmation}>{affirmationVar}</p>
              <p className={styles.fact_preheader}>DID YOU KNOW?</p>
              <p className={styles.affimation_fact}>{affirmationFact}</p>
            </div>
            <div className={styles.buttons_container}>
              <button className={styles.star_button}>100 Stars</button>
              <button className={styles.follow_button}>Follow Me</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <p className={styles.n_text}>
          Made by{" "}
          <a
            href="http://github.com/AswinAsok"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aswin Asok
          </a>{" "}
          with Code
        </p>
        <p className={styles.n_text}>Midnight Projects#3</p>
        <br />
      </div>
    </>
  )
}

export default Home
