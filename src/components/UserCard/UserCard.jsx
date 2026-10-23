import userIcon from "../UserCard/assets/usericon.jpg";
import styles from "../UserCard/styles/UserCard.module.css";
import verified from "../UserCard/assets/verified.png";

function UserCard({ user }) {
  if (!user) {
    return null;
  }
  const { firstName, lastName, nickname, isMale, isVerified, tweets, following, followers } = user;

  return (
    <article className={`${styles.container} ${isMale ? styles.maleCard : styles.femaleCard}`}>
      <img className={styles.icon} src={userIcon} alt="userIcon" />

      <h2 className={styles.userFullName}>
        {firstName} {lastName}
      </h2>
      <span className={styles.nickname}>@{nickname}</span>

      <span>{isVerified && <VerifiedIcon className={styles.VerifiedIcon} />}</span>

      <button className={styles.btn}>+</button>

      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <p className={styles.infoText}>Tweets</p>
          <p className={styles.num}>{tweets}</p>
        </div>

        <div className={styles.info}>
          <p className={styles.infoText}>Following</p>
          <p className={styles.num}>{following}</p>
        </div>

        <div className={styles.info}>
          <p className={styles.infoText}>Followers</p>
          <p className={styles.num}>{followers}</p>
        </div>
      </div>
    </article>
  );
}

function VerifiedIcon() {
  return <img className={styles.isVerified} src={verified} alt="verifiedIcon" />;
}

export default UserCard;
