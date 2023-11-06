import Form from "../Form/Form";

export default function Invoice() {
    return(
        <div className="h-full w-invoice absolute left-[60px] z-1 top-0 rounded-r-[1.25rem] bg-[#fff] px-14 pt-15 shadow-logobg shadow-2xl dark:bg-[#141625]">
            <h1 className="text-3xl mb-9 dark:text-[#fff]">New invoice</h1>
            <Form />
        </div>
    );
}