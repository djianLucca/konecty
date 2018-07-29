import React, { Component } from 'react';
import Navbar from './../components/Navbar';
import { Link } from 'react-router-dom'
import { Banner, BannerTitle, BannerContent, BannerText, Icon, ButtonsWrapper, Button } from './../styles/styles';


export default class Home extends Component {
    render() {
        return (
            <Banner>
                <Navbar />
                <BannerContent className="row">
                    <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-2-half">
                        <BannerTitle>Manage, get in touch and get more clients.</BannerTitle>
                        <BannerText>Konecty is a CRM Tool focused on offering users facility, flexibility and speed, allowing customization and development of new applications.</BannerText>
                    </div>
                </BannerContent>
                <ButtonsWrapper className="row between-xs">
                    <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-2-half">
                        <div className="row">
                            <Button>Watch Demo <Icon className="material-icons">play_arrow</Icon></Button>
                            <Link to="contact" className="button-secondary">Contact Us</Link>
                        </div>
                    </div>
                </ButtonsWrapper>
            </Banner>
        )
    }
}
