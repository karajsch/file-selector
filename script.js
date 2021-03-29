//checking for file api support in browser
if (window.File && window.FileReader && window.FileList && window.Blob) {
  //success
} else {
  alert("Looks like File API's are not supported on your browser.");
}

function handleFileSelect(evt) {
  var files = evt.target.files; //make the list of files an object

  var output = [];
  for (var i = 0, f; (f = files[i]); i++) {
    output.push(
      "<li><strong>",
      escape(f.name),
      "</strong> (",
      f.type || "n/a",
      ") - ",
      f.size,
      " bytes, last modified: ",
      f.lastModifiedDate ? f.lastModifiedDate.toLocalDateString() : "n/a",
      "</li>"
    );
  }
  document.getElementById("list").innerHTML =
    "<ul>" + output.join("") + "</ul>";
}

document
  .getElementById("files")
  .addEventListener("change", handleFileSelect, false);
