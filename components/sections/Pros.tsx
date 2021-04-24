const Pros = ({ format = 'online' }) => {
  if (format === 'online') {
    return (
      <section className='advantages-section section-pl'>
        <div className='title-pl red'>online</div>
        <h2>На MBA mini мы обучаем онлайн. И делаем это качественно</h2>
        <div className='advantages-content'>
          <ul className='advantages-list'>
            <li>
              <div className='circle'>
                <img src='/assets/images/icon_check_red.svg' alt='' />
              </div>
              <div>
                <h5>Учитесь из любой точки мира</h5>
                <p>
                  Обучение проходит на нашей образовательной платформе. Всё
                  собрано в личном кабинете: здесь удобно смотреть расписание,
                  изучать материалы, записи прошедших лекций, загружать задания
                  и получать по ним обратную связь.
                </p>
              </div>
            </li>
            <li>
              <div className='circle'>
                <img src='/assets/images/icon_check_red.svg' alt='' />
              </div>
              <div>
                <h5>Онлайн-формат даёт возможность учиться у лучших</h5>
                <p>
                  Благодаря онлайн-формату вы можете пройти программу с
                  преподавателями сразу из нескольких топовых бизнес-школ мира.
                  Мы хотим, чтобы ценные знания были доступны вам при любых
                  обстоятельствах
                </p>
              </div>
            </li>
            <li>
              <div className='circle'>
                <img src='/assets/images/icon_check_red.svg' alt='' />
              </div>
              <div>
                <h5>Получаете престижные дипломы</h5>
                <p>
                  Дипломы MBA mini online не отличается от дипломов очных
                  программ за счет того, что преподают те же спикеры по тем же
                  учебным прграммам
                </p>
              </div>
            </li>
            <li>
              <div className='circle'>
                <img src='/assets/images/icon_check_red.svg' alt='' />
              </div>
              <div>
                <h5>Общайтесь с преподавателями online</h5>
                <p>
                  На MBA mini online у Вас есть возможность задавать вопросы
                  преподавателям во время видео-встреч, а также через нашу
                  образовательную платформу
                </p>
              </div>
            </li>
          </ul>
          <div className='right-image'>
            <img
              className='lazyload'
              data-src='/assets/images/advantages_pic_1.jpg'
              alt=''
            />
          </div>
        </div>
      </section>
    )
  }

  if (format === 'blended') {
    return (
      <section className='advantages-section blended-advantages section-pl'>
        <div className='title-pl red'>online</div>
        <h2>
          Также на MBA blended мы обучаем онлайн. И делаем это качественно
        </h2>
        <div className='advantages-content'>
          <div className='left-image'>
            <div className='image'>
              <img
                className='lazyload'
                data-src='/assets/images/advantages_pic_1.jpg'
                alt=''
              />
            </div>
          </div>
          <ul className='advantages-list'>
            <li>
              <div className='circle'>
                <img src='/assets/images/icon_check_red.svg' alt='' />
              </div>
              <div>
                <h5>Учитесь из любой точки мира</h5>
                <p>
                  Обучение проходит на нашей образовательной платформе. Всё
                  собрано в личном кабинете: здесь удобно смотреть расписание,
                  изучать материалы, записи прошедших лекций, загружать задания
                  и получать по ним обратную связь.
                </p>
              </div>
            </li>
            <li>
              <div className='circle'>
                <img src='/assets/images/icon_check_red.svg' alt='' />
              </div>
              <div>
                <h5>Онлайн-формат даёт возможность учиться у лучших</h5>
                <p>
                  Благодаря онлайн-формату вы можете пройти программу с
                  преподавателями сразу из нескольких топовых бизнес-школ мира.
                  Мы хотим, чтобы ценные знания были доступны вам при любых
                  обстоятельствах
                </p>
              </div>
            </li>
            <li>
              <div className='circle'>
                <img src='/assets/images/icon_check_red.svg' alt='' />
              </div>
              <div>
                <h5>Общайтесь с преподавателями online</h5>
                <p>
                  На MBA mini online у Вас есть возможность задавать вопросы
                  преподавателям во время видео-встреч, а также через нашу
                  образовательную платформу
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Pros