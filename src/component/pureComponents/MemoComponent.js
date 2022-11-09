import React from 'react'

const MemoComponent = () => {
    console.log("MemoComponent")
  return (
    <div>MemoComponent</div>
  )
}

export default React.memo(MemoComponent)