import classNames from "classnames";
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Actions from "./action";
import "./index.less";

@connect(
  (state) => ({
    receive: state.demo.receive,
  }),
  (dispatch) => ({ DemoDispatcher: bindActionCreators(Actions, dispatch) })
)
class Demo extends React.Component {
  componentDidMount() {
    const _this = this;
    const { DemoDispatcher } = this.props;
    setInterval(function () {
      DemoDispatcher.send(_this.props.receive + 1);
    }, 1000);
  }

  render() {
    const { receive } = this.props;
    return <div className={classNames("demo")}>Demo!&nbsp;{receive}</div>;
  }
}

export default Demo;
