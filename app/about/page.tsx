import { getAbout } from "../api/getAbout";
import { Wrapper } from "../components";
import styles from './page.module.css'

export default async function AboutPage(): Promise<JSX.Element> {
  const about = await getAbout()

  return (
    <Wrapper>
      <div className={styles.container}>
        <p className={styles.title}>{about[0].name}</p>
        <p className={styles.location}>{about[0].location}</p>
        <p className={styles.contacts}>{about[0].contacts}</p>
        <p className={styles.description}>{about[0].description}</p>

      </div>
    </Wrapper>
  )
}