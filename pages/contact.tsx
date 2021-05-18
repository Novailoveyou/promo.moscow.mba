import stls from '@/styles/modules/ContactPage.module.sass'
import Head from 'next/head'
import ContactCards from '@/components/general/ContactCards'

const contact = () => {
  return (
    <>
      <Head>
        <title>Контакты</title>
      </Head>

      <div className='container'>
        <h1 className={stls.h1}>КОНТАКТЫ</h1>
        <ContactCards />
      </div>
    </>
  )
}

export default contact