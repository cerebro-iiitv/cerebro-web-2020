import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Link } from 'react-router-dom';
import 'react-vertical-timeline-component/style.min.css';
import Header from '../Header/Header'
import './Timeline.scss'

class Timeline extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentWillMount() {
        window.scroll(0, 0)
    }

    render() {
        const timeline=this.props.events.map((event,index)=>{
            if(index%2==0){
                var side="left"
            }else{
                side="right"
            }
            return (
                <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="27-28-29 March"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    position={side}
                >
                    <Link className="eventLink" to={`/events`}>

                        <h3 className="vertical-timeline-element-title">{event.event}</h3>
                        <p>
                            {event.description}
                    </p>
                    </Link>
                </VerticalTimelineElement>
            </VerticalTimeline>
            )
        })
        return (
            <div>
                <Header></Header>
                <div>
                    <a href="https://github.com/cerebro-iiitv/cerebro-web-2019/files/2896857/timeline.pdf" className="timelinePdf">
                        <img src='media/download.svg' alt="download Logo" className="download-icons__icon" />
                    </a>
                </div>
                <div className="timeline">
                {timeline}
                </div>
                <div className="shadow-bottom"></div>
            </div>
        );
    }
}

export default Timeline;