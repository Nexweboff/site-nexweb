"use client";
import dynamic from "next/dynamic";

/** Charge Three.js à la demande, côté client uniquement, pour ne pas alourdir le premier affichage. */
const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });
export default Scene3D;
