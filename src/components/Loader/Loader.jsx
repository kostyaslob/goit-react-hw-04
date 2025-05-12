// import css from "./Loader.module.css";
import { ScaleLoader } from "react-spinners";

export default function Loader() {
    return (
        <ScaleLoader
            color="coral"
            barCount={10}
            width={6} />
    )
}