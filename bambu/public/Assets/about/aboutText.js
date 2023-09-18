import svg1 from './upIcon.svg'
import svg2 from './keyIcon.svg'
import svg3 from './downloadIcon.svg'
import svg4 from './personIcon.svg'
// objeto con titulos
const texts = {
    tittle1: 'Elevando PyMES y Emprendedores hacia el Éxito',
    tittle2: 'Sobre nosotros',
    tittle3: 'Cultura organizacional',
    tittle4: '¿Que nos hace destacar?',
    tittle5:'¡Conoce a nuestro equipo!',

    description: 'En el denso bosque empresarial, emerge una poderosa entidad: Bambú. Somos más que una empresa de consultoría y capacitación; somos el viento fresco que impulsa a las PyMES y pequeños emprendedores a crecer y prosperar.',

    description2:'Nuestra misión es sencilla pero poderosa: nutrir el crecimiento. Con raíces profundas en el conocimiento del mercado actual, ofrecemos soluciones personalizadas que infunden vigor en cada rincón de tu negocio. A través de estrategias de consultoría y mentoría  meticulosamente diseñadas, desenredamos los desafíos y trazamos un camino claro hacia el éxito.',
    subtittle1:'Vision',
    subtittle2:'Misión',
    subtittle3:'Valores',
    visionDesc:'En Bambú, visualizamos un mundo donde los emprendedores y empresas florecen y crecen de manera sostenible, inspirados por la naturaleza y respaldados por nuestra expertise. Aspiramos a ser el punto de referencia en la consultoría comercial, creando conexiones sólidas y ayudando a cultivar un ecosistema empresarial próspero y sostenible.',
    misionDesc:'Nuestra misión en Bambú es servir como la raíz comercial que nutre y fortalece a los emprendimientos a través de nuestra consultoría, mentoreo y capacitación. Nos comprometemos a proporcionar soluciones estratégicas y creativas que impulsen el crecimiento de nuestros clientes. Somos puentes, creadores de redes y gestores de vinculación en tiempos de desafío, siempre dispuestos a acompañar y asesorar en el viaje empresarial.',
    valoresDesc:'Los siguientes elementos reflejan la esencia de Bambú como una empresa comprometida con el crecimiento empresarial sostenible, la empatía hacia sus clientes y la creatividad inspirada en la naturaleza. '
    
}
const items = [
    {card:{id:1, image:svg1,  front:'Experiencia Centrada en Resultados', back:'Nuestro equipo combina años de experiencia con una pasión ardiente por ver crecer a las PyMES. Cada recomendación y guía que ofrecemos está respaldada por un historial probado de éxitos'}},
    {card:{id:2, image:svg2,  front:'Capacitación Transformadora', back:'No solo proporcionamos consejos; empoderamos. Nuestros programas están diseñados para dotarte de habilidades que perdurarán. Te convertirás en el maestro de tu propio crecimiento'}},
    {card:{id:3, image:svg3,  front:'Kits Descargables para la Acción Inmediata', back:'Reconocemos que el tiempo es esencial. Es por eso que hemos creado kits descargables llenos de herramientas prácticas y plantillas listas para usar.'}},
    {card:{id:4, image:svg4,  front:'Enfoque Personalizado', back:'Comprendemos que cada PyME y emprendedor es único. Nuestras soluciones son moldeadas según tus necesidades específicas y metas. No importa dónde estés en tu viaje empresarial, estamos a tu lado.'}},
]
const valores =[
    {
        name:'Crecimiento Sostenible', description:'Creemos en el crecimiento gradual y sostenible, al igual que el bambú. Fomentamos la planificación estratégica a largo plazo y la innovación constante para alcanzar metas sólidas.'
        },{
            name:'Empatía y Compromiso', description:'Nos identificamos con la empatía y el compromiso. Estamos completamente dedicados a las causas de nuestros clientes y estamos dispuestos a esforzarnos al máximo para lograr resultados significativos.',
        },{

            name:'Creatividad Inspirada por la Naturaleza', description:'La creatividad es el corazón de nuestro enfoque. Nos inspiramos en la naturaleza y aplicamos soluciones creativas y efectivas a los desafíos comerciales.',
        },{
        name:'Comunidad y Colaboración', description:'Valoramos la comunidad y la colaboración. Buscamos crear una comunidad sólida donde todos puedan aprender y crecer juntos. Fomentamos la colaboración entre emprendedores y empresas.'
        },{    
        name:'Transparencia y Autenticidad', description:'Creemos en la transparencia y la autenticidad en todas nuestras interacciones. Queremos que nuestros clientes nos conozcan y confíen en nosotros como personas antes que como una marca.',
        }
]

module.exports= {
    texts,
    items,
    valores
}