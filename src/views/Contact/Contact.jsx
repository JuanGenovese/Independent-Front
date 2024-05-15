import React, {useState} from 'react'
import style from "./Contact.module.css";

const initForm = {
  name: "",
  email: "",
  project: ""
}

const Contact = ({ contextMenuRef, closeContact }) => {
  const [form, setForm] = useState(initForm)
  const [error, setError] = useState(null)

  const handleSubmit = () => {

    if (form.name === "") {
      setError("The name input is missing.")
      return
    }

    if (form.email === "") {
      setError("The name email is missing.")
      return
    }

    if (form.project === "") {
      setError("The name project is missing.")
      return
    }

    console.log(input.value)
  }


  return (
    <section className={style.contactContainer}>
      <div ref={contextMenuRef} className={style.formContainer}>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit} className={style.form}>
          {error && error}
          <input
            type="text"
            placeholder='Your name...'
            value={form.name}
            onChange={(e) => {
              if (e.target.value.length > 25) return;
              setForm({ ...form, name: e.target.value })
            }} />
          <input
            type="email"
            placeholder='Your email...'
            value={form.email}
            required
            onChange={(e) => {
              if (e.target.value.length > 50) return;
              setForm({ ...form, email: e.target.value })
            }} />
          <textarea
            type="text"
            placeholder='Project summary...'
            value={form.project}
            onChange={(e) => {
              if (e.target.value.length > 1000) return;
              setForm({ ...form, project: e.target.value })
            }} />
          <footer>
            <button onClick={closeContant}>Close</button>
            <button type='submit'>Send</button>
          </footer>
        </form>
      </div>
    </section>
  )
}

export default Contact