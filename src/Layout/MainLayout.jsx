import { useState } from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";


export default function MainLayout() {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);
    return(
        <>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <main className="pt-16">
                <Outlet context={[ isOpen, setIsOpen ]} />
            </main>
        </>
    );
}