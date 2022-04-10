import React from 'react'

function Hello({color,name,isSpecial}) {
  return (
    <div style={isSpecial?{color}:{color:'green'}}>
        hello : {name}
    </div>
  )
}

export default Hello