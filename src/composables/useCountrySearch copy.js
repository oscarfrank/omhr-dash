//useComp.js

//import ref function to define reactive properties
import {ref, computed} from 'vue'
import countries from '../data/countries.json';

import { useConfigSettings } from '../stores/configSettings';


export default function useCountrySearch(){

    const config = useConfigSettings();

        let searchTerm = ref('');

        const checkCountry = (country)=> {
            searchTerm = ref(country);
            console.log(country);
        }

        const searchCountries = computed( () => {
            if (searchTerm.value === '') {
                return []
            }
            let matches = 0;
            // let inputSearch = document.getElementById("country");
            return countries.filter(country => {
                if (country.name.toLowerCase().includes(searchTerm.value.toLowerCase()) && matches < 10) {
                matches++;
                return country;
                }
            });
        });

        const selectCountry = (country) => {
            selectedCountry.value = country;
            searchTerm.value = selectedCountry.value;
            // document.getElementById("countryList").style.display = 'none';
            config.updateCountry(country);
                console.log(config.siteSettings.country);
        }
        let selectedCountry = ref('');


    // Return/Export All Properties
    return {
        checkCountry, countries, searchTerm, searchCountries, selectCountry, selectedCountry
    }
}