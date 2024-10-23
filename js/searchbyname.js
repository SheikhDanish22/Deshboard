document.getElementById("bname").addEventListener("keyup", searchDisplay);
async function searchDisplay()
{
  let bname=document.getElementById("bname").value;
 let Table=`<table width="90%" border="1" bgcolor="white">
              <tr bgcolor="white">
                <th> Book name </th>
                <th> Author Name </th>
                <th> Publish Year </th>
                <th> Price </th>
               </tr> 
           `

  let api="http://localhost:3000/books";

  let myObj= await fetch(api);
  let myData= await myObj.json();

   myData.map((key)=>{
     let str=key.bookname;
     let myval=str.includes(bname);
     
             
     if (myval==true)
     {
       Table+=` <tr align="center">
                  <td> ${key.bookname} </td>
                  <td> ${key.authorname} </td>
                  <td> ${key.publishyear} </td>
                  <td> ${key.price} </td>
                </tr>  
            `
     }       
   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;
}

