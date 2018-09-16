window.addEventListener('load',()=>{

 window.vue=new Vue({
   el:"#app",

   data:{

   isLoading:true,
   cart:[],
   saved:[]

 },
  methods:{
      removeCart(index){
      this.cart.splice(index,1); //cartta git o indextekini al ve 1 tane sil
  },
      saveForLater(index){
      const item= this.cart.splice(index,1);

      this.saved.push(item[0]);//ÇÜNKÜ  JS DE SPLİCE METODU ARRAY DÖNER BU YÜZDEN İTEM[0] DİYİP İTEM OBJECT'İNİ ALMAMIZ GEREKİYOR
    },
      removeSaveListener(index){
      this.saved.splice(index,1);
    },
      moveToCart(index){
         const item=this.saved.splice(index,1);
         this.cart.push(item[0]);
      }
  },

 //DATA ALMAK İÇİN BASLANGIC
 created(){
   setTimeout(()=>{//3 saniye bekettik
     fetch('./js/data.json')
     .then(res => {return res.json()})
     .then(res => {
        this.isLoading=false;
        this.cart=res.cart;
        this.saved=res.saved;
       })


  },1000)

 }
 //DATA ALMAK İÇİN BİTİŞ



 })
})
