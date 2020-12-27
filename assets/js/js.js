
jQuery(function ($) {

    $(document).ready(function () {

        //////////////////select2//////////////////////
        function matchStart(term, text) {
            if (text.toUpperCase().indexOf(term.toUpperCase()) == 0) {
                return true;
            }

            return false;
        }

        $.fn.select2.amd.require(['select2/compat/matcher'], function (oldMatcher) {
            $("select").select2({
                matcher: oldMatcher(matchStart),
                dropdownAutoWidth: true,
                dir: "rtl",
                language: "fa"
            })
            $('#multiple').select2({
                // matcher: oldMatcher(matchStart),
                maximumSelectionLength: 3,
                dir: "rtl",
                // placeholder: 'داروی خود را وارد کنید'
            });
        });
        //////////////////select2//////////////////////

        var style = "";
        var scales = {
            0: 1.3,
            1: 1.1,
            2: .9,
            3: .7,
            4: .6,
            5: .7,
            6: .9,
            7: 1.1
        };
        var rotate = [];
        var deg = [];
        var ids = [];
        var init_rotate;
        var rotate_up = 0;
        var rotate_up2 = 0
        var rotate_down = '';
        var currdeg = 45;
        var string = '';
        var res = [];
        var pos = 0;
        var final_pos = 0;
        var scale = 0;
        var i = 1;
        var elem_pos;
        var w;
        var w_rotate;
        var elem = $("#1");
        var c = $(elem).attr("id")
        var matn = $(".1").html();
        var text = $("#text").html(matn);
        elem.addClass("active");
        var parent_id;
        var parent_element;
        var hide_style;
        var aghsat_element;
        var aghsat_id;
        var box__hide1;
        var box__hide2;

        var option__hide1;
        var option__hide2;

        var bime_hide_top;
        var bime_hide_bottom;








// bagheri slider





        // var result_hide = document.getElementsByClasssName('tabs__result-hidee');

        // result_hide.style.opacity = '0';

        option__hide1 = $(".card__select-container").first();
        option__hide2 = $(".card__select-container").last();
        option__hide1.css("display", "none ");

        box__hide1 = $(".card__items ").children().first();
        box__hide2 = $(".card__items ").children().last();
        box__hide2.css("display", "none ");



        bime_hide_top = $("#maincontent__middle-hidetop");
        bime_hide_top.css("display", "none ");

        bime_hide_bottom = $("#maincontent__middle-hidebottom");
        bime_hide_bottom.css("display", "none ");

        $("#maincontent__middle-closetop ").click(function (e) {
            if (bime_hide_top.css("display") == "block") {
                bime_hide_top.css("display", "none ");
            }else{
                bime_hide_top.css("display", "block ");
            }

        });
        $("#maincontent__middle-closebottom ").click(function (e) {
            if (bime_hide_bottom.css("display") == "block") {
                bime_hide_bottom.css("display", "none ");
            }else{
                bime_hide_bottom.css("display", "block ");
            }

        });
        $("#next_level ").click(function (e) {

            option__hide1.css("display", "block ");
            option__hide2.css("display", "none ");

            box__hide2.css("display", "block ");
            box__hide1.css("display", "none ");

        });


        $("#prev_level ").click(function (e) {

            option__hide2.css("display", "block ");
            option__hide1.css("display", "none ");


            box__hide1.css("display", "block ");
            box__hide2.css("display", "none ");
        });


        $(".tabs__result-hidee").each(function (index, element) {
            $(this).attr('style', 'display: none');


        });
        $(".tabs__result-aghsat").each(function (index, element) {
            $(this).attr('style', 'display: none');


        });
        $(".tabs-aghsat ").click(function (e) {
            aghsat_element = $(this).parent().parent().parent().parent();
            aghsat_id = aghsat_element.attr('id');
            // console.log(aghsat_element);
            // parent_element.find(".tabs__result-hidee").css("display", "block");
            if (aghsat_element.find(".tabs__result-aghsat").css("display") == "block") {
                aghsat_element.find(".tabs__result-aghsat").css("display", "none");

            } else {
                aghsat_element.find(".tabs__result-aghsat").css("display", "block");

            }
            var moree= $(this).next().html();
            moree=aghsat_element.find('.tabs__more');
            // console.log(moree.html());
            if(moree.html()=='اطلاعات بیشتر'){
                moree.html('بستن');
              }else{
                moree.html('اطلاعات بیشتر');
              }
        });
        $(".tabs__more").click(function (e) {
            parent_element = $(this).parent();
            parent_id = parent_element.attr('id');
            // console.log(parent_result);
            // parent_element.find(".tabs__result-hidee").css("display", "block");

            // console.log($(this).html());
            if (parent_element.find(".tabs__result-hidee").css("display") == "block") {
                parent_element.find(".tabs__result-hidee").css("display", "none");
                aghsat_element.find(".tabs__result-aghsat").css("display", "none");

            } else {
                parent_element.find(".tabs__result-hidee").css("display", "block");

            }

            if($(this).html()=='اطلاعات بیشتر'){
                $(this).html('بستن');
              }else{
                $(this).html('اطلاعات بیشتر');
              }

        });




        $('#next').click(function (e) {
            //add class active and show corresponding text
            elem.removeClass("active");

            c++;

            if (c >= 9) {
                c = 1;
                elem.attr('data-pos', '');
                elem = $("#" + c);
                elem_pos = elem.attr("id");
                elem.addClass("active");
                matn = $("." + c).html();
                text = $("#text").html(matn);
                elem.attr('data-pos', '');
                elem.attr('data-pos', 1);
            } else {
                elem.attr('data-pos', '');
                elem = $("#" + c);
                elem_pos = elem.attr("id");
                elem.addClass("active");
                matn = $("." + c).html();
                text = $("#text").html(matn);
                elem.attr('data-pos', '');
                elem.attr('data-pos', 1);
            }
            //    put element pos in array from actived element
            elem_pos = Number(elem_pos);
            var j = elem_pos;
            for (j; j <= 8; j++) {
                ids.push(j);
            }
            j = 1;
            for (j; j < elem_pos; j++) {
                ids.push(j);
            }
            console.log(ids);

            for (j = 0; j <= 8; j++) {
                var elem_scale = $('.colleague__carousel-card#' + ids[j]);
                elem_scale.attr('data-scale', scales[j]);
            }



            ids = [];

            // for ()
            //     ids.push($(this).attr("data-pos"));


            //add class active and show corresponding text 
            $(".colleague__carousel-card").each(function (index, element) {
                //  element == this;


                pos = $(this).attr("data-pos");
                pos = Number(pos);
                //  console.log(pos-2);




                rotate_up = $(this).css("transform");
                style = $(this).attr("style");

                res = style.split(" ");
                rotate = res[1].split("(");

                deg = rotate[1].split("deg");

                init_rotate = deg[0];
                init_rotate = Number(init_rotate);
                rotate_up = init_rotate - 45;
                rotate_down = '-' + rotate_up;
                // console.log(rotate_up);
                // console.log('rotate('+rotate_up+'deg) translate(25rem) rotate(-'+rotate_up+'deg)');
                $(this).attr('style', '');
                if (rotate_up >= 0) {
                    $(this).attr('style', 'transform: rotate(' + rotate_up + 'deg) translate(40rem) rotate(-' + rotate_up + 'deg) rotateX(-65deg) translateZ(10rem) scale(' + $(this).attr("data-scale") + ');');

                } else {
                    rotate_up2 = Math.abs(rotate_up);
                    $(this).attr('style', 'transform: rotate(' + rotate_up + 'deg) translate(40rem) rotate(' + rotate_up2 + 'deg) rotateX(-65deg) translateZ(10rem) scale(' + $(this).attr("data-scale") + ');');

                }


            });

        });

        $('#prev').click(function (e) {

            //add class active and show corresponding text
            elem.removeClass("active");
            c--;
            if (c <= 0) {
                c = 8;
                elem = $("#" + c);
                elem_pos = elem.attr("id");
                elem.addClass("active");
                matn = $("." + c).html();
                text = $("#text").html(matn);
            } else {

                elem = $("#" + c);
                elem.addClass("active");
                elem_pos = elem.attr("id");
                // console.log(elem);
                // console.log(c);
                matn = $("." + c).html();
                text = $("#text").html(matn);


            }






            elem_pos = Number(elem_pos);
            var j = elem_pos;
            for (j; j <= 8; j++) {
                ids.push(j);
            }
            j = 1;
            for (j; j < elem_pos; j++) {
                ids.push(j);
            }
            console.log(ids);

            for (j = 0; j <= 8; j++) {
                var elem_scale = $('.colleague__carousel-card#' + ids[j]);
                elem_scale.attr('data-scale', scales[j]);
            }



            ids = [];
            //add class active and show corresponding text

            $(".colleague__carousel-card").each(function (index, element) {
                //  element == this;
                // console.log($(this).attr("id"));
                rotate_up = $(this).css("transform");
                style = $(this).attr("style");
                res = style.split(" ");
                rotate = res[1].split("(");

                deg = rotate[1].split("deg");

                init_rotate = deg[0];
                init_rotate = Number(init_rotate);
                rotate_up = init_rotate + 45;
                rotate_down = '-' + rotate_up;
                // console.log(rotate_up);
                // console.log(rotate_up);
                // console.log('rotate('+rotate_up+'deg) translate(25rem) rotate(-'+rotate_up+'deg)');
                var substring = '-';
                string = String(rotate_up);


                $(this).attr('style', '');
                if (rotate_up >= 0) {
                    $(this).attr('style', 'transform: rotate(' + rotate_up + 'deg) translate(40rem) rotate(-' + rotate_up + 'deg) rotateX(-65deg) translateZ(10rem) scale(' + $(this).attr("data-scale") + ');');

                } else {
                    rotate_up2 = Math.abs(rotate_up);
                    $(this).attr('style', 'transform: rotate(' + rotate_up + 'deg) translate(40rem) rotate(' + rotate_up2 + 'deg) rotateX(-65deg) translateZ(10rem) scale(' + $(this).attr("data-scale") + ');');

                }



            });

        });

       
        $('#navmobile_close').click(function (e) {
            console.log('close');
            $('#navmobile__hide').css("visibility", " hidden");
        });

        $('#boxes1').click(function (e) {
            $('.reminder .col-1-3:not(:first-child)').css("display", " block");
        });



        
        var orbit_width;
        var orbit_height;
        var orbit_top;
        // console.log($(window).width());
        w = $(window).width();
        console.log(w);
        if (w <= 900 && w>500) {
            $(".colleague__carousel-card").each(function (index, element) {

                style = $(this).attr("style");



                res = style.split(" ");
                rotate = res[1].split("(");

                deg = rotate[1].split("deg");

                init_rotate = deg[0];
                init_rotate = Number(init_rotate);
                //  console.log(init_rotate);
                rotate_up = init_rotate - 45;
                rotate_down = '-' + rotate_up;
                w_rotate = init_rotate - 90;
                if (w_rotate < 0) {
                    w_rotate = Math.abs(w_rotate);
                }
                $(this).attr('style', '');
                $(this).attr('style', 'transform: rotate(' + init_rotate + 'deg) translate(25rem) rotate(-' + w_rotate + 'deg) scale(' + $(this).attr("data-scale") + ');');
            });
        }else if(w<500){
            $(".orbitsize").each(function (index, element) {
                // console.log($(this).width());
                orbit_width=$(this).width();
                orbit_height=$(this).height();
                orbit_top=$(this).offset().top;
                console.log(orbit_top);
                $(this).css("width", orbit_width-40);
                $(this).css("height", orbit_height-40);
                // $(this).css("top", orbit_top+50);
                // console.log($(this).offset().top); 

            });
        }
    });
});


