document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function(){
	var thumbnailElement = document.getElementById("smart_thumbnail");
	//thumbnailElement.className = "small";
	//thumbnailElement.className = "";
	if (thumbnailElement.className == ""){
	    var thumbnailElement = document.getElementById("smart_thumbnail");
	    thumbnailElement.className = "small";
	} else {
	    var thumbnailElement = document.getElementById("smart_thumbnail");
	    thumbnailElement.className = "";
        };
    });
});
