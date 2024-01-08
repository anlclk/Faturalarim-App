import Invoice from "../AddInvoice/Invoice";
import { useEffect, useState } from "react";
import Resultform from "../Resultform/Resultform";
import { Popover } from '@headlessui/react'


export default function Home({ isOpen }) {
    const [data, setData] = useState([]);

    function appendData(newEntry) {
        const newData = [...data, newEntry]
        setData(newData);
        localStorage.data = JSON.stringify(newData);
    }
    useEffect(() => {
        if(localStorage.data) {
            setData(JSON.parse(localStorage.data));
        }

    }, []);

    return(
        <>
        {isOpen === true ? <Invoice appendData={appendData} /> : ''}
            <div className="flex justify-between mb-8 phone:w-[327px] tablet:w-[672px] desktop:w-[730px] mx-auto">
                <div>
                    <h1 className="text-2xl leading-5 font-bold dark:text-[#fff]">Faturalar</h1>
                    <span className="text-span leading-3.5 text-spancolor">? Faturalar</span>
                </div>
                <div className="flex items-center gap-3.5">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-2 justify-center px-1 dark: text-white">
                        Statüye Göre Filtrele
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                            <path d="M1 1L5.2279 5.2279L9.4558 1" stroke="#7C5DFA" strokeWidth="2"/>
                        </svg>
                        </Popover.Button>
                        <Popover.Panel className="absolute z-10 mr-3 mt-4 w-[192px] h-[110px] bg-white py-2 shadow-xl shadow-[#48549f33] dark:bg-[#252945] dark:text-white">
                            <div className="grid grid-cols-1">
                                <a className="pl-4 py-1 hover:bg-[#cdcdd0] dark:hover:bg-[#000]" href="/#">Ödendi</a>
                                <a className="pl-4 py-1 hover:bg-[#cdcdd0] dark:hover:bg-[#000] " href="/#">Ödenmedi</a>
                                <a className="pl-4 py-1 hover:bg-[#cdcdd0] dark:hover:bg-[#000] " href="/#">Taslak</a>
                            </div>
                        </Popover.Panel>
                    </Popover>
                    
                    <button className="w-21 h-11 flex items-center gap-2 bg-logobg rounded-3xl pl-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <circle cx="16" cy="16" r="16" fill="white"/>
                            <path d="M17.3131 21.0234V17.3136H21.0229V14.7333H17.3131V11.0234H14.7328V14.7333H11.0229V17.3136H14.7328V21.0234H17.3131Z" fill="#7C5DFA"/>
                        </svg>
                        <h4 className="text-s font-bold text-[#fff]">Yeni</h4>
                    </button>
                </div>
            </div>
            <Resultform data={data} />
        </>
    );
}
            