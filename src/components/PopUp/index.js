import React, { Component } from 'react';

import styles from './styles';

class PopUp extends Component {

    constructor(props, context) {
      super(props, context);

      this.state = {
        popup: props.popup,
      };
    }

    render() {

        const { popup } = this.props;

        return (
                <div style={styles.popup}>

                    <div style={styles.content}>

                        <h3>{ popup.title }</h3>
                        <div>{popup.message}</div>

                        <div style={styles.actions}>
                            <button onClick={popup.close}>
                                Close
                            </button>
                            <button onClick={() => popup.confirm(popup.object)}>
                                Ok
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
}

export default PopUp;
