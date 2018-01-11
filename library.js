(function(window){

    function myLibrary(){

        //execute code here

        var catalog = createRandomCatalog(100);

        return {
            //searchProductById: searchProductById,
            //searchProductsByPrice: searchProductsByPrice,
            //searchProductsByType: searchProductsByType,
            searchAllProducts: searchAllProducts
        }

        //function definitions go here

        function createRandomProduct(){
            let typeArray = ['Electronics', 'Book', 'Clothing', 'Food'];
            let price = (Math.random()*500).toFixed(2);
            let type = typeArray[Math.floor(Math.random()* 4)];

            return {price:price, type:type};
        }

        function createRandomCatalog(num){
            let catalog = [];
            for (let i = 0; i < num; i++){
                let obj = createRandomProduct();
                catalog.push({id:i, price:obj.price, type:obj.type});
            }
            return catalog;
        }

        function searchAllProducts(){
          let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(catalog);
            },1000);
          }); 
          return promise;       
        }

        function searchProductById(id){
          let promise = new Promise((resolve, reject){
            let i = 0;
            setTimeout(function(){
              while (i < catalog.length){
                if (catalog[i].id == id){
                  resolve({id:id, price:catalog[i].price, type:catalog[i].type});
                }
                i++;
              }
              reject("Invalid ID: " + id);
            },1000);
          });
          return promise;
        }


}


    if(typeof(window.api) === 'undefined'){
        window.api = myLibrary();
    }

})(window); 