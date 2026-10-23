import styles from "../Routing.module.sass";

export default function About() {
  return (
    <div className={styles.resumeContainer}>
      <main>
        <article>
          <img src="./assets/photo_2026-06-20_23-06-44.jpg" alt="Влад фото" />

          <p>
            Працюю на стику копірайтингу і PR. Вмію писати круті, цікаві тексти, які будуть просто
            читатися та продавати. Розумію як зробити так, щоб тексти подобалися не тільки людям, а
            й пошуковим системам.
          </p>
        </article>

        <section>
          <h2>Навички</h2>

          <section>
            <h3>копірайтинг</h3>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </section>

          <section>
            <h3>SEO-копірайтинг</h3>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            </ul>
          </section>
        </section>

        <section>
          <h2>Мови</h2>
          <ul>
            <li>Українська</li>
            <li>Англійська</li>
          </ul>
        </section>

        <section>
          <h2>Досвід роботи</h2>

          <section>
            <h3>SMM-копірайтер</h3>
            <p>2016-2018 | Київ</p>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, vero!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur.</li>
            </ul>
          </section>

          <section>
            <h3>
              помічник редактора/копірайтера | <em>Альтерсофт</em>
            </h3>
            <p>2014-2016 | Київ</p>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde!</li>
            </ul>
          </section>
        </section>
      </main>

      <footer>
        <h2>Публікації та посилання</h2>
        <p>
          Складаємо резюме без досвіду роботи |
          <em>
            <a
              href="https://www.cvwizard.com/ua?gad_source=1&gad_campaignid=20818440219&gclid=CjwKCAjw9NjRBhATEiwA_p2J8cki8prGb3qCQLz6VR2qIaWzVuN5XT-XeLCWpiG1aSLTTPWuEjNBIhoC_zUQAvD_BwE"
              target="_blank"
            >
              seetcv.com
            </a>
          </em>
        </p>
        <h2>Рекомендаії</h2>
        <p>
          <strong>Павлюк Оксана</strong>, Засновник агентства інтернет маркетингу
        </p>

        <p>
          <a href="https://textum.com.ua/" target="_blank">
            Textum.com.ua
          </a>{" "}
          |<a href="tel:+380999999999">(099) 999-99-99</a> |
          <a href="mailto:ak.resume@gmail.com" target="_blank">
            ak.resume@gmail.com
          </a>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ex nihil, eveniet totam, non
          eos porro alias obcaecati harum odio est quaerat debitis molestiae nostrum, soluta
          perspiciatis consequuntur pariatur? Provident ratione sit minima pariatur officiis non
          quisquam nulla totam in magnam mollitia amet consequatur dignissimos, maiores facilis
          numquam, error sequi.
        </p>
      </footer>
    </div>
  );
}
