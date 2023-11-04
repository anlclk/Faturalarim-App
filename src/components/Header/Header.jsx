import { useState } from 'react';
import account from '../Account/account.jpg';
import Invoice from '../AddInvoice/Invoice';


export default function Header() {

    const [IsOpen, setIsOpen] = useState(false);
    console.log(IsOpen);
    

    return(
       <>
        <header className="sticky top-0 h-17 w-full flex z-10 justify-between bg-header mb-9 md:w-17 md:h-full md:mb-0 md:flex-col md:fixed md:content-between md:rounded-r-xl">
            <div className="h-full flex gap-44 border-r-1 border-white-500 md:h-17">
            <button onClick={() => { setIsOpen(!IsOpen) }} className="h-full w-17 flex items-center justify-center bg-logobg rounded-r-xl">
                <svg width="24" height="24" viewBox="0 0 65 62" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9714 0.000188009L32.5 31.0574L48.0286 0.00018819C58.1393 5.50976 65 16.2324 65 28.5574C65 46.5066 50.4493 61.0574 32.5 61.0574C14.5507 61.0574 0 46.5066 0 28.5574C0 16.2324 6.86068 5.50976 16.9714 0.000188009Z" fill="#fff"/>
                </svg>
            </button>
            </div>
            <div className="h-full flex items-center justify-center md:w-full md:block md:h-[144px]">
                <div className="h-full flex items-center pr-6 border-r border-headerborder md:pr-0 md:h-17 md:flex md:items-center md:justify-center md:border-b md:border-headerborder">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M19.5016 11.3423C19.2971 11.2912 19.0927 11.3423 18.9137 11.4701C18.2492 12.0324 17.4824 12.4924 16.639 12.7991C15.8466 13.1059 14.9776 13.2592 14.0575 13.2592C11.9872 13.2592 10.0958 12.4158 8.74121 11.0611C7.38658 9.70649 6.54313 7.81512 6.54313 5.74483C6.54313 4.87582 6.69649 4.03237 6.95208 3.26559C7.23323 2.4477 7.64217 1.70649 8.17891 1.06751C8.40895 0.786362 8.35783 0.377416 8.07668 0.147384C7.89776 0.0195887 7.69329 -0.0315295 7.48882 0.0195887C5.31629 0.607448 3.42492 1.91096 2.07029 3.64898C0.766773 5.36144 0 7.48285 0 9.78317C0 12.5691 1.1246 15.0995 2.96486 16.9397C4.80511 18.78 7.3099 19.9046 10.1214 19.9046C12.4728 19.9046 14.6454 19.0867 16.3834 17.732C18.147 16.3519 19.4249 14.3838 19.9617 12.1346C20.0639 11.7768 19.8594 11.419 19.5016 11.3423Z" fill="#7E88C3"/>
                    </svg>
                </div>
                <div className='px-6 py-5 rounded-[2rem] md:h-17 md:px-0 md:py-0 md:flex md:items-center md:justify-center'>
                    <img src={account} className='w-8 h-8 rounded-[2rem]' alt="" />
                </div>
            </div>      
        </header>
        {IsOpen && <Invoice />}
        </>
    );
}