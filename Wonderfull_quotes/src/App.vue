<template>
    <div class="container">
        <div v-if="quotes.length >= maxQuotes" class="alert alert-danger" role="alert">>
            Please delete some quotes first!
        </div>
        <appHeader :quoteCount="quotes.length" :maxQuotes="maxQuotes"></appHeader>
        <appNewQuote @quoteAdded="newQuote"></appNewQuote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>`
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a quote to delete it!</div>
            </div>
        </div>
    </div>
</template>

<script>
    import NewQuote from './components/newQuote.vue';
    import QuoteGrid from './components/QuoteGrid.vue';
    import Header from './components/Header.vue';
    export default {
        data: function() {
            return {
                quotes: ['Quote to see something!'],
                maxQuotes: 10
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header
        },
        methods: {
            newQuote(quote) {
                if (this.quotes.length >= this.maxQuotes) {
                    // return alert('Please delete quotes first!');
                } else {
this.quotes.push(quote)
                }
                
            },
            deleteQuote(index) {
                this.quotes.splice(index,1);
            }
        }
    }
</script>

<style>
</style>
