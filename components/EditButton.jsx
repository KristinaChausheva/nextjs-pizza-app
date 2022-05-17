import styles from "../styles/Edit.module.css"

const EditButton = ({ setClose, id }) => {
  return (
    <div
      className={styles.mainAddButton}
      onClick={() => setClose(false)}
      id={id}
    >
      Edit Pizza
    </div>
  )
}

export default EditButton
