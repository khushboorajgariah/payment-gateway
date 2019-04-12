import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from "../../components/NavBar/index";
import CardPayment from "../../components/CardPayment/index";
import NetBanking from "../../components/NetBanking/index";
import {commonConstants} from "../../constants";
import actions from './actions'
import './home.css'
class Home extends Component {

    constructor(props) {
        super(props);
    }

    renderPaymentMode() {
        let { selectedTab, name='', number='', expiry='', cvv='', cardType='', searchString='' } = this.props.home;

        switch(selectedTab) {
            case 'CARD': return <CardPayment
                                    data={{name, number, expiry, cvv, cardType}}
                                    onChangeName={(name)=>this.props.onChangeName(name)}
                                    onChangeNumber={(number)=>this.props.onChangeNumber(number)}
                                    onChangeExpiry={(expiry)=>this.props.onChangeExpiry(expiry)}
                                    onChangeCvv={(cvv)=>this.props.onChangeCvv(cvv)}
                                    onChangeCardType={(type)=>this.props.onChangeCardType(type)}
                                />;
            case 'NET_BANKING': return <NetBanking
                                            onSearch={(str)=>this.props.onSearch(str)}
                                            searchString={searchString}
                                        />;
            default: return <div>Select a mode of payment</div>
        }
    }

    render () {
        let { selectedTab } = this.props.home;
        return (
            <div className={'home'}>
                <NavBar
                    tabList={Object.keys(commonConstants.typesOfPaymentMode)}
                    selectedTab={selectedTab}
                    onClick={(selectedMode) => this.props.onSelectPaymentMode(selectedMode)}
                />
                <div className={'content'}>
                    <div className={'head'}>How will you pay?</div>
                    <div className={'divider'}/>
                    {this.renderPaymentMode()}
                </div>
            </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        home:state.home
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectPaymentMode: (mode) => {
            dispatch(actions.onSelectPaymentMode(mode));
        },
        onChangeName: (name) => {
            dispatch(actions.onChangeName(name));
        },
        onChangeNumber: (number) => {
            dispatch(actions.onChangeNumber(number));
        },
        onChangeExpiry: (expiry) => {
            dispatch(actions.onChangeExpiry(expiry));
        },
        onChangeCvv: (cvv) => {
            dispatch(actions.onChangeCvv(cvv));
        },
        onChangeCardType: (type) => {
            dispatch(actions.onChangeCardType(type));
        },
        onSearch: (str) => {
            dispatch(actions.onSearch(str));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);