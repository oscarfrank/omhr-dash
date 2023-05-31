<template>
    <button :class="{ [color]: color.length }" :disabled="isLoading">
        <div v-if="isLoading" class="spinner-border spinner-border-sm"></div>
        <slot>Loading Button</slot>
    </button>    
</template>
<script>

export default {
    setup() {
        
    },
    props: ['color', 'isLoading'],
    data () {
        return{

        }
    },
    method: {

    },
    name: 'loadingButton',
}
</script>
