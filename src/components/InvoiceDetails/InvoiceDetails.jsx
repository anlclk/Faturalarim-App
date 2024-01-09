import { useParams } from "react-router-dom";


export default function InvoiceDetails() {
    const { index } = useParams();
    return(
        <div>
            <h2>{ index }</h2>
            <h4>Anıl Çelik</h4>
        </div>

    );
}