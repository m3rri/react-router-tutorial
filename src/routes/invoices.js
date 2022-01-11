import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
    let invoices = getInvoices();
    let links = invoices.map(invoice=>{
      return <Link
                style={{display: 'block', margin: '1rem 0'}}
                to={`./${invoice.number}`}
                key={invoice.number}
             >
                {invoice.name}
             </Link>
    },[]);

    return (
      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem"
          }}
        >
          {links}
        </nav>
      <Outlet/>
      </div>
    );
  }