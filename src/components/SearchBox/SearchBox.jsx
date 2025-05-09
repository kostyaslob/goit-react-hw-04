import css from "./SearchBox.module.css";
import { FaSearch } from "react-icons/fa";

import { useId } from "react";

export default function SearchBox({ value, onSearch }) {
    const inputId = useId();

    return (
        <div>
            <label className={css.searchLabel} htmlFor={inputId}><FaSearch /> Find contacts by name</label>
            <input
                className={css.searchInput}
                id={inputId}
                type="text"
                value={value}
                onChange={(event) => onSearch(event.target.value)}
            />
        </div>
    )
}