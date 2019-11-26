import CMS from "netlify-cms-app"
import React, { Component } from "react";
import moment from "moment";

export class HiddenDateControl extends Component {
    constructor(props) {
        super(props)
        this.getDate = this.getDate.bind(this)
    }

    getDate () {
        const date = moment().format("YYYY-MM-DD, h:mm:ss");
        console.log("get date, ", date)
        this.props.onChange(date)
    }
    
    render() {
        // const HiddenControl = CMS.getWidget("hidden").control;
        // const DateTimeControl = CMS.getWidget("datetime").control;
        // console.log("datetime widget ", CMS.getWidget("datetime"))

        // console.log("hidden date control date ", this.getDate())
        console.log("hidden date control props ,", this.props)
        return (
            <div>
                {this.getDate()}
                {/* <DateTimeControl {...this.props} /> */}
            </div>
        )
    }
}
