import React from 'react'
import styles from './Experience.module.scss'
import Moment from 'react-moment'
import 'moment/locale/ru'
import experienceStart from './data/experience'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../redux-hooks/redux-hooks'

const Experience = () => {
  const { ref: refOne, inView: inViewOne } = useInView({
    threshold: 0,
  })
  const { ref: refTwo, inView: inViewTwo } = useInView({
    threshold: 0,
  })
  const { ref: refThree, inView: inViewThree } = useInView({
    threshold: 0,
  })
  const { ref: refFour, inView: inViewFour } = useInView({
    threshold: 0,
  })
  const { ref: refFive, inView: inViewFive } = useInView({
    threshold: 0,
  })

  const refs = [refOne, refTwo, refThree, refFour, refFive]
  const inViews = [inViewOne, inViewTwo, inViewThree, inViewFour, inViewFive]
  const { language } = useAppSelector((state) => state.changesPage)
  const { t } = useTranslation()

  return (
    <section className={styles.experience} id={'Experience'}>
      <div className={styles.experience__container}>
        <h2 className={styles.experience__title}>{t('Experience')}</h2>
        <div className={styles.experience__content}>
          <ul className={styles.experience__list}>
            {Object.entries(experienceStart).map((experienceItem, index) => {
              return (
                <li
                  className={`${styles.experience__item} ${styles.item}`}
                  ref={refs[index]}
                  key={index}
                >
                  <h3 className={styles.item__skill}>{t(experienceItem[0])}</h3>
                  <div className={styles.item__body}>
                    <Moment locale={language.value} className={styles.item__title} fromNow ago>
                      {experienceItem[1]}
                    </Moment>
                    <span>
                      <Moment locale={language.value} format="DD MMM YYYY">
                        {experienceItem[1]}
                      </Moment>
                      <div className={styles.item__progress}>
                        {inViews[index] && <div className={styles['item__progress-line']}></div>}
                      </div>
                      <Moment locale={language.value} format="DD MMM YYYY">
                        {Date.now()}
                      </Moment>
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
