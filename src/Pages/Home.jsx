import React, { useState, useEffect } from "react"
import styles from "./Home.module.css"
import affirmation from "./affirmations.json"
import facts from "./facts.json"
import axios from "axios"

const Home = () => {
  const [affirmationVar, setAffirmationVar] = useState("")
  const [affirmationFact, setAffirmationFact] = useState("")
  const [stars, setStars] = useState(0)

  //from the affirmation.json file load a random affirmation on page load
  useEffect(() => {
    const randomAffirmation =
      affirmation.affirmations[
        Math.floor(Math.random() * affirmation.affirmations.length)
      ]
    setAffirmationVar(randomAffirmation)
  }, [])

  useEffect(() => {
    axios
      .get("https://api.github.com/repos/AswinAsok/vow")
      .then((response) => {
        // handle success
        setStars(response.data.stargazers_count)
      })
      .catch((error) => {
        // handle error
        console.log(error)
      })
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
      <div className={styles.main_container}>
        <div className={styles.navbar}>
          <div className={styles.navbar_container}>
            <p className={styles.n_header}>vow.</p>
            <p className={styles.n_text}>dose of daily affirmation</p>
          </div>
        </div>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.affirmation}>{affirmationVar}</p>
              <p className={styles.fact_preheader}>DID YOU KNOW?</p>
              <p className={styles.affimation_fact}>{affirmationFact}</p>
            </div>
            <div className={styles.buttons_container}>
              <a
                href="https://github.com/AswinAsok/vow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.star_button}>{stars} Stars</button>
              </a>
              <a
                href="http://github.com/AswinAsok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.follow_button}>Follow Me</button>
              </a>
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
      </div>
    </>
  )
}

export default Home
