$(document).ready(function(){
  $("form#favoriteForm").submit(function(event) {
    var favArray = [];
    favArray.push($("input#animal").val());
    favArray.push($("input#color").val());
    favArray.push($("input#food").val());
    favArray.push($("input#car").val());
    alert("Your favorite shit is: " + favArray);
    var newArray = [];
    newArray.push(favArray[0]);
    newArray.push(favArray[1]);
    newArray.push(favArray[2]);
    ("ul#listyList").prepend("<li>"+newArray[0]+"</li>");
    ("ul#listyList").prepend("<li>"+newArray[1]+"</li>");
    ("ul#listyList").prepend("<li>"+newArray[2]+"</li>");
    event.preventDefault();
  });
});
