import { Link, useParams } from "react-router-dom";


export default function InvoiceDetails() {
    const { index } = useParams();
    return(
        <div className="mb-8 phone:w-[327px] tablet:w-[672px] desktop:w-[730px] mx-auto">
            <Link to="/" className="flex items-center gap-[23px] mb-[31px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none">
                    <path d="M4.3418 0.885742L0.113895 5.11364L4.3418 9.34155" stroke="#7C5DFA" stroke-width="2"/>
                </svg>
                <h3 className="pb-[3px] text-[#0C0E16] text-[15px] font-bold">Geri dön</h3>
            </Link>
            <div className="flex items-center w-[730px] h-[88px] px-8 bg-white rounded-lg shadow-4xl gap-[156px] mb-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-[#858BB2] text-[13px]">Durumu</h3>
                    <div className="h-10 rounded-md bg-pending/qpending flex items-center gap-2 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <circle cx="4" cy="4" r="4" fill="#FF8F00"/>
                        </svg>
                        <h4 className="text-pending">Ödeniyor</h4>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button className="h-10 rounded-xl bg-edit text-textedit font-bold px-4">Düzenle</button>
                    <button className="w-[89px] h-12 rounded-xl bg-delete text-white">Sil</button>
                    <button className="w-[131px] h-12 rounded-xl bg-logobg text-[#fff]">İşaret Ödendi</button>
                </div>
            </div>
            <div className="w-[730px] px-12 py-[50px] bg-white rounded-lg shadow-4xl">
                <h2 className="mb-12">#Elektrik</h2>
                <div className="flex justify-between mb-11">
                    <div>
                        <h3 className="text-textedit text-[13px]">Fatura Tarihi</h3>
                        <span className="text-date text-s font-bold">11.03.2024</span>
                    </div>
                    <div>
                        <h3 className="text-textedit text-[13px]">Ödenme Tarihi</h3>
                        <span className="text-date text-s font-bold">11.03.2024</span>
                    </div>
                </div>
                <div className="bg-header w-[634px] h-[80px] flex items-center justify-between px-8 rounded-b-lg">
                    <h4 className="text-white">Ödeme Tutarı</h4>
                    <h3 className="text-white">588 TL</h3>

                </div>
            </div>
        </div>

    );
}