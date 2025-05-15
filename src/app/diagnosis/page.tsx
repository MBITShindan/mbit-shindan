import { cookies } from "next/headers";
import QuestionObjects from "@/components/QuestionObjects";
import DiagnosisProgress from "../../components/DiagnosisProgress";

export async function getItemsFromCookie(): Promise<string[]> {
    const cookieStore = await cookies();
    const raw = cookieStore.get("checkedObjects")?.value;

    try {
        const parsed = JSON.parse(raw || "[]");
        if (Array.isArray(parsed) && parsed.every(item => typeof item === "string")) {
            return parsed;
        }
    } catch {};

    return []
}

export default async function diagnosis() {
    const checkedObjects = await getItemsFromCookie();

    return (
        <div
            style={{
                width: "100vw",
                height: "100dvh",
                overflow: "hidden",
                position: "fixed",
                backgroundImage: "url('/home.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <DiagnosisProgress/>
            <QuestionObjects checkedObjects={checkedObjects}/>
        </div>
    );
}
