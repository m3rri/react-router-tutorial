import { useParams } from "react-router-dom";
import { getInvoice } from "../data";

export default function Invoice() {
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId));

    return (
        <main style={{ padding: "1rem" }}>
            <h2>total due : {invoice.amount}</h2>
            <p>
                {invoice.name} : {invoice.number}
            </p>
            <p>due date : {invoice.due}</p>
        </main>
    );
}