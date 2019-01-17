import React from 'react'

class Showhide extends React.Component {
  state = {
    show: false,
  }

  handleClick = () => {
    const show = this.state.show
    this.setState({ show: !show })
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Click</button>
        {this.state.show && this.props.children}
      </>
    )
  }
}

export default Showhide
