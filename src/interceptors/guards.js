//guards.js

//import ref function to define reactive properties
import {ref} from 'vue'

import { useConfigSettings } from '../stores/configSettings';
import { useUser } from '../stores/user'; // User Data
import { useBankData } from '../stores/bankData'; // Bank Data
import { useInvoiceData } from '../stores/invoiceData'; // Invoice Data

export default function guards(){

    const initialState = {
        isAuthenticated: false,
        isInitialized: false,
        isEmailTwoFA: false,
        user: null,
        ref: null,
        siteSettings: null,
        txn: null,
        txnData: null,
      };

    const config = useConfigSettings();
    const user = useUser();
    


    // Return/Export All Properties
    return {
        // reuseData,
        // reuseMethod,
        // config,
        // user,
        // bankData,
        // invoiceData,
    }
}