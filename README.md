# reactLiveCode-task

The source code for the [https://react-live-code.vercel.app/](https://react-live-code.vercel.app/).

## Table of contents

1. [Features](#features)
2. [Dependencies](#dependencies)
3. [Prerequisites](#prerequisites)
4. [Install and Use](#install-and-use)
5. [Folder Structure](#folder-structure)

## Features

- user login
- show departments
- show department details (doctors in the department)
- refresh token if expired (after 24 hpurs)

## Dependencies

The project is built with:

- `React.js` mainly
- `Tailwind` for styling with `Shadcn UI`
- `React Hook Form` for handling forms
- `Zod` for adding a schema declaration and validation
- `Redux Toolkit` for managing app state
- `react-toastify` for showing messages to the user
- `Axios` for send requests
- `redux-persist` for store redux a part of redux state in local storage
- `Vite` a JavaScript-based bundler

## Prerequisites

To use this project you should have the following on your machine:

- `Node.js` version `16.16.0` or above
- `npm` version `8.11.0` or above

## Install and Use

To install the project you have to:

1. Clone the repository:
   `git clone https://github.com/Mohmmed-Mahsoub/reactLiveCode.git`

2. Install packages:
   `npm install`

3. Run the project:
   `npm run dev`

4. Open [http://127.0.0.1:5173](http://127.0.0.1:5173) with your browser to see the result.

## Folder Structure

The main folder structure of the code is structured like the following:

```js
├── .env.development
├── .env.production
├── .eslintrc.cjs
├── .gitignore
├── components.json
├── index.html
├── jsconfig.json
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md //for documentation
├── tailwind.config.js
├── tailwind.config.js //for tailwind design system
|
├── public
\---src
|   ├── App.jsx
|   ├── index.css //for general style
|   ├── main.jsx //the app root
|   |
|   ├── api //all needs to make a request for any api
|   |   └── endPoints.js //all endPoints
|   |
|   ├── appState //app state using redux toolkit
|   |   ├── store.js
|   |   └── slices
|   |       └── authSlice.js
|   |
|   ├── assets
|   ├── components
|   |   ├── departmentDeatails //for components using only on departmentDeatails page
|   |   |   ├── departmentDeatails.container.jsx
|   |   |   └── doctorCard.component.jsx
|   |   |
|   |   ├── departments //for components using only on departments page
|   |   |   ├── departmentCard.component.jsx
|   |   |   └── departments.container.jsx
|   |   |
|   |   ├── general //for components using in diffrent pages
|   |   |   ├── mainLoader.component.jsx
|   |   |   ├── noData.component.jsx
|   |   |   └── serverError.component.jsx
|   |   |
|   |   ├── layout
|   |   |   └── rootLayout //for components using on all pages
|   |   |       ├── rootLayout.component.jsx
|   |   |       ├──  rootLayout.module.css
|   |   |       └── footer
|   |   |           ├── footer.component.jsx
|   |   |           └── footer.module.css
|   |   |
|   |   ├── login
|   |   |   └── loginForm.component.jsx
|   |   |
|   |   └── ui //for shadcn ui components
|   |       ├── button.jsx
|   |       ├── form.jsx
|   |       ├── input.jsx
|   |       └── label.jsx
|   |
|   ├── helpers
|   |   ├── customHooks
|   |   └── utilities
|   |       ├── changeUrlDirect.js
|   |       ├── dateToTimestamp.js
|   |       ├── dynamicAxiosRequest.js
|   |       ├── isLoggedInWithin24Hours.js
|   |       └── showToast.js
|   |
|   ├── lib
|   |   └── utils.js
|   |
|   ├── pages
|   |   ├── departmentDetails.page.jsx
|   |   ├── departments.page.jsx
|   |   ├── login.page.jsx
|   |   └── notFound.page.jsx
|   |
└── ├── router
    └── AppRoutes.jsx
```
