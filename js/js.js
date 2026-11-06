function GetAPI() {

    var xhttp = new XMLHttpRequest;

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            var Result = this.responseText;
            var Trans = JSON.parse(Result);

            var  NEW = Trans.products;  
            var basket = "";



            for (var i = 0; i < NEW.length; i++) { 


             var sample = `<div class="md:col-4 text-center mb-12">
                    <img src="${NEW[i].images[0]}" class="w-100" style="height: 350px;  "> 
                    <h4>${NEW[i].title}</h4>
                    <h6>${NEW[i].brand}</h6>
                    <h6>${NEW[i].description}</h6>
                    <h6>${NEW[i].rating} of 5 </h6>
                    <h6>${NEW[i].price} $</h6>
                    <h6>${NEW[i].id} </h6>
                </div>`;

                 basket = basket+sample ; 

            }

            document.querySelector(".test").innerHTML = basket;

        }
    };

    xhttp.open("Get", "https://dummyjson.com/products", true);

    xhttp.send();

}

GetAPI();
