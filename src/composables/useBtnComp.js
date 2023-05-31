//useBtnComp.js

//import ref function to define reactive properties
// import {ref} from 'vue'

export default function useBtnComp(){

    function close() {
       this.$refs.treeviewInstance.ej2Instances.collapseAll();
    }


    // Return/Export All Properties
    return {
        isLoading
    }
}