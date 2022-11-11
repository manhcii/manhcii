var vm = new Vue({
  el:"#app",
  data:{
  	title:"mânhahaha"
  },
  methods: {
  	say:function(text){
  		return "hi -"+ text;
  	}
  }
});
console.log(vm);