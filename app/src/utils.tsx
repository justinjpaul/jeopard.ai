export const formatDate = (datetime: string) => {
  const date = new Date(datetime);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);

  return formattedDate;
};

export async function fetchHelper<T>(
  url: string,
  method = "GET",
  headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  body?: T,
  handler?: (error: boolean, response: any) => void
) {
  console.log(body);
  try {
    const response = await fetch(url, {
      credentials: "include",
      mode: "cors",
      method: method,
      headers: headers,
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    handler && handler(false, responseData); // Call handler with error = false and JSON response
    return responseData;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    if (error instanceof Error) {
      console.error("Fetch error:", error.message);
      handler && handler(true, null); // Call handler with error = true and null response
    }
    throw error;
  }
}

interface Question {
  question: string;
  answer: string;
  accessed?: boolean;
}

interface Category {
  category: string;
  questions: Question[];
}

export function addAccessedField(data: Category[]) {
  return data.map((category) => ({
    ...category,
    questions: category.questions.map((question) => ({
      ...question,
      accessed: false,
    })),
  }));
}
