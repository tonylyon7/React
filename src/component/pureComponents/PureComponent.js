import React, { PureComponent } from 'react'

class pureComp extends PureComponent {
  render() {
    console.log("PureComponent")
    return (
        <div>
          <h2>pureComponent</h2>
        </div>
    )
  }
}

export default pureComp