import Invoice from "../AddInvoice/Invoice";
import { useState } from "react";
import Resultform from "../Resultform/Resultform";

export default function Main({ isOpen }) {
    const [data, setData] = useState([]);

    function appendData(newEntry) {
        setData([...data, newEntry]);
    }

    return(
        <>
        {isOpen === true ? <Invoice appendData={appendData} /> : ''}

        <main className="s:w-mobilecontainer md:w-tablet mx-auto md:pt-[78px] pt-[36px] dark:bg-[#000] h-full">
            <div className="flex justify-between mb-8">
                <div>
                    <h1 className="text-2xl leading-5 font-bold dark:text-[#fff]">Faturalar</h1>
                    <span className="text-span leading-3.5 text-spancolor">? Faturalar</span>
                </div>
                <div className="flex items-center gap-3.5">
                    <h2 className="text-s font-bold dark:text-[#fff]">Filtrele</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M1 1L5.2279 5.2279L9.4558 1" stroke="#7C5DFA" strokeWidth="2"/>
                    </svg>
                    <button className="w-21 h-11 flex items-center gap-2 bg-logobg rounded-3xl pl-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <circle cx="16" cy="16" r="16" fill="white"/>
                            <path d="M17.3131 21.0234V17.3136H21.0229V14.7333H17.3131V11.0234H14.7328V14.7333H11.0229V17.3136H14.7328V21.0234H17.3131Z" fill="#7C5DFA"/>
                        </svg>
                        <h4 className="text-s font-bold text-[#fff]">Yeni</h4>
                    </button>
                </div>
            </div>
            <div className="">
                <Resultform data={data} />
            </div>
        </main>

        </>
    );
}
            