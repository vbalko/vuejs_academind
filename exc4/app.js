new Vue({
  el: '#exercise',
  data: {
      effectClasses : {
        highlight: false,
        shrink: true
      },
    shrinked: false
  },
  computed: {
    class1: function() {
        return this.shrinked ? "shrink" : "highlight";
    }
  },
  methods: {
    startEffect: function() {
        let vm = this;
        setInterval(
            function() {
                vm.effectClasses.highlight = !vm.effectClasses.highlight;
                vm.effectClasses.shrink = !vm.effectClasses.shrink;
            }
        , 1500);
        
    }
  }
});
