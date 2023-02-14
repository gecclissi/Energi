/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import okGif from "../images/check-green.gif";
import nokGif from "../images/cancel-red.gif";

const FeedBack = (props) => {
  useEffect(() => {
    setTimeout(() => props.closeFeedBack(false), 1500);
  }, []);

  return (
    <Container
      style={{ position: "fixed", top: "40%", left: "40%", zIndex: 100 }}
    >
      <CSSTransition
        in={true}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={props.onEnterFeedBack}
        onExited={props.onExitFeedBack}
      >
        <div>
          <img src={props.isOk ? okGif : nokGif} width={300} height={300} />
        </div>
      </CSSTransition>
    </Container>
  );
};

export default FeedBack;
