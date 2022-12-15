$(window).on('load', function () {

    $("#btn").on('click', function () {
        console.log("hiiiiiiii")
    })
    console.log("Sas")

    const obj = {
        x: 1,
        // f:()=>{
        //     return console.log(this.x)
        // }
        f: () => {
            return console.log(this.x)
        }
    }
    // const jumps = { x: 5 }
    // obj.f();
    // obj.f.apply(jumps)
    // obj.f();
    // const hitJumps = obj.f.bind(jumps);
    // hitJumps()
    // let y=obj.f;
    // y.bind(jumps)


    function collapse(id) {
        $(`#${id}`).on('shown.bs.collapse', function () {
            $(`#${id}-header`).attr('class', 'collapseHeader-open w-100');
            $(`#${id}-header`).find("img").attr('src', './assets/Image/+white.svg');
        });

        $(`#${id}`).on('hidden.bs.collapse', function () {
            $(`#${id}-header`).attr('class', 'collapseHeader-close w-100');
            $(`#${id}-header`).find("img").attr('src', './assets/Image/+.svg');
        });
    }
    collapse('collapse1')
    collapse('collapse2')
    collapse('collapse3')
    collapse('collapse4')
    collapse('collapse5')
    collapse('collapse6')
    collapse('collapse7')
    collapse('collapse8')
    collapse('collapse9')
    collapse('collapse10')
    collapse('collapse11')

    function openNav() {
        console.log("opne NAme")
        document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    //   openNav();
    //   closeNav();

    $(".SlideUp").mouseenter(
        $(this).addClass(" animate__slideInUp ").removeClass(" animate__slideOutDown ")
    );

    $('.fold1--exceptHeader--play').on("click",function () {
        $("#foldChange").addClass("d-none")
        $("#carouselExampleControls").removeClass("d-none")
        $(".fackeImg").addClass("d-none")
        $(".realImg").removeClass("d-none")
       

    })

    // $('.SlideUp').mouseenter(function () {
      
    // }).mouseleave(function () {
    //     // if (!$('#DIVB').hasClass('active')) {
    //     //     $('#DIVB').hide();
    //     // }
    //     $(this).removeClass("animate__slideInUp").addClass("animate__slideOutDown");

    // });
    //   $( ".SlideUp" ).off( "mouseenter mouseleave" );



    // $('#collapse1').on('shown.bs.collapse', function () {
    //     console.log("Opened");
    //     $('#collapse1-header').attr('class', 'collapseHeader-open w-100');
    //  });

    //  $('#collapse1').on('hidden.bs.collapse', function () {
    //     $('#collapse1-header').attr('class', 'collapseHeader-close w-100');
    //  });
    console.log($(".9").length)

    $(".strook").hide();
    

    var target = $("#girl").offset().top-$(window).height();
    console.log(target)
    $(document).scroll(function() {
        var delay = 2000;
        if ($(window).scrollTop() >= target) {
            $(".1").show(delay,function(){
                $(".2").show(delay,function(){
                      $(".3").show(delay,function(){
                        $(".4").show(delay,function(){
                            $(".5").show(delay,function(){
                                $(".6").show(delay,function(){
                                    $(".7").show(delay,function(){
                                        $(".8").show(delay,function(){
                                            $(".9").show(delay,function(){
                                                $(".10").show(delay,function(){
                                                    fadeInAll()
                                                })
                                                
                                            })
                                          
                                        })
                                    })
                                })
                            })
                        })
                       
                     })
                })
         })
        }
    });


   




});

