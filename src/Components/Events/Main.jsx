import React, { Component } from 'react';
import "./Main.scss";

class Main extends Component {

    render() {
        return (
            <div className="main" >
                <div className="main__container">
                    <h1 className="main__container__title">COOK-A-CODE</h1>
                    <div className="main__container__content">
                        <div>Left side hai</div>
                        <span class="vl"></span>
                        <div>Right side hai</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
