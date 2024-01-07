import { useState } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";


export default function MainLayout() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <Main isOpen={isOpen} />
        </>
    );
}