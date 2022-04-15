let menues = document.querySelectorAll("ul.menuelog"),
  containerIframe = document.getElementById("content");
var folderLocaction, fileNo;

for (let menue of menues) {
  let submenues = menue.children,
    folderName = menue.id;
  var counter = 1;
  for (let submenue of submenues) {
    submenue.folderLocaction = folderName;
    submenue.fileNo = counter;
    submenue.addEventListener("click", function() {
      folderLocaction = submenue.folderLocaction;
      fileNo = submenue.fileNo;
      openPage(folderLocaction, fileNo);
    } );
    counter++;
  }
}
function openPage(folderLocaction, fileNo) {
  containerIframe.setAttribute("src", `content\\${folderLocaction}\\${fileNo}.html`);
      containerIframe.addEventListener("load", function () {
        containerIframe.height =
          containerIframe.contentWindow.document.body.scrollHeight;
      });
}

