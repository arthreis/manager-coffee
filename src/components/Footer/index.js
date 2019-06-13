import React, { Component } from 'react';

import { version } from './../../services/coffeeService';

class Footer extends Component {

    state = {
        info: {},
    }

    componentDidMount(){
        this.buscaVersao();
    }

    buscaVersao = async () => {
        const lastVersion = await version();
        this.setState( () => ({info: lastVersion.data}) );
    }

    render() {
        return (
            <div>
                <span>{this.state.info.title} - {this.state.info.version}</span>
            </div>
        );
    }
}

export default Footer;