import RoboImage from '../assets/images/icon_theft.svg'
import ChoqueImage from '../assets/images/icon_choque.svg'
import PerdidaImage from '../assets/images/icon_perdidatotal.svg'

const coverages = [
  {
    id: 1, 
    name: 'Protege a tu auto',
    items: [
      { 
        id: 1, 
        name: 'Llanta robada', 
        content: 'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis', 
        icon: RoboImage,
        price: 15.00
      },
      { 
        id: 2, 
        name: 'Choque y/o pasarte la luz roja', 
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores cupiditate dignissimos eum reiciendis sequi atque voluptatem tenetur vitae! Corrupti iusto harum quia optio laborum alias velit repellat inventore perspiciatis?', 
        icon: ChoqueImage,
        price: 20.00
      },
      { 
        id: 3, 
        name: 'Atropello en la vía Evitamiento ', 
        content: 'Quae dolores cupiditate dignissimos eum reiciendis sequi atque voluptatem tenetur vitae! Corrupti iusto harum quia optio laborum alias velit repellat inventore perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        icon: PerdidaImage,
        price: 50.00
      }
    ]
  },
  {
    id: 2,
    name: 'Protege a los que te rodean',
    items: []
  },
  {
    id: 3,
    name: 'Mejora tu plan',
    items: []
  }
]

export default coverages