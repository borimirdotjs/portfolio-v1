export const getIconInfo = (iconName) => {
  switch (iconName) {
    case "HTML":
      return {
        title: "HTML",
        description:
          "HyperText Markup Language is the standard markup language for creating web pages.",
      };
    case "CSS":
      return {
        title: "CSS",
        description:
          "Cascading Style Sheets is a stylesheet language used for describing the presentation of a document written in HTML.",
      };
    case "JavaScript":
      return {
        title: "JavaScript",
        description:
          "JavaScript is a high-level, interpreted programming language that enables interactive web pages and dynamic web applications.",
      };
    case "React":
      return {
        title: "React",
        description:
          "JavaScript library for building user interfaces. React provides a component-based approach to developing UIs, making it easier to build and manage complex UI components in an efficient and reusable manner.",
      };
    case "Sass":
      return {
        title: "Sass",
        description:
          "Sass provides features like variables, nesting, mixins, and more, which help streamline the process of writing and maintaining CSS stylesheets.",
      };
    case "Redux Toolkit":
      return {
        title: "Redux Toolkit",
        description:
          "A library that simplifies the implementation of Redux, a state management tool for JavaScript applications. Redux Toolkit provides utilities and abstractions to reduce boilerplate code and improve development productivity when working with Redux.",
      };
    case "Figma":
      return {
        title: "Figma",
        description:
          "Web-based design and prototyping tool used for creating user interfaces, wireframes, and interactive designs. Figma enables collaborative design workflows and allows designers and developers to work together seamlessly.",
      };
    case "TypeScript":
      return {
        title: "TypeScript",
        description:
          "A superset of JavaScript that adds static typing and additional features to the language. TypeScript helps catch errors early during development and provides enhanced tooling support for building scalable and maintainable JavaScript applications.",
      };
    case "TanStack React Query":
      return {
        title: "TanStack React Query",
        description:
          "A library that simplifies data fetching and state management in React applications. React Query provides a declarative and efficient way to fetch, cache, synchronize, and update data in the UI, reducing the complexity of managing data-related concerns.",
      };
    case "Jest":
      return {
        title: "Jest",
        description:
          "JavaScript testing framework developed by Facebook. Jest provides a simple and intuitive way to write tests for JavaScript applications, including support for assertions, mocking, and test coverage reporting.",
      };
    case "Framer Motion":
      return {
        title: "Framer Motion",
        description:
          "A popular animation library for React. Framer Motion allows you to create smooth and fluid animations for UI components, including transitions, keyframes, and gesture-based interactions.",
      };
    case "Github":
      return {
        title: "Github",
        description:
          "GitHub is a widely used web-based platform that serves as a central hub for version control and collaboration in software development. It allows developers to store their code repositories, track changes to their codebase over time, and collaborate with other developers on projects.",
      };

    default:
      return {
        title: "",
        description: "",
      };
  }
};
