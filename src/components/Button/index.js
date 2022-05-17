const Button=(props)=>{

    return(
    
    <>
    { props.type==="secondary"   ?  
      <div className={`border-[#4dba29]  px-4 py-1 items-center    h-10 rounded-md  w-32 text-center flex justify-center ${props.className}`}>{props.children}</div>
    :  
  <div className={`${props.className} text-white  bg-[#4dba29] text-center h-10 rounded-md w-40   flex justify-center py-2 `}>{props.children}</div>
}
    
    
    </>
    
    
    
    )
    
    
    }
    export default Button