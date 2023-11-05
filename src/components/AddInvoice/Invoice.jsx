

export default function Invoice() {
    return(
        <div className="h-full w-invoice absolute left-[60px] z-1 top-0 rounded-r-[1.25rem] bg-[#fff] px-14 pt-15 shadow-logobg shadow-2xl dark:bg-[#141625]">
            <h1 className="text-3xl mb-9 dark:text-[#fff]">New invoice</h1>
            <ul>
                <li className="mb-2">
                    <span className="text-span text-[#7E88C3] block mb-1">City</span>
                    <input className="h-12 w-[9.5rem] rounded-sm border-[#DFE3FA] border border-solid dark:bg-[#1E2139] dark:text-[#fff] dark:border-[#252945]" type="text" />
                </li>
                <li className="mb-2">
                    <span className="text-span text-[#7E88C3] block mb-1">Street Address</span>
                    <input className="h-12 outline-none rounded-sm border-[#DFE3FA] border border-solid dark:bg-[#1E2139] dark:text-[#fff] dark:border-[#252945]" type="text" />
                </li>
                <li className="mb-2">
                    <span className="text-span text-[#7E88C3] block mb-1">Post Code</span>
                    <input className="h-12 w-[9.5rem]rounded-sm pl-1 border-[#DFE3FA] border border-solid dark:bg-[#1E2139] dark:text-[#fff] dark:border-[#252945]" type="text" />
                </li>
                <li className="mb-2">
                    <span className="text-span text-[#7E88C3] block mb-1">Country</span>
                    <input className="h-12 w-[9.5rem] rounded-sm border-[#DFE3FA] border border-solid dark:bg-[#1E2139] dark:text-[#fff] dark:border-[#252945]" type="text" />
                </li>







            </ul>
            <div className="flex-col">
            </div>
            <div className="grid mb-6">
            </div>
            <div className="flex gap-6">
                <div className="grid gap-2">
                </div>
                <div className="grid gap-2">
                </div>
                <div className="grid gap-2">
                </div>
            </div>
        </div>
    );
}