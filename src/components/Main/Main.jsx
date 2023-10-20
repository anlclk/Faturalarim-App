
export default function Main() {
    return(
        <main className="s:w-mobilecontainer md:w-tablet mx-auto">
            <div className="flex justify-between mb-8">
                <div>
                    <h1 className="text-2xl leading-5 font-bold">Invoices</h1>
                    <span className="text-span leading-3.5 text-spancolor">7 invoices</span>
                </div>
                <div className="flex items-center gap-3.5">
                    <h2 className="text-s font-bold">Filter</h2>
                    <button className="w-21 h-11 flex items-center gap-2 bg-logobg rounded-3xl pl-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <circle cx="16" cy="16" r="16" fill="white"/>
                            <path d="M17.3131 21.0234V17.3136H21.0229V14.7333H17.3131V11.0234H14.7328V14.7333H11.0229V17.3136H14.7328V21.0234H17.3131Z" fill="#7C5DFA"/>
                        </svg>
                        <h4 className="text-s font-bold text-[#fff]">New</h4>
                    </button>
                </div>
            </div>
            <div className="grid gap-4 ">
                <div className="px-6 py-7 bg-[#fff] rounded-lg box-card md:flex md:gap-21 md:items-center md:justify-between">
                    <div className="flex justify-between">
                        <div className="md:flex md:gap-7">
                            <h1 className="mb-6 font-bold text-s leading-3.5 md:mb-0"><span className="text-[#7E88C3]">#</span>RT3080</h1>
                            <span className="text-span leading-3.5 text-spancolor md:mr-13">Due 19 Aug 2021</span>
                        </div>
                        <h3 className="text-span leading-3.5 text-spancolor">Jensen Huang</h3>
                    </div>
                    <div className="flex justify-between md:gap-10">
                        <h1 className="pt-4 text-s font-bold md:py-0 md:flex md:items-center">£ 1,800.90</h1>
                        <div className="w-[6.5rem] h-10 bg-[#33d6a02f] rounded-md flex items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                <circle cx="4" cy="4" r="4" fill="#33D69F"/>
                            </svg>
                            <h3 className="text-s font-bold text-paid">Paid</h3>
                        </div>
                    </div>
                </div>
                <div className="px-6 py-7 bg-[#fff] rounded-lg box-card md:flex md:gap-21 md:items-center md:justify-between">
                    <div className="flex justify-between">
                        <div className="md:flex md:gap-7">
                            <h1 className="mb-6 font-bold text-s leading-3.5 md:mb-0"><span className="text-[#7E88C3]">#</span>RT3080</h1>
                            <span className="text-span leading-3.5 text-spancolor md:mr-13">Due 19 Aug 2021</span>
                        </div>
                        <h3 className="text-span leading-3.5 text-spancolor">Jensen Huang</h3>
                    </div>
                    <div className="flex justify-between md:gap-10">
                        <h1 className="pt-4 text-s font-bold md:py-0 md:flex md:items-center">£ 1,800.90</h1>
                        <div className="w-[6.5rem] h-10 bg-[#33d6a02f] rounded-md flex items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                <circle cx="4" cy="4" r="4" fill="#33D69F"/>
                            </svg>
                            <h3 className="text-s font-bold text-paid">Paid</h3>
                        </div>
                    </div>
                </div>
                <div className="px-6 py-7 bg-[#fff] rounded-lg box-card md:flex md:gap-21 md:items-center md:justify-between">
                    <div className="flex justify-between">
                        <div className="md:flex md:gap-7">
                            <h1 className="mb-6 font-bold text-s leading-3.5 md:mb-0"><span className="text-[#7E88C3]">#</span>RT3080</h1>
                            <span className="text-span leading-3.5 text-spancolor md:mr-13">Due 19 Aug 2021</span>
                        </div>
                        <h3 className="text-span leading-3.5 text-spancolor">Jensen Huang</h3>
                    </div>
                    <div className="flex justify-between md:gap-10">
                        <h1 className="pt-4 text-s font-bold md:py-0 md:flex md:items-center">£ 1,800.90</h1>
                        <div className="w-[6.5rem] h-10 bg-[#33d6a02f] rounded-md flex items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                <circle cx="4" cy="4" r="4" fill="#33D69F"/>
                            </svg>
                            <h3 className="text-s font-bold text-paid">Paid</h3>
                        </div>
                    </div>
                </div>
               
            </div>
        </main>
    );
}