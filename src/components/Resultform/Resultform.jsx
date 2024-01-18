import { Link } from "react-router-dom";

function ResultFormItem({ index, bill, billDate, paymentMethod, amount, billStatus }) {
    const formattedAmount = Number(amount).toLocaleString("tr-TR", { style: "currency", currency: "TRY" });

    return(
        <>
            <Link to={`/faturalarim/${index}`} className="px-6 py-7 bg-[#fff] phone:w-[327px] tablet:w-[672px] desktop:w-[730px] mx-auto rounded-lg mb-4 box-card md:flex md:gap-21 md:items-center md:justify-between dark:bg-[#1E2139]">
                <div className="flex justify-between">
                    <div className="md:flex md:gap-7 w-[220px]">
                        <h1 className="mb-6 font-bold text-s leading-3.5 md:mb-0 dark:text-[#fff] w-[50%]">{bill}</h1>
                        <span className="text-span leading-3.5 text-spancolor md:mr-10 w-[50%]">{billDate}</span>
                    </div>
                    <h3 className="text-span leading-3.5 text-spancolor dark:text-[#fff]">{paymentMethod}</h3>
                </div> 
                <div className="flex justify-between md:gap-10">
                    <h1 className="pt-4 text-s font-bold md:py-0 md:flex md:items-center dark:text-[#fff]">{formattedAmount}</h1>
                        {billStatus === 'Ödendi' && (
                            <div className="w-[6.5rem] h-10 bg-[#33d6a02f] rounded-md flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <circle cx="4" cy="4" r="4" fill="#33D69F"/>
                                </svg>
                                <h3 className="text-s font-bold text-paid">{billStatus}</h3>
                            </div>             
                        )}
                        {billStatus === 'Ödenmedi' && (
                            <div className="w-[6.5rem] h-10 bg-pending/qpending rounded-md flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <circle cx="4" cy="4" r="4" fill="#FF8F00"/>
                                </svg>
                                <h3 className="text-s font-bold text-pending">{billStatus}</h3>
                            </div>             
                        )}
                        {billStatus === 'Taslak' && (
                            <div className="w-[6.5rem] h-10 bg-draft/qpending rounded-md flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <circle cx="4" cy="4" r="4" fill="#373B53"/>
                                </svg>
                                <h3 className="text-s font-bold text-draft">{billStatus}</h3>
                            </div>             
                        )}
            
                </div>
            </Link>
        </>
    );
}

export default function ResultForm({ data }) {
    return(
            data.map((x, i) => <ResultFormItem
                key={i}
                index={i}
                bill={x.bill}
                billDate={x.billDate}
                paymentMethod={x.paymentMethod}
                amount={x.amount} 
                billStatus={x.billStatus}
            />)
    );
}


// 