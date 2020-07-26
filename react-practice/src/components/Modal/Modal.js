import React, { Component } from 'react';
import s from './Modal.module.css';


export default class Modal extends Component {
  render() {
    const { onClose } = this.props;

    return (
      <div className={s.backdrop}>
        <div className={s.modalWindow}>
          <p>
            Duis enim voluptate nisi sint minim incididunt nisi. Consectetur
            cupidatat nostrud officia irure pariatur reprehenderit et do.
            Eiusmod exercitation sint sit Lorem magna occaecat minim qui fugiat
            adipisicing nisi occaecat velit occaecat. Commodo officia amet in ut
            aute ipsum in dolore aliqua ad Lorem consectetur.
          </p>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
