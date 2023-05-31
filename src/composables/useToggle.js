//useToggle.js

//import ref function to define reactive properties
// import {ref} from 'vue'

export default function useToggle(){

    function toggleClick() {
        if(this.$refs.sidebarInstance.ej2Instances.isOpen)
        {
            this.$refs.sidebarInstance.hide();
            this.$refs.treeviewInstance.ej2Instances.collapseAll();
        }
        else {
            this.$refs.sidebarInstance.show();
            this.$refs.treeviewInstance.ej2Instances.expandAll();
        }  
    }
    function close() {
       this.$refs.treeviewInstance.ej2Instances.collapseAll();
    }


    // Return/Export All Properties
    return {
        toggleClick,
        close
    }
}