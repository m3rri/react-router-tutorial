import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams();
    
    let links = invoices.filter(invoice=>{
      let filter = searchParams.get("filter");
      if(!filter)
        return true;
      let name = invoice.name.toLowerCase();

      return name.indexOf(filter.toLowerCase())>0;
    }).map(invoice=>{
      return <NavLink
                style={({isActive})=>{
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "red" : "black"
                  }
                }}
                to={`./${invoice.number}`}
                key={invoice.number}
             >
                {invoice.name}
             </NavLink>
    },[]);
    
    let inputs = <input
      value = {searchParams.get("filter") || ""}
      onChange = {e=>{
        let filter = e.target.value;
        if(filter){
          setSearchParams({filter});
        }else{
          setSearchParams({});
        }
      }}
    />;

    return (
      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem"
          }}
        >
          {inputs}
          {links}
        </nav>
      <Outlet/>
      </div>
    );
  }
/**
 * Link -> NavLink
 */