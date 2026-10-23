import DeleteBtn from "../deleteBtn";
import styles from "./list.module.css";

function UsersListItem(props) {
  const {
    selectUser,
    deleteUser,
    user: { id, isSelected, firstName, lastName, age, imgSrc, email, city },
  } = props;

  const selectStyle = {
    boxShadow: isSelected ? "2px 5px 20px yellow" : "0 0 5px grey",
  };

  return (
    <div className={styles.user} style={selectStyle} onClick={() => selectUser(id)}>
      <DeleteBtn className={styles.btn} deleteUser={() => deleteUser(id)} />
      <img className={styles.icon} src={imgSrc} alt="userIcon" />
      <h2>
        {firstName} {lastName}
      </h2>
      <p>{age} </p>
      <p>{email}</p>
      <p>{city}</p>
    </div>
  );
}
export default UsersListItem;
