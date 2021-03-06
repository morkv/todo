import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';



function mapStateToProps(state) {
    return {
        todos: state
    }
}

const HeaderContainer = connect(mapStateToProps, null)(Header);

export default HeaderContainer;