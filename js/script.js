$(document).ready(function () {

  $("#formOne").submit(function (event) {
    event.preventDefault();


    const gender = $("#gender").val();
    const name = $("#name").val();

    $(".user-name").text(name);

    if (gender === "2") {
      $("#female-form").fadeIn();
      $("#card2").fadeOut();

    } else {
      (gender === "1")
      $("#male-form").fadeIn();
      $("#card2").fadeOut();

    }
  })

  $("#yes").click(function () {
    $("#card2").fadeIn();
    $("#card").fadeOut();
  })
  $("#no").click(function () {
    $("#eligible").fadeIn();
    $("#card").fadeOut();
  })

  $("#female-female").submit(function (event) {
    event.preventDefault();

    const nationality = $("#nationality").val();
    const age = $("#age-range").val();
    const hobbies = $("#hobbies").val();
    const height = $("#height-range").val();

    if (nationality == "1") {
      if (age == "1") {
        if (hobbies == "1") {
          if (height == "1") {
            $("#riri").fadeIn();
            $("#female-female").fadeOut();
          }
          else if (height == "2"){
            $("#halle").fadeIn();
            $("#female-female").fadeOut();
          }
          else if (height == "3"){
            $("#kim").fadeIn();
            $("#female-female").fadeOut();
          }
        }
        if (hobbies == "2"){
          if(height == "1"){
            $("#riri").fadeIn();
            $("#female-female").fadeOut();
          }else if(height == 2){
            $("#halle").fadeIn();
            $("#female-female").fadeOut();
          }else if (height == "3"){
            $("#kim").fadeIn();
            $("#female-female").fadeOut();
          }
        }
        if (hobbies == "3"){
          if(height == "1"){
            $("#riri").fadeIn();
            $("#female-female").fadeOut();
          }else if(height == 2){
            $("#halle").fadeIn();
            $("#female-female").fadeOut();
          }else if (height == "3"){
            $("#kim").fadeIn();
            $("#female-female").fadeOut();
          }
        } 
      }
      if(age == "2"){
        if(hobbies == "1"){
          if(height== "1"){
            $("#riri").fadeIn();
            $("#female-female").fadeOut();
          }else if(height == 2){
            $("#halle").fadeIn();
            $("#female-female").fadeOut();
          }else if (height == "3"){
            $("#kim").fadeIn();
            $("#female-female").fadeOut();
          }
        }
        // if(hobbies == "2"){
        //   if(height== "1"){
        //     $("#riri").fadeIn();
        //     $("#female-female").fadeOut();
        //   }else if(height == 2){
        //     $("#halle").fadeIn();
        //     $("#female-female").fadeOut();
        //   }else if (height == "3"){
        //     $("#kim").fadeIn();
        //     $("#female-female").fadeOut();
        //   }
        
        if(hobbies == "3"){
          if(height== "1"){
            $("#riri").fadeIn();
            $("#female-female").fadeOut();
          }else if(height == 2){
            $("#halle").fadeIn();
            $("#female-female").fadeOut();
          }else if (height == "3"){
            $("#kim").fadeIn();
            $("#female-female").fadeOut();
          }
        }
        if(age =="3"){
          if(hobbies == "1"){
            if(height== "1"){
              $("#riri").fadeIn();
              $("#female-female").fadeOut();
            }else if(height == 2){
              $("#halle").fadeIn();
              $("#female-female").fadeOut();
            }else if (height == "3"){
              $("#kim").fadeIn();
              $("#female-female").fadeOut();
            }
          }
          if(hobbies == "2"){
            if(height== "1"){
              $("#riri").fadeIn();
              $("#female-female").fadeOut();
            }else if(height == 2){
              $("#halle").fadeIn();
              $("#female-female").fadeOut();
            }else if (height == "3"){
              $("#kim").fadeIn();
              $("#female-female").fadeOut();
            }
          }
          if(hobbies == "3"){
            if(height== "1"){
              $("#riri").fadeIn();
              $("#female-female").fadeOut();
            }else if(height == 2){
              $("#halle").fadeIn();
              $("#female-female").fadeOut();
            }else if (height == "3"){
              $("#kim").fadeIn();
              $("#female-female").fadeOut();
            }
          }
        }
      }
    }
    if (nationality == "2") {
      if (age == "1") {
        if (hobbies == "1") {
          if (height == "1") {
            $("#riri").fadeIn();
            $("#female-female").fadeOut();
          }
          else if (height == "2"){
            $("#halle").fadeIn();
            $("#female-female").fadeOut();
          }
          else if (height == "3"){
            $("#kim").fadeIn();
            $("#female-female").fadeOut();
          }
        }
        if (hobbies == "2"){
          if(height == "1"){
            $("#riri").fadeIn();
            $("#female-female").fadeOut();
          }else if(height == 2){
            $("#halle").fadeIn();
            $("#female-female").fadeOut();
          }else if (height == "3"){
            $("#kim").fadeIn();
            $("#female-female").fadeOut();
          }
        }
        if (hobbies == "3"){
          if(height == "1"){
            $("#riri").fadeIn();
            $("#female-female").fadeOut();
          }else if(height == 2){
            $("#halle").fadeIn();
            $("#female-female").fadeOut();
          }else if (height == "3"){
            $("#kim").fadeIn();
            $("#female-female").fadeOut();
          }
        } 
      }
      if(age == "2"){
        if(hobbies == "1"){
          if(height== "1"){
            $("#riri").fadeIn();
            $("#female-female").fadeOut();
          }else if(height == 2){
            $("#halle").fadeIn();
            $("#female-female").fadeOut();
          }else if (height == "3"){
            $("#kim").fadeIn();
            $("#female-female").fadeOut();
          }
        }
        if(hobbies == "2"){
          if(height== "1"){
            $("#riri").fadeIn();
            $("#female-female").fadeOut();
          }else if(height == 2){
            $("#halle").fadeIn();
            $("#female-female").fadeOut();
          }else if (height == "3"){
            $("#kim").fadeIn();
            $("#female-female").fadeOut();
          }
        }
        if(hobbies == "3"){
          if(height== "1"){
            $("#riri").fadeIn();
            $("#female-female").fadeOut();
          }else if(height == 2){
            $("#halle").fadeIn();
            $("#female-female").fadeOut();
          }else if (height == "3"){
            $("#kim").fadeIn();
            $("#female-female").fadeOut();
          }
        }
        if(age =="3"){
          if(hobbies == "1"){
            if(height== "1"){
              $("#riri").fadeIn();
              $("#female-female").fadeOut();
            }else if(height == 2){
              $("#halle").fadeIn();
              $("#female-female").fadeOut();
            }else if (height == "3"){
              $("#kim").fadeIn();
              $("#female-female").fadeOut();
            }
          }
          if(hobbies == "2"){
            if(height== "2"){
              $("#riri").fadeIn();
              $("#female-female").fadeOut();
            }else if(height == 2){
              $("#halle").fadeIn();
              $("#female-female").fadeOut();
            }else if (height == "3"){
              $("#kim").fadeIn();
              $("#female-female").fadeOut();
            }
          }
          if(hobbies == "3"){
            if(height== "3"){
              $("#riri").fadeIn();
              $("#female-female").fadeOut();
            }else if(height == 2){
              $("#halle").fadeIn();

              $("#female-female").fadeOut();
            }else if (height == "3"){
              $("#kim").fadeIn();
              $("#female-female").fadeOut();
            }
          }
        }
      }
    }
    if (nationality == "3") {
      if (age == "1") {
        if (hobbies == "1") {
          if (height == "1") {
            $("#riri").fadeIn();
            $("#female-female").fadeOut();
          }
          else if (height == "2"){
            $("#halle").fadeIn();
            $("#female-female").fadeOut();
          }
          else if (height == "3"){
            $("#kim").fadeIn();
            $("#female-female").fadeOut();
          }
        }
        if (hobbies == "2"){
          if(height == "1"){
            $("#riri").fadeIn();
            $("#female-female").fadeOut();
          }else if(height == 2){
            $("#halle").fadeIn();
            $("#female-female").fadeOut();
          }else if (height == "3"){
            $("#kim").fadeIn();
            $("#female-female").fadeOut();
          }
        }
        if (hobbies == "3"){
          if(height == "1"){
            $("#riri").fadeIn();
            $("#female-female").fadeOut();
          }else if(height == 2){
            $("#halle").fadeIn();
            $("#female-female").fadeOut();
          }else if (height == "3"){
            $("#kim").fadeIn();
            $("#female-female").fadeOut();
          }
        } 
      }
      if(age == "2"){
        if(hobbies == "1"){
          if(height== "1"){
            $("#riri").fadeIn();
            $("#female-female").fadeOut();
          }else if(height == 2){
            $("#halle").fadeIn();
            $("#female-female").fadeOut();
          }else if (height == "3"){
            $("#kim").fadeIn();
            $("#female-female").fadeOut();
          }
        }
        else if(hobbies == "2"){
          if(height== "1"){
            $("#riri").fadeIn();
            $("#female-female").fadeOut();
          }else if(height == 2){
            $("#halle").fadeIn();
            $("#female-female").fadeOut();
          }else if (height == "3"){
            $("#kim").fadeIn();
            $("#female-female").fadeOut();
          }
        }
        if(hobbies == "3"){
          if(height== "1"){
            $("#riri").fadeIn();
            $("#female-female").fadeOut();
          }else if(height == 2){
            $("#halle").fadeIn();
            $("#female-female").fadeOut();
          }else if (height == "3"){
            $("#kim").fadeIn();
            $("#female-female").fadeOut();
          }
        }
        if(age =="3"){
          if(hobbies == "1"){
            if(height== "1"){
              $("#riri").fadeIn();
              $("#female-female").fadeOut();
            }else if(height == 2){
              $("#halle").fadeIn();
              $("#female-female").fadeOut();
            }else if (height == "3"){
              $("#kim").fadeIn();
              $("#female-female").fadeOut();
            }
          }
          else if(hobbies == "2"){
            if(height== "1"){
              $("#riri").fadeIn();
              $("#female-female").fadeOut();
            }else if(height == 2){
              $("#halle").fadeIn();
              $("#female-female").fadeOut();
            }else if (height == "3"){
              $("#kim").fadeIn();
              $("#female-female").fadeOut();
            }
          }
            if(hobbies == "3"){
            if(height== "1"){
              $("#riri").fadeIn();
              $("#female-female").fadeOut();
            }else if(height == 2){
              $("#halle").fadeIn();
              $("#female-female").fadeOut();
            }else if (height == "3"){
              $("#kim").fadeIn();
              $("#female-female").fadeOut();
            }
          }
          if(age =="3"){
            if(hobbies == "3"){
              if(height== "3"){
                $("#riri").fadeIn();
                $("#female-female").fadeOut();
              }else if(height == 2){
                $("#halle").fadeIn();
                $("#female-female").fadeOut();
              }else if (height == "3"){
                $("#kim").fadeIn();
                $("#female-female").fadeOut();
              }
            }
          }  
        }
        
      }
    }
    






  })



})
