

async function dataDisplay()
{
 let Table=`<table width="90%" border="1" bgcolor="white" >
              <tr bgcolor="white">
                <th> Student name </th>
                <th> Course </th>
                <th> Fees </th>
                <th> Mobile No </th>
               </tr> 
           `

  let api="http://localhost:3000/books";

  let myObj= await fetch(api);
  let myData= await myObj.json();

   myData.map((key)=>{
       Table+=` <tr align="center">
                  <td> ${key.bookname} </td>
                  <td> ${key.authorname} </td>
                  <td> ${key.publishyear} </td>
                  <td> ${key.price} </td>
                </tr>  
            `

   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;

}

dataDisplay();