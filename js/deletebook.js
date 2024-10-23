function mydel(myid)
{
  let api=`http://localhost:3000/books/${myid}`

  fetch(api, { method: 'DELETE' }).then((res)=>{
    alert("Record Deleted!!!");
  })
  
}





async function Display()
{


 let Table=`<table width="90%" border="2" bgcolor="white">
              <tr bgcolor="white">
                <th> Student name </th>
                <th> Course </th>
                <th> Fees </th>
                <th> Mobile No. </th>
                <th>Delete</th>
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
                  <td>
                  <a href="#" onclick="mydel('${key.id}')">

                    <img src="images/del.png" width="30" height="30" >
                  </a>
                  </td>
                </tr>  
            `
        
   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;
}

Display();