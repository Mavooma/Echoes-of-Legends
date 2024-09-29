import axios from "axios";

// Function to fetch data, fallback to mock data if API fails
export const getMusicLegends = async () => {
  try {
    const response = await axios.get("https://api.example.com/music-legends");
    return response.data;
  } catch (error) {
    console.error("API call failed, using mock data:", error);
    return [
      {
        id: 1,
        name: "Freddie Mercury",
        bio: "Lead vocalist of the rock band Queen.",
        image: "https://link-to-freddie-mercury-image.com",
      },
      {
        id: 2,
        name: "Jimi Hendrix",
        bio: "Iconic electric guitarist.",
        image: "https://link-to-jimi-hendrix-image.com",
      },
      {
        id: 3,
        name: "Aretha Franklin",
        bio: "The Queen of Soul.",
        image: "https://link-to-aretha-franklin-image.com",
      },
    ];
  }
};
