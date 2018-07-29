import React, { Component } from 'react';
import Navbar from './../components/Navbar'
import { SemiBanner } from './../styles/styles';

export default class Contact extends Component {
    render() {
        return (
            <SemiBanner>
                <Navbar />
            </SemiBanner>
        )
    }
}