// bagheri slider


var i =0;
var j =0;
var k =0;
function leftState(){
    //برای چرخش لوگو ها به سمت چپ
    $(".orbit__circle--8").removeClass("orbit__circle--8").addClass("orbit__circle--1");
    $(".orbit__circle--7").removeClass("orbit__circle--7").addClass("orbit__circle--8");
    $(".orbit__circle--6").removeClass("orbit__circle--6").addClass("orbit__circle--7");
    $(".orbit__circle--5").removeClass("orbit__circle--5").addClass("orbit__circle--6");
    $(".orbit__circle--4").removeClass("orbit__circle--4").addClass("orbit__circle--5");
    $(".orbit__circle--3").removeClass("orbit__circle--3").addClass("orbit__circle--4");
    $(".orbit__circle--2").removeClass("orbit__circle--2").addClass("orbit__circle--3");
    
    if((i%8) == 0){
        $(".orbit__circle--1").first().removeClass("orbit__circle--1").addClass("orbit__circle--2");
        i++;
    }else{            
        $(".orbit__circle--1").last().removeClass("orbit__circle--1").addClass("orbit__circle--2");
        i++;
    }
    //برای چرخش دایره های کوچیک به سمت چپ
    $(".orbit__circle-small--3").removeClass("orbit__circle-small--3").addClass("orbit__circle-small--1");
    $(".orbit__circle-small--2").removeClass("orbit__circle-small--2").addClass("orbit__circle-small--3");

    if((j%3) == 0){
        $(".orbit__circle-small--1").first().removeClass("orbit__circle-small--1").addClass("orbit__circle-small--2");
        j++;
    }else{            
        $(".orbit__circle-small--1").last().removeClass("orbit__circle-small--1").addClass("orbit__circle-small--2");
        j++;
    }
}
function rightState(){
    $(".orbit__circle--1").removeClass("orbit__circle--1").addClass("orbit__circle--8");
    $(".orbit__circle--2").removeClass("orbit__circle--2").addClass("orbit__circle--1");
    $(".orbit__circle--3").removeClass("orbit__circle--3").addClass("orbit__circle--2");
    $(".orbit__circle--4").removeClass("orbit__circle--4").addClass("orbit__circle--3");
    $(".orbit__circle--5").removeClass("orbit__circle--5").addClass("orbit__circle--4");
    $(".orbit__circle--6").removeClass("orbit__circle--6").addClass("orbit__circle--5");
    $(".orbit__circle--7").removeClass("orbit__circle--7").addClass("orbit__circle--6");
    if((i%8) == 0){
        $(".orbit__circle--8").last().removeClass("orbit__circle--8").addClass("orbit__circle--7");
        i--;
    }else{            
        $(".orbit__circle--8").first().removeClass("orbit__circle--8").addClass("orbit__circle--7");
        i--;
    }
    $(".orbit__circle-small--1").removeClass("orbit__circle-small--1").addClass("orbit__circle-small--3");
    $(".orbit__circle-small--2").removeClass("orbit__circle-small--2").addClass("orbit__circle-small--1");

    if((j%3) == 0){
        $(".orbit__circle-small--3").last().removeClass("orbit__circle-small--3").addClass("orbit__circle-small--2");
        j--;
    }else{            
        $(".orbit__circle-small--3").first().removeClass("orbit__circle-small--3").addClass("orbit__circle-small--2");
        j--;
    }
}