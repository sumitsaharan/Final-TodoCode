$(document).ready(function()

{

    $(".span5").keypress(function(event)

    {
        if (event.which == 13) {
            event.preventDefault();
            var toAdd = $('.span5').val();


            if (toAdd != "") {

                $("#append1").append("<div class ='checkbox' class ='append1'><input type='checkbox' class ='chk1'><span class ='span1'>" + toAdd + "</span><br><hr></div>");

                $(".hide").show();
                $('#selectdeselect').prop('checked', false);
                $('.span5').val('');


            } 
            else {

                alert("please enter some text");

            }
        }
    });

    function validator(e) {

        if(e.target.type!=="checkbox"){
          return;
        }
        if (e.target.checked){
          
           e.target.parentNode.style.color = 'red';
            if ($('.chk1').filter(':not(:checked)').length == 0) {


                $('#selectdeselect').prop('checked', true);
            }
           

        } 

        else {
            e.target.parentNode.style.color = 'black';
            $('#selectdeselect').prop('checked', false);
           
        }

    }
    document.getElementById("append1").addEventListener("click", validator, false);


     $('#selectdeselect').click(function()

    {

        if (this.checked) {
            $('.chk1').each(function(e) {
                this.checked = true;
                
            });
            $('.checkbox').css('color', 'red');


        } else

        {

            $('.chk1').each(function()

            {
                this.checked = false;
                $('.checkbox').css('color', 'black');

            });

        }

    });

    $("#btn1").click(function()

    {
      if ($('.chk1').filter(':not(:checked)').length == 0) {

             $('#selectdeselect').prop('checked', true);
                
            }

            else{

                $('#selectdeselect').prop('checked', false);
            }

        $('.chk1').each(function()

        {
           
            $(this.parentNode).show();

       });
         



    });

    $("#btn2").click(function()

    {


        $('.chk1').each(function(){

            if (this.checked) {
                $(this.parentNode).show();

            } else {

                $(this.parentNode).hide();

            }

        });
        $('#selectdeselect').prop('checked', true);

    });


    $("#btn3").click(function()

    {
        $('.chk1').each(function() {
            if (this.checked) {

                $(this.parentNode).hide();

            } else {

                $(this.parentNode).show();

            }
$('#selectdeselect').prop('checked', false);

        });

    });


    $("div.hide").on("mouseenter", ".span1", function() {

        $(this).append("<input type='button' id='rembtn' value='Delete'</button>");

        var x = this.parentNode;

        $('#rembtn').click(function(e)

        {

            $(x).remove();

        });

    });

    $("div.hide").on("mouseleave", ".span1", function()

    {

        $("#rembtn").remove();

    });


    $('#RemCom').click(function(e)


    {

        $('.chk1').each(function()

        {

            if (this.checked)

            {


                $(this.parentNode).remove();
            }

        });
    });

    $("#append1").on('dblclick', '.span1', function(e) {

        var Noedit = $(this).prev('Input');
        var isChecked = $(this).prev('Input').prop('checked');

        if (isChecked)

        {
            alert("NoEdit");
        } else {

            var textbox = document.createElement("Input");
            textbox.setAttribute('class', 'Input1');
            textbox.setAttribute('type', 'text');
            textbox.setAttribute('value', $(this).text());


            $(this).replaceWith(textbox);

            $(".Input1").blur(function() {


                x1 = $(this).val();
                var x2 = document.createElement("span");
                x2.setAttribute('class', 'span1')
                var node = document.createTextNode(x1);
                x2.appendChild(node);

                x3 = textbox.value;



                if (x3 != "")

                {


                    $(this).replaceWith(x2);

                } else {

                    alert("please enter some text");
                }


            });
        }
    });
});