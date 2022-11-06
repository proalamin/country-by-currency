import {countryByCurrency} from "./country-by-currency.js";

countryByCurrency.map((item,i)=>{
    let details=`Country name:${item.country} 
and Currency Code is ${item.currency_code}
    `;

    console.log(details);
})