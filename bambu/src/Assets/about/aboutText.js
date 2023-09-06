import svg1 from './upIcon.svg'
import svg2 from './keyIcon.svg'
import svg3 from './downloadIcon.svg'
import svg4 from './personIcon.svg'
// objeto con titulos
const texts = {
    tittle1: 'Elevando PyMES y Emprendedores hacia el Éxito',
    tittle2: 'Sobre nosotros',
    tittle3: '¿Que nos hace destacar?',
    tittle4:'¡Conoce a nuestro equipo!',
    description: 'En el denso bosque empresarial, emerge una poderosa entidad: Bambú. Somos más que una empresa de consultoría y capacitación; somos el viento fresco que impulsa a las PyMES y pequeños emprendedores a crecer y prosperar.',

    description2:'Nuestra misión es sencilla pero poderosa: nutrir el crecimiento. Con raíces profundas en el conocimiento del mercado actual, ofrecemos soluciones personalizadas que infunden vigor en cada rincón de tu negocio. A través de estrategias de consultoría y mentoría  meticulosamente diseñadas, desenredamos los desafíos y trazamos un camino claro hacia el éxito.'
    
}
const items = [
    {card:{id:1, image:svg1,  front:'Experiencia Centrada en Resultados', back:'Nuestro equipo combina años de experiencia con una pasión ardiente por ver crecer a las PyMES. Cada recomendación y guía que ofrecemos está respaldada por un historial probado de éxitos'}},
    {card:{id:2, image:svg2,  front:'Capacitación Transformadora', back:'No solo proporcionamos consejos; empoderamos. Nuestros programas están diseñados para dotarte de habilidades que perdurarán. Te convertirás en el maestro de tu propio crecimiento'}},
    {card:{id:3, image:svg3,  front:'Kits Descargables para la Acción Inmediata', back:'Reconocemos que el tiempo es esencial. Es por eso que hemos creado kits descargables llenos de herramientas prácticas y plantillas listas para usar.'}},
    {card:{id:4, image:svg4,  front:'Enfoque Personalizado', back:'Comprendemos que cada PyME y emprendedor es único. Nuestras soluciones son moldeadas según tus necesidades específicas y metas. No importa dónde estés en tu viaje empresarial, estamos a tu lado.'}},
]

module.exports= {
    texts,
    items
}