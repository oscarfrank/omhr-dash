//useComp.js

//import ref function to define reactive properties
import {ref} from 'vue'

import { useConfigSettings } from '../stores/configSettings';
import { useUser } from '../stores/user'; // User Data
import { useBankData } from '../stores/bankData'; // Bank Data
import { useInvoiceData } from '../stores/invoiceData'; // Invoice Data

export default function useComp(){

    const reuseData = ref ("Reusable data");

    const config = useConfigSettings();
    const user = useUser();
    const bankData = useBankData();
    const invoiceData = useInvoiceData();
    

    function reuseMethod() {
        console.log(reuseData.value);
        console.log('Hello from Reusable method!');
    }


    // Return/Export All Properties
    return {
        reuseData,
        reuseMethod,
        config,
        user,
        bankData,
        invoiceData,
    }
}