 // thanks vogel
 function save(fromHere){
   	let inputArea = document.getElementById(fromHere);
   	let inputValue = inputArea.value;
   	let blobdtMIME =
        new Blob([inputValue], { type: "text/plain" })
    let url = URL.createObjectURL(blobdtMIME)
    let anele = document.createElement("a")
    anele.setAttribute("download", "AA.txt");
    anele.href = url;
    anele.click();
    console.log(blobdtMIME)
  }