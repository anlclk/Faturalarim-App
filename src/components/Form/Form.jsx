import { useState } from "react";

export default function Form() {
    const [isSubmitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        if(!e.target.checkValidity()) {
            return;
        }

        const formData = new FormData(e.target);
        console.log(Object.fromEntries(formData));

    }
    return(
        <form action="" method="post" autoComplete="off" onSubmit={handleSubmit} className="flex flex-col gap-8">
            <select name="productCode" id="productCode" className="dark:bg-[#1E2139] px-1 py-1 dark:text-[#fff] border-solid border border-[#DFE3FA] outline-none dark:border-[#252945]">
                <option value="" selected>Select Bill</option>
                <option value="">Electricity</option>
                <option value="">Gas</option>
                <option value="">Water</option>
                <option value="">Mobile phone</option>
                <option value="">Internet</option>
            </select>
            <input type="date" id="billDate" name="billDate" required className="h-12 w-[9.5rem] rounded-sm border-[#DFE3FA] border border-solid outline-none dark:bg-[#1E2139] dark:text-[#fff] dark:border-[#252945]"/>
            <input type="text" id="paymentMethod" name="paymentMethod" required className="h-12 w-[9.5rem] rounded-sm border-[#DFE3FA] border border-solid outline-none dark:bg-[#1E2139] dark:text-[#fff] dark:border-[#252945]" />
            <input type="number" name="amount" id="amount" required className="h-12 w-[9.5rem] rounded-sm border-[#DFE3FA] border border-solid outline-none dark:bg-[#1E2139] dark:text-[#fff] dark:border-[#252945]" />    
            <button className="bg-gray-400">Save</button>
        </form>

    );
}