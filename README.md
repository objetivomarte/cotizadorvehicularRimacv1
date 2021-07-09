# Cotizador Seguro Vehicular
![Screenshot](https://moiseshp.github.io/cotizador-seguro-vehicular/Screenshot.png)

## Descripción
Cotizador Seguro Vehicular es una Aplicación Web SPA realizada en React JS. A continuación se describen los diversos pasos realizados para el desarrollo de la aplicación:

- **Arquitectura:** Inicialmente el proyecto comenzó con la estructura otorgada por el andamio que otorga **create-react-app** pero luego se implementó la arquitectura que se visualiza en el código fuente organizada de acuerdo recursos que se utilizaron en todo el proyecto dentro de los que podemos encontrar:
  - Store: para la gestión de estados globales.
  - Components: para los componentes reutilizables.
  - Utils: para la administración de recursos globales como funciones, helpers o mockup data.
  - Views: donde se ubican las diferentes páginas con las que cuenta la aplicación.
- **Branding:** El siguiente paso fue desarrollar una base de estilos, tipografía y formatos  alineados con el branding visualizado en el enlace **figma** entregado. De esta manera se pueden utilizar rápidamente en las diferentes vistas o componentes.
- **Componentes reutilizables:** De la misma manera se identificaron componentes que pudieron ser reutilizables en todo el proyecto. Todos los componentes reutilizables se colocaron en la correspondiente carpeta **components**.
- **Layouts:** Se identificaron 2 vistas "patrón" que luego se crearon como envoltorios para las vistas correspondientes: Layout Principal y Layout para los "steps" del cotizador.
- **Formularios:** Los diversos campos del formulario cuentan con sus respectivas validaciones y restricciones de acuerdo al tipo de campo que apoyan a la intuitividad de la aplicación.
- **Vistas o páginas:** Finalmente, se crearon las diversas vistas y se procedió a la integración del flujo requerido del negocio en cuestión.
 

## Despliegue
Enlace del sitio desplegado: **[https://moiseshp.github.io/cotizador-seguro-vehicular/](https://moiseshp.github.io/cotizador-seguro-vehicular/)**.

- Instalar dependencias
```
npm install
```
- Levantar proyecto en entorno de desarrollo
```
npm run start
```

## Librerías
- React 17.02
  -Versión de la Librería de Facebook que ahora cuenta con el enfoque de *funciones* y *hooks*.
- Typescript
  - Dentro de sus principales ventajas es que se puede escribir un lenguaje más robusto y fácil de mantener. 
- React Redux
  - Unas de las librerías más usadas, por toda la comunidad, para la gestión de estados globales o *State Management*. Al ser una de las primeras librerías diseñadas para este propósito cuenta con una gran madurez y fuerte soporte entre los desarrolladores.
- React Router
  - Permite gestionar las diferentes rutas o páginas con las que cuenta el proyecto.
- React Hook Form
  - Para la validación de campos en cada formulario. Intuitiva, de fácil implementación y diseñada en base a *hooks*.
- Responsive Design
  - Como parte de la experiencia de usuario la aplicación cuenta con visualización tanto para dispositivos móviles como de escritorio.
- Google Fonts
- Sass

## Otros proyectos
- **[Blanquiazul ](https://moiseshp.github.io/blanquiazul/)** 
  - Personaliza la camiseta de Alianza Lima
- **[Battleship ](https://moiseshp.github.io/battleship/#/)** 
  - Versión para un jugador del clásico juego de mesa
- **[DUMMY LOGO MAKER ](https://moiseshp.github.io/dummy-logo-maker/)** 
  - Crea tus propios logos de ejemplo

## Autor
Proyecto desarrollado por **[moiseshp](https://github.com/moiseshp)**
