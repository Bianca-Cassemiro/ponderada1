import Head from "next/head";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Currículo</title>
      </Head>
      <header>
        <img src="/profile.jpg" alt="Profile" className={styles.profile}/>
        <h1>BIANCA CASSEMIRO LIMA</h1>
        <h3>Computer Engineering Student</h3>
      </header>
      <main>
        <div className={styles.column}>
          <div>
            <div className={styles.section}>
              <h2>Profile</h2>
              <p>
                Currently, I am studying Computer Engineering at Inteli. I am
                looking for an internship opportunity in the development field,
                in a company where I can develop professionally, demonstrate my
                technical and emotional competencies and skills, and collaborate
                with my colleagues and managers towards the growth of the
                organization and the team.
              </p>
              <p>https://www.linkedin.com/in/biancacassemiro/</p>
              <p>bianca.lima@sou.inteli.edu.br</p>
            </div>
            <div className={styles.section}>
              <h2>Languages & Frameworks</h2>
              <div className={styles.language}>
                <div>
                  <p>- Python</p>
                  <p>- JavaScript</p>
                  <p>- C</p>
                </div>
                <div>
                  <p>- React.js</p>
                  <p>- Node.js</p>
                  <p>- Next.js</p>
                </div>
              </div>
            </div>
            <div className={styles.section}>
              <h2>Skills</h2>
              <p>- Ux/Ui</p>
              <p>- Adaptable</p>
              <p>- English Intermediate</p>
              <p>- Time Management</p>
            </div>
          </div>
          <div>
            <div className={styles.section}>
              <h2>Education</h2>
              <h3>CEFET - Centro Federal de Tecnologia de Minas Gerais</h3>
              <h3>Mechatronics / 2020 - 2021</h3>
              <p>
                During high school, I took a technical course in mechatronics
                concurrently with the regular curriculum. The main knowledge
                acquired were C programming, electrical circuits, and digital
                circuits.
              </p>
            </div>
            <div className={styles.section}>
              <h2>Work Experience</h2>
              <h3>BTG Pactual</h3>
              <h3>Summer Job / 2022</h3>
              <p>
                During the Summer Job, I developed the BTG Investimentos
                application for Wear OS smartwatches. The main skills acquired
                were Kotlin and Android development.
              </p>
            </div>
            <div className={styles.section}>
              <h3>Cryptum.io</h3>
              <h3>Summer Job / 2023</h3>
              <p>
                During the January 2023 vacation, I worked at Cryptum, a
                blockchain startup. During this time, I worked on developing an
                internal product for managing and analyzing the product they are
                creating.
              </p>
            </div>
            <div className={styles.section}>
              <h2>Prizes</h2>
              <p>ETH SP - Ethereum Brasil</p>
              <p>ETH Bogotá - Ethereum Foundation</p>
              <p>Hackathon Web3 – Tokenização do Patrimônio da União</p>
              <p>Deputada Mirim - Câmara dos Deputados</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
