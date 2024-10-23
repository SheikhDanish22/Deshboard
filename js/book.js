
document.getElementById("btnsave").addEventListener("click", bookSave);


async function bookSave(){
    let bnm=document.getElementById("bname").value;
    let anm=document.getElementById("authorname").value;
    let pyear=document.getElementById("pyear").value;
    let price=document.getElementById("bprice").value;


    let api="http://localhost:3000/books";

    const response= await fetch(api, {
        method: "POST",
        body: JSON.stringify({ 
          "bookname":bnm,
          "authorname":anm,
          "publishyear":pyear,
          "price":price   
         }),
         headers: {
            "Content-Type": "application/json",
          }
    });

    console.log(response);
    alert("data save!!!");


}