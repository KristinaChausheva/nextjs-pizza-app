import styles from "../styles/Edit.module.css"

const EditButton = ({ setClose }) => {
  return (
    <div className={styles.mainAddButton} onClick={() => setClose(false)}>
      Edit Pizza
    </div>
  )
}

export default EditButton
