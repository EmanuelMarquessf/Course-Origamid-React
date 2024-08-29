import React from 'react'
import styles from './styles/Contact.module.css'
import image from '/contato.jpg'
import Head from '../Components/Head'

function Contact() {
  return (
    <section className={styles.contact + " animeLeft"}>
      <Head title="Ranek - Contact" description="Entre em contato"/>
      <img className={styles.image} src={image} alt="image" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.data}>
          <li>emanuel.marquessf@gmail.com</li>
          <li>(99) 99999-9999</li>
          <li>Rua li, 999</li>
        </ul>
      </div>
    </section>
  )
}

export default Contact