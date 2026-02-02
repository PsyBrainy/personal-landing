import axios from "axios";
import { CVData } from "@/types/cv";

const CV_DATA_URL = "https://raw.githubusercontent.com/PsyBrainy/data/main/landing/landing-data.json";

export async function getCVData(): Promise<CVData> {
    try {
        const response = await axios.get<CVData>(CV_DATA_URL, {
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        });

        console.log("Fetched CV Data:", response.data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`Error fetching CV data from ${CV_DATA_URL}:`, error.message);
        } else {
            console.error("Unknown error fetching CV data:", error);
        }
        throw new Error("Failed to fetch CV data");
    }
}
