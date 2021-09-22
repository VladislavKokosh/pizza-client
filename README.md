## PIZZA CLIENT (web application)

## Scripts

`npm install` - installing dependencies.

`npm start` - run development server.

## Naming convention:

#### JSON keys: `lowerCamelCase`

- http
- apiHttp

#### Javascript Class names: `UpperCamelCase`

- User
- UserProfile
- PlatformHttpRequest

#### Javascript/Typescript file/folder naming: `lower-kebab-case`

- user-component.tsx
- user-api.ts

## Imports/Export convention:

#### Named Exports:

- export { fnName1 }
- export { fnName1, fnName2 }

#### Structure of imports

- libraries
- utils/services/redux(например actions и тд.)

- statics (images, fonts, locales, constants and other assets )
- types (interfaces, types, enums)
- layouts
- modules
- components
- styles (styled-components)
