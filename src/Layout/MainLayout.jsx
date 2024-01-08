import { useState } from "react";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";


export default function MainLayout() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <main className="pt-16">
                <Home isOpen={isOpen} />
            </main>
        </>
    );
}