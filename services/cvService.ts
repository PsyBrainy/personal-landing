import { CVData } from "@/types/cv";

const CV_DATA_URL = "https://raw.githubusercontent.com/PsyBrainy/data/main/landing-data.json";

export async function getCVData(): Promise<CVData> {
    const res = await fetch(CV_DATA_URL, {
        next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!res.ok) {
        console.error(`Error fetching CV data from ${CV_DATA_URL}: ${res.statusText}`);
        throw new Error("Failed to fetch CV data");
    }

    return res.json().then((data: CVData) => {
        console.log(data);
        return data;
    });
}
