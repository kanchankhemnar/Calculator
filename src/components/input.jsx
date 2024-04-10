
function Input(props){
  return <>
  
  <div className="grid text-center">
    <br />
        {props.arr.map((item )=>(
  
          // <button type="button" className="btn btn-primary button1" key={item} onClick={()=>{console.log(item);}}>{item}
          // </button>
        <button type="button" className="btn btn-primary button1" key={item} onClick={props.onClick1}>{item}
        </button>
      
        
        ))}
     
        
      </div>
  </>
}
export default Input