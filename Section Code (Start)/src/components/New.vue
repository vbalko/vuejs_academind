<template>
    <div>
        <button @click="counter++">Increase!</button>
        <h3>New Quote</h3>        
        <p>{{ counter }}</p>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                counter: 0
            }
        }
    }

</script>

<style>

</style>