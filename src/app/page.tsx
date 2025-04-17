import Pasuteru from "../assets/images/Pasuteru.png";
import { Box } from "@mui/material";
import Image from "next/image";

export default function TitlePage() {
    return (
        <>
            <Box>
                <Image src={Pasuteru} alt="TitleBackground" layout="fill" />
            </Box>
        </> 
    );
}
