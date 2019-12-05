import React, { Component } from 'react'

class Main extends Component {
  render() {
    return (
      <div>
        Merhaba {this.props.name}
        <hr />
        Profil bilgileriniz için <a href="/private">tıklayınız</a>
        <hr />
        <button className="btn" onClick={this.props.auth.login}>Kayıt ol</button>
      </div>
    )
  }
}

export default Main;