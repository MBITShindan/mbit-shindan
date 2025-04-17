import Pasuteru from "../assets/images/Pasuteru.png";
import Image from "next/image";

export default function TitlePage() {
    return (
        <>
            <div
                style={{
                    position: "relative",
                    width: "100vw",
                    height: "100vh"
                }}
            >
                <Image src={Pasuteru} alt="TitleBackground" fill />
            </div>
        </> 
    );
}
