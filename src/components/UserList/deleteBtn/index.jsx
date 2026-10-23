import { FaTrash } from "react-icons/fa";
import styles from "../lists/list.module.css";

const DeleteBtn = (props) => {
  const { deleteUser } = props;

  return (
    <button
      className={styles.btn}
      onClick={(e) => {
        e.stopPropagation();
        deleteUser();
      }}
    >
      <FaTrash />
    </button>
  );
};

export default DeleteBtn;
