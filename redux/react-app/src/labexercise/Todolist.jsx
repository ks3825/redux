import React, {  useState } from 'react'

const Todolist = () => {
    const [data1,setData1]=useState([])
    const[inputtext,setInputtext]=useState("")
const saveData=(e)=>{
    e.preventDefault();
    setData1([...data1,inputtext])
}
const deleteItem=(id)=>{
    const res=data1.filter((i,index)=>{
        return index!==id
    })
    console.log(res);
    
    setData1(res)
}

  return (
    <div>
    <form action="#" onSubmit={(inputtext)=>saveData(inputtext)}>
      <input type="text" name="text" id="text"   value={inputtext} onChange={(e)=> setInputtext(e.target.value)}   /><br></br>
      <button>SAVE</button>
      </form>
      <table>
        <thead>
            <tr>item</tr>
        </thead>
        <tbody>
        {data1.map((i,index)=>{
            return(
                <tr key={index}>
                    <td>{i}</td>
                    <td><button onClick={()=>deleteItem(index)}>delete</button></td>
                </tr>
            )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default Todolist