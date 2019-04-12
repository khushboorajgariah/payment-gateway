import React, { Component } from 'react';
import './index.css';
import {commonConstants} from "../../constants";

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    onClick(e) {
        this.props.onClick(e.target.getAttribute('data-mode'));
    }

    render(){
        let { tabList, selectedTab } = this.props;

        return (
            <div className={'nav-bar'}>
                {tabList.map((tab, ind) => {
                    return (
                        <div className={`tab ${selectedTab===tab ? 'selected' : ''}`}
                             key={`tab_${ind}`}
                             data-mode={tab}
                             onClick={(e)=>this.onClick(e)}>
                            {commonConstants.typesOfPaymentMode[tab]}
                        </div>
                    )
                })}
            </div>
            )
    }

};
