const sampleData = [
  {
    category: "TypeScript",
    qs: [
      {
        question: "What is TypeScript?",
        answer:
          "TypeScript is a superset of JavaScript that adds optional static typing.",
      },
      {
        question: "What are the benefits of using TypeScript?",
        answer:
          "TypeScript helps catch errors early, improves code maintainability, and enhances developer productivity.",
      },
      {
        question: "How do you define a variable in TypeScript?",
        answer:
          "You can define a variable using the let or const keywords, similar to JavaScript.",
      },
      {
        question: "What is a type annotation in TypeScript?",
        answer:
          "A type annotation is a way to explicitly specify the type of a variable, parameter, or return value.",
      },
      {
        question: "Can TypeScript be used for backend development?",
        answer:
          "Yes, TypeScript can be used for both frontend and backend development, thanks to frameworks like Node.js.",
      },
    ],
  },
  {
    category: "React",
    qs: [
      {
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces.",
      },
      {
        question: "How do you create a component in React?",
        answer:
          "You can create a component by defining a JavaScript function or class.",
      },
      {
        question: "What is JSX?",
        answer:
          "JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript.",
      },
      {
        question: "What are props in React?",
        answer:
          "Props are short for properties and are used to pass data from parent to child components.",
      },
      {
        question: "What is the virtual DOM in React?",
        answer:
          "The virtual DOM is a lightweight representation of the actual DOM and is used to improve performance.",
      },
    ],
  },
  {
    category: "Node.js",
    qs: [
      {
        question: "What is Node.js?",
        answer:
          "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      },
      {
        question: "What is npm?",
        answer:
          "npm is a package manager for JavaScript, used to install and manage dependencies.",
      },
      {
        question: "What is Express.js?",
        answer:
          "Express.js is a web application framework for Node.js, designed for building web applications and APIs.",
      },
      {
        question: "How do you handle asynchronous operations in Node.js?",
        answer:
          "Asynchronous operations in Node.js can be handled using callbacks, promises, or async/await syntax.",
      },
      {
        question: "What is middleware in Express.js?",
        answer:
          "Middleware functions are functions that have access to the request and response objects, and can modify them or terminate the request-response cycle.",
      },
    ],
  },
  {
    category: "MongoDB",
    qs: [
      {
        question: "What is MongoDB?",
        answer:
          "MongoDB is a NoSQL database program, using JSON-like documents with optional schemas.",
      },
      {
        question: "How do you insert a document in MongoDB?",
        answer:
          "You can insert a document in MongoDB using the insertOne() or insertMany() methods.",
      },
      {
        question: "What is a collection in MongoDB?",
        answer:
          "A collection in MongoDB is equivalent to a table in relational databases, and it contains a group of documents.",
      },
      {
        question: "What is Mongoose?",
        answer:
          "Mongoose is an object data modeling (ODM) library for MongoDB and Node.js, designed to work with asynchronous code.",
      },
      {
        question: "How do you perform aggregation in MongoDB?",
        answer:
          "Aggregation in MongoDB is done using the aggregate() method, which allows you to process data and return computed results.",
      },
    ],
  },
  {
    category: "GraphQL",
    qs: [
      {
        question: "What is GraphQL?",
        answer:
          "GraphQL is a query language for APIs and a runtime for executing those queries.",
      },
      {
        question: "How does GraphQL differ from REST?",
        answer:
          "GraphQL allows clients to request only the data they need, whereas REST typically returns fixed data structures.",
      },
      {
        question: "What is a schema in GraphQL?",
        answer:
          "A schema in GraphQL defines the types of data that can be queried and the relationships between them.",
      },
      {
        question: "What is a resolver in GraphQL?",
        answer:
          "A resolver in GraphQL is a function that determines how to fetch the data for a particular field in the schema.",
      },
      {
        question: "Can GraphQL be used with existing REST APIs?",
        answer:
          "Yes, GraphQL can be used to wrap existing REST APIs, providing a more flexible and efficient way to query data.",
      },
    ],
  },
  {
    category: "Computer Security",
    qs: [
      {
        question: "What is computer security?",
        answer:
          "Computer security refers to the protection of computer systems and information from unauthorized access, use, disclosure, disruption, modification, or destruction.",
      },
      {
        question: "What are the main goals of computer security?",
        answer:
          "The main goals of computer security include confidentiality, integrity, availability, authentication, and non-repudiation.",
      },
      {
        question: "What is encryption?",
        answer:
          "Encryption is the process of encoding information in such a way that only authorized parties can access it, usually through the use of cryptographic algorithms and keys.",
      },
      {
        question: "What is a firewall?",
        answer:
          "A firewall is a network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules.",
      },
      {
        question: "What is a vulnerability assessment?",
        answer:
          "A vulnerability assessment is the process of identifying, quantifying, and prioritizing vulnerabilities in a system or network.",
      },
    ],
  },
];

export default sampleData;
