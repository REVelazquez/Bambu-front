import { images } from '../../../../public/Assets/Logos_Empresas/index'
import Image from 'next/image'
import Style from './Carrousel.module.css'
const Carrousel = () => {
    return (

        <div className='flex justify-center h-full'>
            <section className={Style.section}>
                <></>
                <Image src={images.bP} className={Style.sectionImg} alt='bp logo' />
                <Image src={images.cerveny} className={Style.sectionImg} alt='cerveny logo' />
                <Image src={images.gett} className={Style.sectionImg} alt='gett logo' />
                <Image src={images.loteria} className={Style.sectionImg} alt='loteria logo' />
                <Image src={images.muniCord} className={Style.sectionImg} alt='municipalidad logo' />
                <Image src={images.oracle} className={Style.sectionImg} alt='bp logo' />
                <Image src={images.parma} className={Style.sectionImg} alt='cerveny logo' />
                <Image src={images.reinaFab} className={Style.sectionImg} alt='gett logo' />
                <Image src={images.sanDeLaCan} className={Style.sectionImg} alt='loteria logo' />
                <Image src={images.sanDelSalvador} className={Style.sectionImg} alt='municipalidad logo' />
            </section>
        </div>
    )
}

export default Carrousel