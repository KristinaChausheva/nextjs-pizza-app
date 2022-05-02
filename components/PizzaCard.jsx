import Image from "next/image"
import styles from "../styles/PizzaCard.module.css"
import Link from "next/link"

const PizzaCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>Mozzarella</h1>
      <span className={styles.price}>$9.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolores
        aperiam aliquid velit autem consequuntur libero quibusdam, tenetur est
        eius.
      </p>
    </div>
  )
}

export default PizzaCard
