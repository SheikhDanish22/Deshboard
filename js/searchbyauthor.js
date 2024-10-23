document.getElementById("btn1").addEventListener("click", searchByAuthor);


async function  searchByAuthor()
{
    let Table=`<table border="1" width="70%" bgcolor="white" >
               <tr bgcolor="white" align="center">
                 <td> Book name  </td>
                 <td> Author name  </td>
                 <td> Publish Year  </td>
                 <td> Price  </td>
               </tr>  
                 `
    let txtval= document.getElementById("txt1").value;
    let api=`http://localhost:3000/books/?authorname=${txtval}`;

    let Obj= await  fetch(api);
    let Data= await Obj.json();               
    console.log(Data);

    Data.map((key)=>{
        Table+=`<tr align="center">
                    <td> ${key.bookname} </td>
                    <td> ${key.authorname} </td>
                    <td> ${key.publishyear} </td>
                    <td> ${key.price} </td>
                 </tr>         
               `
    })

     Table+="</table>";

     document.getElementById("demo").innerHTML=Table;
}