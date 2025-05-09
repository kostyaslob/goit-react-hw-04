import css from "./Contact.module.css"

import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";



export default function Contact({ data: { id, name, number }, onDelete}) {
    return (

            <div className={css.cont}>
                <div className={css.contactInfo} >
                    <p><FaUser /> {name}</p>
                    <p><FaPhoneAlt /> {number}</p>
                </div>
                <button className={css.contactBtn} onClick={() => onDelete(id)}>Delete</button>
            </div>
    );
}