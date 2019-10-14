import React, { Component } from 'react';
import '../Styles/footer.css';

class HeaderIntro extends Component {
  render() {
    return (
      <div className="cointenerFooter">
        <p className="name">Created by</p>
        <div className="namesTeam">
        <a className="name" href="https://github.com/anndy9192" target="blank">Andrea,</a>
        <a className="name" href="https://github.com/DenissePeralta" target="blank">Denisse,</a>
        <a className="name" href="https://github.com/Nienorloth" target="blank">Mariana</a>
        <a className="name" href="https://github.com/PaulinaMontoya" target="blank">and Paulina</a>
        </div>
      </div>
    );
  }
}

export default HeaderIntro;
