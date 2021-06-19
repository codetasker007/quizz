
    $(document).ready(function(){
      $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1              
            }
          },
          {
            breakpoint: 820,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }
          
        ]
      });






      



      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        // autoplay: true,        
        // autoplaySpeed: 2000
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true 



      
        // autoplay: true,        
        // autoplaySpeed: 2000,
        // arrows: false,
        // centerMode: true,  
        // variableWidth: true
        // responsive: [
        //   {
        //     breakpoint: 700,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 1,
        //       dots: false            
        //     }
        //   }
          
          
        // ]
      });


    });



    function increaseValue() {
      var value = parseInt(document.getElementById('number').value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      document.getElementById('number').value = value;
    }
    
    function decreaseValue() {
      var value = parseInt(document.getElementById('number').value, 10);
      value = isNaN(value) ? 0 : value;
      value < 1 ? value = 1 : '';
      value--;
      document.getElementById('number').value = value;
    }
  
    