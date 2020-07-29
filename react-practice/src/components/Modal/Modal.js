import React, { Component, createRef } from 'react';
import s from './Modal.module.css';

export default class Modal extends Component {
  modalRef = createRef();

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick1);
  }
  shouldComponentUpdate(nextProps, nextState) {
    const { isModalOpen } = this.props;
    return nextProps.isModalOpen !== isModalOpen;
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick1);
  }

  handleWindowClick1 = e => {
    // console.log(`this.modalRef: `, this.modalRef);
    console.log(`this.modalRef.current: `, this.modalRef.current);
    console.log(`e.target`, e.target);

    const { isModalOpen, onClose } = this.props;

    console.log(`isModalOpen: `, isModalOpen);

    const isTargetInsideModal = this.modalRef.current.contains(e.target);
    if (isModalOpen && isTargetInsideModal) {
      onClose();
    }
    console.log(`isTargetInsideModal:`, isTargetInsideModal);
  };

  render() {
    const { onClose } = this.props;

    return (
      <div className={s.backdrop} ref={this.modalRef}>
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
