//useComp.js

//import ref function to define reactive properties
import {ref, computed} from 'vue'
import countries from '../data/countries.json';

import { useConfigSettings } from '../stores/configSettings';


export default function useCountrySearch(){

    const config = useConfigSettings();

        let showAutoCountry = ref(false);

        const doSearchCountry = () => {
            console.log(showAutoCountry.value);
            showAutoCountry.value = true;

        }

        let searchTerm = ref('nig');

        const searchMMM = (x) => {
            return x;
        }


        const searchResult = computed( ()=> {

            let matches = 0;
            let cleanedList = countries.filter(country => {
                if (country.name.toLowerCase().includes(searchTerm.value.toLowerCase()) && matches < 10) {
                matches++;
                return country;
            }
        });
            
            return cleanedList;
        });

        const selectCountry = (country) => {
            selectedCountry.value = country;
            searchTerm.value = selectedCountry.value;
            config.updateCountry(country);
                console.log(config.siteSettings.country);
        }
        let selectedCountry = ref('');


    // Return/Export All Properties
    return {
        countries, showAutoCountry, doSearchCountry, searchResult, searchMMM, selectCountry, selectedCountry
    }
}