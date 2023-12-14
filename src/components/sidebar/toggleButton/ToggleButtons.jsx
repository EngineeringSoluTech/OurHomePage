import React from 'react'

const ToggleButtons= ({setOpen})=> {
  return (
    <button onClick={()=>setOpen((prev)=>!prev)}>
      Open
    </button>
  )
}

export default ToggleButtons
