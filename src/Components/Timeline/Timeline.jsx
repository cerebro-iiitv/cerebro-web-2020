import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Link } from 'react-router-dom';
import 'react-vertical-timeline-component/style.min.css';
import Header from '../Header/Header'
import './Timeline.scss'

class Timeline extends React.Component {

    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <a href="https://github.com/cerebro-iiitv/cerebro-web-2019/files/2896857/timeline.pdf" className="timelinePdf">
                        <img src='media/download.svg' alt="download Logo" className="download-icons__icon" />
                    </a>
                </div>
                <div className="timeline">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2010 - 2011"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            position="left"
                        >
                            <Link className="eventLink" to={`/events`}>

                                <h3 className="vertical-timeline-element-title">"Perry"</h3>
                                <h4 className="vertical-timeline-element-subtitle">"Chasma"</h4>
                                <p>
                                    "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
                            </p>
                            </Link>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2010 - 2011"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            position="right"
                        >
                            <Link className="eventLink" to={`/events`}>

                                <h3 className="vertical-timeline-element-title">"Perry"</h3>
                                <h4 className="vertical-timeline-element-subtitle">"Chasma"</h4>
                                <p>
                                    "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
                            </p>
                            </Link>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2010 - 2011"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            position="left"
                        >
                            <Link className="eventLink" to={`/events`}>

                                <h3 className="vertical-timeline-element-title">"Perry"</h3>
                                <h4 className="vertical-timeline-element-subtitle">"Chasma"</h4>
                                <p>
                                    "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
                            </p>
                            </Link>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2010 - 2011"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            position="right"
                        >
                            <Link className="eventLink" to={`/events`}>

                                <h3 className="vertical-timeline-element-title">"Perry"</h3>
                                <h4 className="vertical-timeline-element-subtitle">"Chasma"</h4>
                                <p>
                                    "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
                            </p>
                            </Link>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2010 - 2011"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            position="left"
                        >
                            <Link className="eventLink" to={`/events`}>

                                <h3 className="vertical-timeline-element-title">"Perry"</h3>
                                <h4 className="vertical-timeline-element-subtitle">"Chasma"</h4>
                                <p>
                                    "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
                            </p>
                            </Link>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2010 - 2011"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            position="right"
                        >
                            <Link className="eventLink" to={`/events`}>

                                <h3 className="vertical-timeline-element-title">"Perry"</h3>
                                <h4 className="vertical-timeline-element-subtitle">"Chasma"</h4>
                                <p>
                                    "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
                            </p>
                            </Link>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2010 - 2011"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            position="left"
                        >
                            <Link className="eventLink" to={`/events`}>

                                <h3 className="vertical-timeline-element-title">"Perry"</h3>
                                <h4 className="vertical-timeline-element-subtitle">"Chasma"</h4>
                                <p>
                                    "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
                            </p>
                            </Link>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
                <div className="shadow-bottom"></div>
            </div>
        );
    }
}

export default Timeline;