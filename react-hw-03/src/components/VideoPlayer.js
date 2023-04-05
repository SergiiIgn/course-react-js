import React from "react";

export default class VideoPlayer extends React.Component {
    constructor(props) 
    {
        super(props);
        this.state = 
        { title: "Initial page", };
    }

    videoFrame = document.createElement("myVideo");

    componentDidMount() {
        this.videoFrame.controls = true
        // this.videoFrame.();
    }

    componentDidUpdate() {
    }

    render() {
        return (
        <div>
            <div>***Task VideoPlayer***</div>
            <div>
                {/* {this.videoFrame}  */}
            </div>
            <videoFrame
                width="320" 
                height="240" 
                src="../video/103019.mp4" 
                type="video/mp4"
                controls
            />                             
        </div>
        );
    }
}