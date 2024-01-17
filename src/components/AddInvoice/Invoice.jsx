

export default function Invoice({ appendData }) {
    
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const billDate = formData.get('billDate');
        const formattedBillDate = new Intl.DateTimeFormat('tr-TR').format(new Date(billDate));
        // Form verilerini güncellemek
        formData.set('billDate', formattedBillDate);
        appendData(Object.fromEntries(formData));
        e.target.reset();
    }

    return(
        <div className="h-full w-invoice absolute left-[60px] z-99 top-0 rounded-r-[1.25rem] bg-[#fff] px-14 pt-15 shadow-logobg shadow-2xl dark:bg-[#141625]">
            <h1 className="text-3xl mb-9 dark:text-[#fff]">Yeni Fatura</h1>
            <form method="post" autoComplete="off" onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
                <select name="bill" required id="bill" className="dark:bg-[#1E2139] px-1 py-1 dark:text-[#fff] border-solid border border-[#DFE3FA] outline-none dark:border-[#252945]">
                    <option disabled value="">Fatura Seç</option>
                    <option>Elektrik</option>
                    <option>Doğalgaz</option>
                    <option>Su</option>
                    <option>Cep Telefonu</option>
                    <option>İnternet</option>
                </select>
                <label className="dark:text-white">Fatura tarihi giriniz :</label>
                <input type="date" id="billDate" name="billDate" required className="h-12 w-[9.5rem] rounded-sm px-1 border-[#DFE3FA] border border-solid outline-none dark:bg-[#1E2139] dark:text-[#fff] dark:border-[#252945]"/>
                <label className="dark:text-white">Fatura ödeme aracı :</label>
                <input type="text" id="paymentMethod" name="paymentMethod" required className="h-12 w-[9.5rem] rounded-sm px-1 border-[#DFE3FA] border border-solid outline-none dark:bg-[#1E2139] dark:text-[#fff] dark:border-[#252945]" />
                <label className="dark:text-white">Fatura bedeli giriniz :</label>
                <input type="number" name="amount" id="amount" required inputMode="numeric" className="h-12 w-[9.5rem] px-1 rounded-sm border-[#DFE3FA] border border-solid outline-none dark:bg-[#1E2139] dark:text-[#fff] dark:border-[#252945]" />   
                <label className="dark:text-white">Fatura durumu :</label>
                <select name="billStatus" id="billStatus" className="dark:bg-[#1E2139] px-1 py-1 dark:text-[#fff] border-solid border border-[#DFE3FA] outline-none dark:border-[#252945]">
                    <option disabled value="">Fatura durumunu seç</option>
                    <option>Ödendi</option>
                    <option>Ödenmedi</option>
                    <option>Taslak</option>
                </select> 
                <button className="bg-logobg text-white p-3 w-[138px] h-[48px] rounded-3xl">Kaydet ve Ekle</button>
            </form>
        </div>
    );
}