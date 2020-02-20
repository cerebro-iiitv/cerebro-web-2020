import React, { Component } from 'react';
import "./Main.scss";

class Main extends Component {

    render() {
        return (
            <div className="main" >
                <div className="main__container">
                    <h1 className="main__container__title">COOK-A-CODE</h1>
                    <div className="main__container__content">
                        <div>
                            <div>
                                Let the programming juice flow
                                in your brain!
                            </div>
                        </div>
                        <span class="vl"></span>
                        <div>• Both the rounds online as well as
                        onsite will follow the ACM style
                        ranking system <br />

                            • Any type of plagiarism detected
                              will lead to immediate
                        disqualification  <br />

                            • A team must contain at most 3
                        members.  <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
