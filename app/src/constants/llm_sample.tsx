export const sampleLLMs = [
  {
    category: "EECS 498/598 HW#3",
    questions: [
      {
        answer:
          "The GPT2 model, with its smaller size, aids in efficient exploration of in-context learning within the transformer architecture.",
        question:
          "What is the specific model used in the assignment to study in-context learning?",
      },
      {
        answer:
          "This format involves providing the model with input-output pairs, allowing it to learn the underlying function and predict the output for a new input.",
        question:
          "What is the format of the input prompt used in the assignment to facilitate in-context learning?",
      },
      {
        answer:
          "It refers to the distribution from which tasks, specifically model weights (w), are sampled.",
        question: "What does Dw represent in the context of the assignment?",
      },
      {
        answer:
          "The final model's ability to handle distribution shifts is evaluated by changing the input distribution to a skewed covariance matrix.",
        question:
          "What is the modification done in Problem 2 to assess the model's robustness?",
      },
      {
        answer:
          "This problem investigates the model's behavior when the task distribution, specifically the model weights (w), follows a discrete distribution.",
        question:
          "How does Problem 4 differ from the previous problems in terms of the task distribution?",
      },
    ],
  },
  {
    category: "Attention Mechanism",
    questions: [
      {
        answer:
          "The attention mechanism calculates similarity scores, attention weights, and attention features to mix elements of the input sequence.",
        question:
          "What are the key calculations performed by the attention mechanism?",
      },
      {
        answer:
          "It ensures that the attention weights form a probability vector, where the weights sum to 1.",
        question:
          "What is the role of the softmax function in the attention mechanism?",
      },
      {
        answer:
          "Linear similarities are employed in practice to compute the similarity scores between the query vector and the input sequence.",
        question:
          "What type of similarities are commonly used in the attention mechanism?",
      },
      {
        answer:
          "It represents the output of the attention mechanism, which is a weighted combination of the input sequence elements based on the attention weights.",
        question:
          "What do the attention features signify in the context of the attention mechanism?",
      },
      {
        answer:
          "The weights (Wq and Wv) of the attention mechanism are optimized during the training process.",
        question:
          "What parameters are typically optimized in the attention layer during training?",
      },
    ],
  },
  {
    category: "Self-Attention Layer",
    questions: [
      {
        answer:
          "Self-attention is used to extract features from a single sequence (X) and output a refined sequence (Y).",
        question:
          "What is the primary purpose of the self-attention mechanism?",
      },
      {
        answer:
          "It addresses the issue of permutation invariance by providing information about the position of tokens in the sequence.",
        question:
          "Why is positional encoding necessary in the context of self-attention?",
      },
      {
        answer:
          "Absolute PE assigns a unique embedding to each position in the sequence, while Relative PE focuses on encoding the relative distances between tokens.",
        question: "What are the two main strategies for positional encoding?",
      },
      {
        answer:
          "Causal/masked attention prevents future tokens from influencing the prediction of past outputs, ensuring a unidirectional flow of information.",
        question:
          "How does causal/masked attention differ from regular attention?",
      },
      {
        answer:
          "Three neural networks are commonly used: one for queries, one for keys, and one for values.",
        question:
          "How many neural networks are typically involved in the self-attention layer?",
      },
    ],
  },
  {
    category: "Transformer in LLMs",
    questions: [
      {
        answer:
          "The encoder processes the input sequence and generates a representation, while the decoder uses this representation to produce the output sequence.",
        question:
          "What is the difference between the encoder and decoder in encoder-decoder architectures?",
      },
      {
        answer:
          "Decoder-only architectures rely solely on the decoder component of the transformer for both encoding and decoding tasks.",
        question:
          "How do decoder-only architectures differ from encoder-decoder architectures?",
      },
      {
        answer:
          "Model size, amount of training data, and training duration are core considerations in designing large language models (LLMs).",
        question:
          "What are the primary design considerations for training large language models like PaLM?",
      },
      {
        answer:
          "Parameter allocation between Multi-Head Attention (MHA) and Multi-Layer Perceptron (MLP) blocks is a key design choice within the transformer architecture.",
        question:
          "What is an example of a design choice within the transformer architecture that affects its performance?",
      },
      {
        answer:
          "Relative positional encoding, gated linear units in MLP, and RMSNorm are some of the SOTA design choices that enhance the original transformer architecture.",
        question:
          "What are some of the state-of-the-art (SOTA) design choices used in Transformer++?",
      },
    ],
  },
  {
    category: "Mathematics of Attention",
    questions: [
      {
        answer:
          "Multi-Head Attention (MHA) involves multiple attention heads, each with its own set of weights, to capture different aspects of the input sequence.",
        question: "What is the concept behind Multi-Head Attention (MHA)?",
      },
      {
        answer:
          "The number of parameters in MHA depends on the number of heads (H), the dimension of input tokens (d), and the dimension used by each attention head (d_h).",
        question:
          "What factors influence the number of parameters in Multi-Head Attention (MHA)?",
      },
      {
        answer:
          "The Multi-Layer Perceptron (MLP) typically consists of an input layer, an output layer, and an activation function (e.g., ReLU or GeLU).",
        question: "What are the components of a Multi-Layer Perceptron (MLP)?",
      },
      {
        answer:
          "The computational cost of the attention layer is primarily determined by the need to compute pairwise similarities between tokens in the input sequence.",
        question:
          "What is the main factor contributing to the computational cost of the attention layer?",
      },
      {
        answer:
          "Linear attention, which removes the softmax nonlinearity, can significantly reduce the computational cost of the attention layer.",
        question:
          "How can the computational cost of the attention layer be reduced?",
      },
    ],
  },
  {
    category: "Design Choices for Transformer",
    questions: [
      {
        answer:
          "The attention layer typically has 2d^4 or 4d^4 parameters, while the MLP layer usually has 4d^4 parameters, where d is the dimension of input tokens.",
        question:
          "How do the number of parameters in the attention and MLP layers typically compare?",
      },
      {
        answer:
          "The number of parameters in the transformer architecture is independent of the sequence length (N), making it suitable for handling variable-length sequences.",
        question:
          "How does the sequence length (N) affect the number of parameters in the transformer architecture?",
      },
      {
        answer:
          "The attention layer requires O(N^2) computations due to the need to compute pairwise similarities between tokens in the input sequence.",
        question:
          "What is the computational complexity of the attention layer?",
      },
      {
        answer:
          "Improving parameter and compute efficiency are active research topics in transformer design, with efforts focused on finding better architectures and choices.",
        question:
          "What are some of the challenges and research directions in transformer design?",
      },
      {
        answer:
          "Recent research suggests that data-dependent sequence mixing is crucial, and it can be achieved through various attention variants, gating mechanisms, and state-space models.",
        question:
          "What are some alternative approaches to standard self-attention for sequence mixing?",
      },
    ],
  },
];
