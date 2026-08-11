

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {
 constructor(imagem, texto, link){
    this.imagem = imagem;
    this.texto = texto;
    this.link = link; 

 }
    
      
    static Start(arr){
        if(arr){
            //verificar onde está iniciando e o tempo do carrossel  
            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel._arr = arr;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },3000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }




    static Next(){
        let inicializacao = carouselArr[Carousel._sequence];
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
        
        let carrosselDiv = document.getElementById("carousel");
        let titulo = document.getElementById("carousel-title");

        carrosselDiv.innerHTML = `<img src="${inicializacao.imagem} ">  `

        titulo.innerHTML = `<a href ="${inicializacao.link}">${inicializacao.texto}</a>`

        Carousel._sequence++;

        
        
    }
    static voltar(){
        Carousel._sequence -= 2;

        if(Carousel._sequence <0 ){
            Carousel._sequence += Carousel._size;
        }
        Carousel.Next();
    };

};

function passar() {
        Carousel.Next();
    };
function voltar() {
        Carousel.voltar();
    }

