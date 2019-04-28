let backWall = $("#backWall");
let modal = $("#modalBox");

$(".more").click(function(){
    backWall.show(0);
    modal.show(500);
  });

$(".close").click(function(){
  backWall.hide(0);
  modal.hide(0);
})
window.onclick = function(event) {
  if (event.target == document.getElementById("backWall")) {
    backWall.hide(0);
    modal.hide(0);
  }
};

  let more = document.querySelectorAll(".more");

  more.forEach( (x)=> x.addEventListener("click", function(){
    var a = x.getAttribute("id");
    console.log(a);
    let xmlRequest,obj;
    xmlRequest = new XMLHttpRequest();
    xmlRequest.onreadystatechange = function(){
      if(this.readyState === 4 && this.status === 200){
        obj = JSON.parse(this.responseText);
        $("#fullName").text(obj[a]["fullName"]);
        $("#id").text(obj[a]["id"]);
        $("#age").text(obj[a]["age"]);
        $("#from").text(obj[a]["from"]);
        $("#job").text(obj[a]["job"]);
        var imageSource = obj[a]["image"];
        console.log(imageSource);
        let profile_image = document.getElementById("img");
        profile_image.setAttribute("src",imageSource);
      }
    } 
    xmlRequest.open("GET","/javascript/info.json",true);
    xmlRequest.send();
  }))