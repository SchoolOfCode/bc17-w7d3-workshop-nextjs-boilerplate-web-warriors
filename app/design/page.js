'use client'

import {useState} from 'react' 
import Link from "next/link";
import styles from "./design.module.css";

export default function ContactForm() {

const [fullName, setFullName] = useState("")
const [postcode, setPostcode] = useState("")
const [address, setAddress] = useState("")
const [city, setCity] = useState("")
const [phone, setPhone] = useState("")
const [email, setEmail] = useState("")
const [error, setError] = useState(false)

const handleChange = (event) => {
  if (event.target.name === "user_name") {
    setFullName(event.target.value)
  }

  if (event.target.name === "user_postcode") {
    setPostcode(event.target.value)
  }

  if (event.target.name === "user_address") {
    setAddress(event.target.value)
  }

  if (event.target.name === "user_city") {
    setCity(event.target.value)
  }

  if (event.target.name === "user_phone_number") {
    setPhone(event.target.value)
  }


  if (event.target.name === "user_email") {
    setEmail(event.target.value)
  }

  console.log(event.target.value)

  return (event.target.value)

}


  const submitForm = (event) => {
    event.preventDefault();

    if (fullName === "" ||
      postcode === "" ||
      address === "" ||
      city === "" ||
      phone === "" ||
      email === ""
    ) {
      setError(true)
    } else {

    setError(false)
    console.log({ fullName, postcode, address, city, phone, email}); 

    }


  }




  
  return (
    <>
      <h1 className={styles.formTiltle}>Design Booking</h1>
      <form onSubmit={submitForm}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.formLegend}>Personal Information:</legend>
          <ul className={styles.ul}>
            <li className={styles.formList}>
              <label className={styles.formLabel} htmlFor="name">
                Full Name{" "}
              </label>
              <input
                className={styles.inputBox}
                type="text"
                id="name"
                name="user_name"
                onChange={(event) => handleChange(event)}
                value={fullName}
              />
            </li>
            <li className={styles.formList}>
              <label className={styles.formLabel} htmlFor="postcode">
                Postcode{" "}
              </label>
              <input
                className={styles.inputBox}
                type="text"
                id="postcode"
                name="user_postcode"
                onChange={(event) => handleChange(event)}
                value={postcode}
              />
            </li>
            <li className={styles.formList}>
              <label className={styles.formLabel} htmlFor="address">
                House/ Flat Number And Street Name
              </label>
              <input
                className={styles.inputBox}
                type="text"
                id="address"
                name="user_address"
                onChange={(event) => handleChange(event)}
                value={address}
              />
            </li>
            <li className={styles.formList}>
              <label className={styles.formLabel} htmlFor="city">
                City{" "}
              </label>
              <input
                className={styles.inputBox}
                type="text"
                id="city"
                name="user_city"
                onChange={(event) => handleChange(event)}
                value={city}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.formLegend}>Contact Information:</legend>
          <ul className={styles.ul}>
            <li className={styles.formList}>
              <label className={styles.formLabel} htmlFor="phone_number">
                Phone Number{" "}
              </label>
              <input
                className={styles.inputBox}
                type="tel"
                id="phone_number"
                name="user_phone_number"
                onChange={(event) => handleChange(event)}
                value={phone}
              />
            </li>
            <li className={styles.formList}>
              <label className={styles.formLabel} htmlFor="mail">
                Email{" "}
              </label>
              <input
                className={styles.inputBox}
                type="email"
                id="mail"
                name="user_email"
                onChange={(event) => handleChange(event)}
                value={email}
              />
            </li>
          </ul>
        </fieldset>
        {error && <p className={styles.errorMessage}>Error - all fields are required - some missing</p> }
        <button type="submit" className={styles.consultationButton}>
          Request Design consultation
        </button>
      </form>
    </>
  );
}
