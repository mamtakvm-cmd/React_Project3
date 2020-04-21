import React from 'react';


const Display=(props)=>{
  
 
    const renderList=({datalist})=>{
        if(datalist){
        return datalist.map((item)=>{
   
          return (
             <div>
            <h3>{item.firstname}</h3>
          <h3>{item.lastname}</h3>
          <h3> {item.email}</h3>
            </div>
          
             
             )
          
          })
       }
   
   }
     return(
         <div>
             {renderList(props)}
         </div>
       )
}

export default Display;