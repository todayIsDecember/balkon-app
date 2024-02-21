import { getAbout } from "../api/getAbout";
import { Wrapper } from "../components";
import styles from './page.module.css'
import LocationIcon from '../../public/location.svg';
import PhoneIcon from '../../public/phone.svg'

export default async function AboutPage(): Promise<JSX.Element> {
  const about = await getAbout()

  return (
    <Wrapper>
      <div className={styles.container}>
        <p className={styles.title}>{about.name}</p>
        <LocationIcon className={styles.locationIcon}/>
        <p className={styles.location}>{about.location}</p>
        <PhoneIcon className={styles.contactsIcon}/>
        <p className={styles.contacts}>{about.contacts}</p>
        <p className={styles.description}>{about.description}</p>
      </div>
    </Wrapper>
  )
}