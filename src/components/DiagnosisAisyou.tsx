"use client";

import Image from "next/image";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

type Props = {
  name: string;
  rate: string;
  image: string;
  color: string;
  icon:boolean;
};

export default function DiagnosisAisyou({ name, rate, image, color,icon }: Props) {
  return (
    <div
      style={{
        backgroundColor: color,
        borderRadius: "0.75rem",
        padding: "0.75rem 1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        fontSize: "0.875rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        {icon ?(
            <MoreHorizIcon/>
        ):(
            <Image
              src={image}
              alt={`${name}の画像`}
              width={40}
              height={40}
              unoptimized
              style={{ borderRadius: "0.5rem" }}
            />
        )
        }

        <span>{name}</span>
      </div>
      <span style={{ fontWeight: "bold", color: "#3C4F69" }}>{rate}</span>
    </div>
  );
}