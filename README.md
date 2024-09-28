# Proyecto: test-double-v-partners

Este proyecto es una aplicación web desarrollada con **React** y **TypeScript**, que obtiene y muestra información de usuarios desde la API pública de GitHub. El diseño es completamente responsive, utilizando **Bootstrap** y **Font Awesome** para los iconos.

## Tecnologías Utilizadas

- **React**: Framework de JavaScript para construir interfaces de usuario.
- **TypeScript**: Lenguaje de programación basado en JavaScript que incluye tipado estático.
- **Bootstrap**: Framework de CSS para un diseño responsive y moderno.
- **Font Awesome**: Librería de iconos utilizada para agregar iconos fácilmente en la aplicación.
- **API REST de GitHub**: La aplicación consume la API pública de GitHub para obtener información de los usuarios.

## Instalación

1. Clona este repositorio:

    ```bash
    git clone https://github.com/deivingranados/test-double-v-partners.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd test-double-v-partners
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Inicia la aplicación:

    ```bash
    npm start
    ```

## Estructura del Proyecto

El proyecto sigue una estructura de carpetas organizada para separar los componentes, las páginas, los servicios y los modelos de datos. A continuación se describe cada parte:

- **components/**: Contiene los componentes reutilizables de la interfaz de usuario, como botones, formularios, etc.
- **pages/**: Contiene las páginas principales de la aplicación, como la página de inicio, perfil de usuario, etc.
- **services/**: Contiene los servicios que se encargan de hacer las solicitudes HTTP a la API de GitHub.
- **models/**: Aquí se define la interfaz de los datos que se obtienen de la API, asegurando el uso de tipado estático con TypeScript.

## Funcionalidades

- Búsqueda de usuarios en GitHub utilizando la API pública.
- Visualización de los perfiles de usuarios de GitHub con su nombre, avatar y enlaces a sus perfiles.
- Interfaz responsive que se adapta a diferentes tamaños de pantalla.
- Uso de iconos de **Font Awesome** para mejorar la estética de la interfaz.

## Ejemplo de Uso

1. Ingresa el nombre de usuario en el campo de búsqueda.
2. La aplicación mostrará una lista de usuarios coincidentes con la búsqueda, obtenidos directamente de la API pública de GitHub.
3. Haz clic en cualquier usuario para ver más detalles en su perfil de GitHub.

## Autor

- **Deiving Granados** - [GitHub](https://github.com/deivingranados)

---

¡Gracias por usar esta aplicación! Si tienes sugerencias o encuentras algún problema, no dudes en crear un issue o enviar un pull request.

