# Ong Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---

### Skeleton

Skeleton disponible para cualquier componente en src/features/skeleton/SkeletonComponent.js
Dentro del archivo encontraremos el component <Skeleton /> proporcionado por la libreria ChakraUI el cual cuenta con una propiedad "isLoading". Si la misma se encuentra en "false" muestra el componente y si se encuentra en "true" no lo muestra

---

---

### ProgressBar

    La barra de progreso es usada para visualizar el status de una tarea que lleva mucho tiempo o consiste en diferentes pasos.

    Importación:

    import { Progress } from "@chakra-ui/react"

    Uso:

    <Progress value={80} />

    Tamanos de barra de progreso:

    Hay dos maneras en las que puedes incrementar la altura de la barra de progreso:

    *Puedes agregar un prop tamano para incrementar el mismo.
    *Puedes usar la propiedad height para setear la altura manualmente.

    <Progress colorScheme="green" size="lg" value={20} />
    <Progress colorScheme="green" height="32px" value={20} />

    Progreso animado:

    Para visualizar un progreso animado, pasa el prop isIndeterminate.

    <Progress size="xs" isIndeterminate />

---
