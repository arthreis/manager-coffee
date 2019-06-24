import React, { Component } from 'react';

import styles from './styles';

class PopUp extends Component {

    constructor(props, context) {
      super(props, context);

      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);

      this.state = {
        show: props.opened,
        message: props.message
      };
    }

    handleClose() {
      this.setState({ show: false });
    }

    handleShow() {
      this.setState({ show: true });
    }

    render() {

        const { message, tooglePopUp } = this.props;

        return (
                <div style={styles.popup}>

                    <div style={styles.content}>
                        <h3>Confirm deletion ?</h3>
                        <div>You confirm exclusion of coffee { message } ?</div>

                        <div style={styles.actions}>
                            <button onClick={tooglePopUp}>
                                Close
                            </button>
                            <button onClick={tooglePopUp}>
                                Ok
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
}

export default PopUp;
