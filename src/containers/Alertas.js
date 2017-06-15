import React from 'react'
import Alertas from '../components/Alertas';
import { connect } from 'react-redux';
import createAlertas from '../actions/indexAlertas';
import { push as Menu } from 'react-burger-menu';

const styles = {
  bmBurlefttton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};

class AlertasComponent extends React.Component {
    constructor(props) {
        super(props);
        this.actionSubmit = this.actionSubmit.bind(this);
}

    actionSubmit() {
        alert('YA');
        const { dispatch } = this.props;
    }

    render() {
        const { dispatch } = this.props;
        return (
            <div>
                <Menu
                    isOpen={ true }
                    width={ 280 }
                    styles={ styles }
                    left
                >
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                </Menu>
            </div>
        );
    }
}

export default connect()(AlertasComponent);