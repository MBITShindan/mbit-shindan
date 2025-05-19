import { cookies } from "next/headers";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import DiagnosisBox from "../../components/DiagnosisBox";

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
        <AppRouterCacheProvider>
            <DiagnosisBox checkedObjects={checkedObjects}/>
        </AppRouterCacheProvider>
    );
}
