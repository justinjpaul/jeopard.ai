import { Category } from "./types";

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
      alert("Error occurred: resubmit");
      handler && handler(true, null); // Call handler with error = true and null response
    }
    throw error;
  }
}

export async function fetchHelperWithFiles(
  url: string,
  files: File[],
  handler: (noError: boolean, jsonData: Category[]) => void
) {
  try {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("file", file);
    });

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      handler(true, []);
      throw new Error("Failed to send files to Flask");
    }

    const responseData = await response.json();
    handler(false, responseData);
    return responseData;
  } catch (error) {
    console.error("Error sending files to Flask:", error);
    alert("Error: retry uploading files");
    handler(true, []);
    throw error;
  }
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

export function generateSamplePlayers(num: number) {
  const players = [];
  for (let i = 1; i <= num; i++) {
    players.push(generateSamplePlayer(i));
  }
  return players;
}

export function generateSamplePlayer(num: number) {
  const player = {
    name: `Player ${num}`,
    score: 0,
    activeTurn: num === 1 ? true : false,
  };
  return player;
}
