const sampleData = [
  {
    category: "Computational Models",
    questions: [
      {
        answer:
          "This is a theoretical machine that can simulate any computer algorithm, making it a fundamental concept in computer science.",
        question: "What is a Turing Machine?",
      },
      {
        answer:
          "This type of Turing Machine has the ability to explore multiple computational paths simultaneously, leading to an alternate way of defining the complexity class NP.",
        question: "What is a Non-deterministic Turing Machine?",
      },
      {
        answer:
          "This model of computation allows for direct access to any memory location, unlike the sequential access of a standard Turing machine.",
        question: "What is a Random-Access Memory (RAM) model?",
      },
      {
        answer:
          "A Turing machine with two tapes can decide the PALINDROME language in linear time, while a standard one-tape Turing machine requires quadratic time.",
        question: "What is a Two-Tape Turing Machine?",
      },
      {
        answer:
          "This thesis suggests that any problem solvable in polynomial time on one realistic model of computation can be solved in polynomial time on any other realistic model.",
        question: "What is the Extended Church-Turing Thesis?",
      },
    ],
  },
  {
    category: "Complexity Classes",
    questions: [
      {
        answer:
          "This class encompasses all decision problems that can be solved by a Turing machine using a polynomial amount of time, relative to the input size.",
        question: "What is P?",
      },
      {
        answer:
          "This class includes all decision problems for which a 'yes' answer can be verified in polynomial time with the help of a certificate.",
        question: "What is NP?",
      },
      {
        answer:
          "NP-Hard problems are at least as hard as the hardest problems in NP, meaning that a polynomial-time solution to any NP-Hard problem would imply P = NP.",
        question: "What is NP-Hard?",
      },
      {
        answer:
          "These problems are both in NP and NP-Hard, making them the 'hardest' problems in NP.",
        question: "What is NP-Complete?",
      },
      {
        answer:
          "This refers to the class of decision problems whose complements are in NP, raising questions about its relationship to NP.",
        question: "What is coNP?",
      },
    ],
  },
  {
    category: "Efficient Verification",
    questions: [
      {
        answer:
          "These puzzles, such as Sudoku or crosswords, may be difficult to solve, but their solutions can be easily verified.",
        question: "What are logic and word puzzles?",
      },
      {
        answer:
          "Checking the correctness of a claimed solution to a maze is an example of efficient verification, as it can be done in polynomial time.",
        question: "What is maze solving?",
      },
      {
        answer:
          "Verifying a claimed minimum-weight tour for the Traveling Salesperson Problem is not known to be efficiently verifiable, unlike the decision version with a budget constraint.",
        question: "What is the Traveling Salesperson Problem (TSP)?",
      },
      {
        answer:
          "This property of a verifier ensures that it accepts all valid instances of the language, given an appropriate certificate.",
        question: "What is completeness?",
      },
      {
        answer:
          "This property of a verifier ensures that it rejects all invalid instances of the language, regardless of the certificate provided.",
        question: "What is soundness?",
      },
    ],
  },
  {
    category: "Satisfiability",
    questions: [
      {
        answer:
          "This problem asks whether there exists an assignment of truth values to variables that makes a Boolean formula evaluate to true.",
        question: "What is the Boolean Satisfiability Problem (SAT)?",
      },
      {
        answer:
          "The Cook-Levin Theorem established that SAT is NP-Complete, making it a fundamental problem in complexity theory.",
        question: "What is the Cook-Levin Theorem?",
      },
      {
        answer:
          "This is a Boolean formula consisting of a conjunction of clauses, each of which is a disjunction of literals.",
        question: "What is a Conjunctive Normal Form (CNF) formula?",
      },
      {
        answer:
          "This is a CNF formula where each clause has exactly three literals.",
        question: "What is a 3-CNF formula?",
      },
      {
        answer:
          "This variant of the satisfiability problem, where the input formula is in 3-CNF, is also NP-Complete.",
        question: "What is 3-SAT?",
      },
    ],
  },
  {
    category: "NP-Complete Problems",
    questions: [
      {
        answer:
          "This problem involves finding a subset of vertices in a graph such that every edge in the graph is connected to at least one vertex in the subset.",
        question: "What is the Vertex Cover problem?",
      },
      {
        answer:
          "This problem involves finding a complete subgraph of a certain size within a given graph.",
        question: "What is the Clique problem?",
      },
      {
        answer:
          "This problem involves finding a subset of a given set of integers that add up to a target value.",
        question: "What is the Subset Sum problem?",
      },
      {
        answer:
          "This problem involves selecting a set of items to maximize their total value while staying within a weight limit.",
        question: "What is the Knapsack problem?",
      },
      {
        answer:
          "This problem involves finding a path in a graph that visits each vertex exactly once.",
        question: "What is the Hamiltonian Cycle problem?",
      },
    ],
  },
  {
    category: "Approximation",
    questions: [
      {
        answer:
          "This type of algorithm aims to find a solution that is close to the optimal solution for an optimization problem, especially for NP-Hard problems where finding the exact solution is difficult.",
        question: "What is an approximation algorithm?",
      },
      {
        answer:
          "This algorithm for the Vertex Cover problem repeatedly selects an edge and adds both its endpoints to the cover, achieving a 2-approximation ratio.",
        question: "What is the double-cover algorithm?",
      },
      {
        answer:
          "This algorithm for the Maximum Cut problem iteratively moves vertices between sides of the cut to increase the cut size, until no further improvement is possible.",
        question: "What is the local-search algorithm?",
      },
      {
        answer:
          "This combined algorithm for the Knapsack problem runs both the relatively greedy and single-greedy algorithms and chooses the better solution.",
        question: "What is the combined-greedy algorithm?",
      },
      {
        answer:
          "This is a measure of how close an approximate solution is to the optimal solution.",
        question: "What is the approximation ratio?",
      },
    ],
  },
];

export const reactSampleData = [
  {
    category: "TypeScript",
    questions: [
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
    questions: [
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
    questions: [
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
    questions: [
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
    questions: [
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
    questions: [
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

export const samplePlayers = [
  { name: "Justin", score: 100, activeTurn: false },
  { name: "Joseph", score: 150, activeTurn: true },
  { name: "Josh", score: 80 },
  { name: "Vance", score: 200 },
];

export default sampleData;
