import Image from 'next/image'
import setString from '@/components/hooks/setString'
import lang from '@/data/translation/index'
import imageData from '@/data/images/corporateClients'

import { useEffect } from 'react'
import loadJs from 'loadjs'

const CorporateClients = () => {
  useEffect(() => {
    loadJs(['/assets/js/corporateClientsSlider.js'], {
      async: false,
    })
  })

  return (
    <section className='clients-section'>
      <div className='section-pl'>
        <div className='clients-text'>
          <h2>
            {setString(lang.corporateClientsTitleTop)} <br />
            {setString(lang.corporateClientsTitleBottom)}
          </h2>
          <p>{setString(lang.corporateClientsDics)}</p>
        </div>
      </div>
      <div className='clients-slider js-slick'>
        <ul className='clients-slider-block'>
          <li>
            <div className='image'>
              <Image
                src={imageData.hh.src}
                alt={setString(imageData.hh.alt)}
                width={141}
                height={106}
              />
            </div>
          </li>
          <li>
            <div className='image'>
              <Image
                src={imageData.rzd.src}
                alt={setString(imageData.rzd.alt)}
                width={141}
                height={107}
              />
            </div>
          </li>
          <li>
            <div className='image'>
              <Image
                src={imageData.tatenergo.src}
                alt={setString(imageData.tatenergo.alt)}
                width={240}
                height={107}
              />
            </div>
          </li>
          <li>
            <div className='image'>
              <Image
                src={imageData.toms.src}
                alt={setString(imageData.toms.alt)}
                width={163}
                height={54}
              />
            </div>
          </li>
        </ul>
        <ul className='clients-slider-block'>
          <li>
            <div className='image'>
              <Image
                src={imageData.rosneft.src}
                alt={setString(imageData.rosneft.alt)}
                width={142}
                height={107}
              />
            </div>
          </li>
          <li>
            <div className='image'>
              <Image
                src={imageData.rosseti.src}
                alt={setString(imageData.rosseti.alt)}
                width={142}
                height={107}
              />
            </div>
          </li>
          <li>
            <div className='image'>
              <Image
                src={imageData.sberbankLeasing.src}
                alt={setString(imageData.sberbankLeasing.alt)}
                width={168}
                height={67}
              />
            </div>
          </li>
          <li>
            <div className='image'>
              <Image
                src={imageData.lukomA.src}
                alt={setString(imageData.lukomA.alt)}
                width={165}
                height={43}
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default CorporateClients
