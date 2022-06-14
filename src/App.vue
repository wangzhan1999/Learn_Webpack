<template>
    <div>
        <Nav :str='hellow'></Nav>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Nav from './components/Nav.vue'

export default defineComponent({
    components:{Nav},
    setup(){
        let hellow = "Hellow"
        return{
            hellow
        }
    }
})
</script>


<style>
</style>