

export default function Invoice() {
    return(
        <div className="h-full w-invoice absolute left-[60px] z-1 top-0 rounded-r-[1.25rem] bg-[#fff] px-14 pb-9 pt-15 shadow-logobg shadow-2xl">
            <h1 className="text-2xl mb-11">New invoice</h1>
            <h5 className="text-s text-[#7C5DFA] mb-6">Bill from</h5>
            <div className="grid mb-6">
                <span className="text-span text-[#7E88C3] mb-2">Street Address</span>
                <input className="h-12 outline-none" type="text" />
            </div>
            <div className="flex gap-6">
                <div className="grid gap-2">
                    <span className="text-span text-[#7E88C3]">City</span>
                    <input className="h-12 w-[9.5rem]" type="text" />
                </div>
                <div className="grid gap-2">
                    <span className="text-span text-[#7E88C3]">Post Code</span>
                    <input className="h-12 w-[9.5rem]" type="text" />
                </div>
                <div className="grid gap-2">
                    <span className="text-span text-[#7E88C3]">Country</span>
                    <input className="h-12 w-[9.5rem]" type="text" />
                </div>
            </div>
            <div>
                <h5 className="text-s text-[#7C5DFA] mb-6">Bill To</h5>
                <div className="flex flex-col gap-2 mb-6">
                    <span className="text-span text-[#7E88C3]">Client's Name</span>
                    <input className="h-12 outline-none" type="text" />
                </div>
                <div className="flex flex-col gap-2 mb-6">
                    <span className="text-span text-[#7E88C3]">Client's Email</span>
                    <input className="h-12 outline-none" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-span text-[#7E88C3]">Street Address</span>
                    <input className="h-12 outline-none" type="text" />
                </div>
                <div className="flex gap-6">
                <div className="grid gap-2">
                    <span className="text-span text-[#7E88C3]">City</span>
                    <input className="h-12 w-[9.5rem]" type="text" />
                </div>
                <div className="grid gap-2">
                    <span className="text-span text-[#7E88C3]">Post Code</span>
                    <input className="h-12 w-[9.5rem]" type="text" />
                </div>
                <div className="grid gap-2">
                    <span className="text-span text-[#7E88C3]">Country</span>
                    <input className="h-12 w-[9.5rem]" type="text" />
                </div>
            </div>
            </div>
        </div>
    );
}