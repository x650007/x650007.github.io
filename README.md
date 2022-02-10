<!-- script language="javascript" type="text/javascript">
 setTimeout("javascript:location.href='http://baidu.com'",5000);
</script -->
<style type="text/css">
  h1 {display: none;}
  * {
  padding: 0;
  margin: 0;
}

html {
  height: 100%;
}

body {
  background-color: #121212;
  perspective: 1700px;
  overflow: hidden;
  position: relative;
  height: 100%;
}

.grid {
  width: 1602px;
  height: 1602px;
  background-color: transparent;
  background-image: radial-gradient(transparent, #121212 80%),
  linear-gradient(rgba(129, 243, 255, 0.4) 2px, transparent 1px),
  linear-gradient(90deg, rgba(129, 243, 255, 0.4) 2px, transparent 1px),
  linear-gradient(rgba(129, 243, 255, 0.2) 1px, transparent 1px),
  linear-gradient(90deg, rgba(129, 243, 255, 0.2) 1px, transparent 1px);
  background-size: 1602px 1602px, 401px 401px, 401px 401px, 50px 50px, 50px 50px;
  background-position: 0 0, -1px -1px, -1px -1px, 0px 0px, 0px 0px;
  background-repeat: no-repeat, repeat, repeat, repeat, repeat;
}

.grid-wrap {
  position: absolute;
  width: 802px;
  height: 802px;
  transform-style: preserve-3d;
  z-index: 1;
  transform: rotateX(70deg) scale3d(4, 4, 1) translateZ(-500px) translateY(-800px) translateX(-750px);
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 16s;
  animation-name: grid-wrap-anim;
}

@keyframes grid-wrap-anim {
  0% {
    transform: rotateX(70deg) scale3d(4, 4, 1) translateZ(-500px) translateY(-800px) translateX(-750px);
  }
  40% {
    transform: rotateX(80deg) scale3d(4, 4, 1) translateZ(-1000px) translateY(-800px) translateX(-750px);
  }
  60% {
    transform: rotateX(75deg) scale3d(4, 4, 1) translateZ(-1500px) translateY(-800px) translateX(-450px);
  }
  80% {
    transform: rotateX(78deg) scale3d(4, 4, 1) translateZ(-1000px) translateY(-800px) translateX(-750px);
  }
  100% {
    transform: rotateX(70deg) scale3d(4, 4, 1) translateZ(-500px) translateY(-800px) translateX(-750px);
  }
}

.grid-anim {
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 16s;
  animation-name: grid-anim;
}

@keyframes grid-anim {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(-360deg);
  }
}

.airplane-wrap {
  position: relative;
  transform-style: preserve-3d;
  z-index: 3;
  width: 100%;
  height: 100%;
  transform: rotateX(0deg) rotateY(-5deg) rotateZ(0deg);
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 16s;
  animation-name: airplane-wrap-anim;
}

@keyframes airplane-wrap-anim {
  0% {
    transform: rotateX(0deg) rotateY(-5deg) rotateZ(0deg);
  }
  40% {
    transform: rotateX(0deg) rotateY(-10deg) rotateZ(0deg);
  }
  60% {
    transform: rotateX(5deg) rotateY(15deg) rotateZ(-18deg);
  }
  80% {
    transform: rotateX(2deg) rotateY(5deg) rotateZ(-10deg);
  }
  100% {
    transform: rotateX(0deg) rotateY(-5deg) rotateZ(0deg);
  }
}

.airplane {
  position: absolute;
  left: 50%;
  top: 36%;
  transform: rotateY(-17deg) rotateZ(21deg) rotateX(-23deg) translateX(0);
  transform-style: preserve-3d;
  animation-name: airplane, airplane-pos-anim;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 16s;
}

@keyframes airplane {
  0% {
    transform: rotateY(-17deg) rotateZ(21deg) rotateX(-23deg) translateX(0);
  }
  25% {
    transform: rotateY(-13deg) rotateZ(13deg) rotateX(-19deg) translateX(100px);
  }
  50% {
    transform: rotateY(-10deg) rotateZ(19deg) rotateX(-15deg) translateX(-70px);
  }
  75% {
    transform: rotateY(-13deg) rotateZ(13deg) rotateX(-19deg) translateX(40px);
  }
  100% {
    transform: rotateY(-17deg) rotateZ(21deg) rotateX(-23deg) translateX(0);
  }
}

@keyframes airplane-pos-anim {
  0% {
    left: 50%;
  }
  40% {
    left: 40%;
  }
  70% {
    left: 70%;
  }
  100% {
    left: 50%;
  }
}

.grp {
  position: absolute;
  width: 0;
  transform-origin: center;
  transform-style: preserve-3d;
}

.bordered {
  position: absolute;
  border: 2px solid rgba(96, 138, 177, 0.7);
}

.bordered-thin {
  position: absolute;
  border: 1px solid rgba(96, 138, 177, 0.7);
}

.plate {
  position: absolute;
  border: 2px solid rgba(96, 138, 177, 0.7);
  background-color: rgba(19, 33, 50, 0.5);
}

.plate-no-border {
  position: absolute;
  background-color: rgba(19, 33, 50, 0.5);
}

.front-cover {
  transform: translate3d(0px, 0px, 250px);
}

.front-cover > div {
  transform-origin: bottom;
}

.front-cover-inner {
  width: 100px;
  height: 80px;
  transform: translate3d(0px, 20px, 0px);
}

.front-cover-center {
  width: 60px;
  height: 50px;
  transform: translate3d(20px, 35px, 45px);
}

.trapezoid {
  position: absolute;
  border-bottom-style: solid;
  border-bottom-color: rgba(19, 33, 50, 0.5);
}

.front-cover-top {
  transform: translate3d(0px, -24px, 2px) rotateX(-108deg);
  border-bottom-width: 45px;
  border-left: 21px solid transparent;
  border-right: 21px solid transparent;
  height: 0;
  width: 60px;
}

.front-cover-bottom {
  transform: translate3d(0px, 57px, 2px) rotateX(-72deg);
  border-bottom-width: 45px;
  border-left: 21px solid transparent;
  border-right: 21px solid transparent;
  height: 0;
  width: 60px;
}

.front-cover-left {
  transform: translate3d(62px, 14px, 0px) rotateX(0deg) rotateY(68deg) rotateZ(-90deg);
  border-bottom-width: 48px;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  height: 0;
  width: 53px;
}

.front-cover-right {
  transform: translate3d(-38px, 14px, 0px) rotateX(0deg) rotateY(112deg) rotateZ(-90deg);
  border-bottom-width: 48px;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  height: 0;
  width: 53px;
}

.front-cover-top-left {
  transform: translate3d(68px, 27px, 24px) rotateY(63deg) rotateZ(-18deg) rotateX(45deg);
  height: 0;
  width: 48px;
}

.front-cover-top-right {
  transform: translate3d(-15px, 27px, 24px) rotateY(118deg) rotateZ(-18deg) rotateX(-45deg);
  height: 0;
  width: 48px;
}

.front-cover-bottom-left {
  transform: translate3d(67px, 94px, 24px) rotateY(64deg) rotateZ(17deg) rotateX(-45deg);
  height: 0;
  width: 48px;
}

.front-cover-bottom-right {
  transform: translate3d(-13px, 94px, 24px) rotateY(115deg) rotateZ(16deg) rotateX(45deg);
  height: 0;
  width: 48px;
}

.left-cover,
.right-cover {
  width: 500px;
  height: 80px;
}

.left-cover {
  transform: rotateY(90deg) translate3d(0, 20px, -148px);
}

.right-cover {
  transform: rotateY(90deg) translate3d(0, 20px, -252px);
}

.top-cover-front {
  transform: rotateY(90deg) rotateX(90deg) translate3d(-162px, -38px, 30px);
  width: 175px;
  height: 100px;
}

.top-cover-back {
  transform: rotateY(90deg) rotateX(90deg) translate3d(160px, -40px, 31px);
  width: 180px;
  height: 100px;
}

.roof {
  transform: rotateY(90deg) rotateX(90deg) translate3d(4px, 0px, 94px);
  width: 100px;
  height: 100px;
}

.front-window {
  transform: rotateX(23deg) translate3d(0px, -17px, 74px);
  width: 100px;
  height: 65px;
}

.window-fill {
  background-color: rgba(2, 17, 35, 0.8);
}

.window {
  border-bottom: 60px solid rgba(2, 17, 35, 0.8);
  border-left: 25px solid transparent;
  border-right: 10px solid transparent;
  height: 0;
  width: 100px;
  position: absolute;
}

.left-window {
  transform: rotateY(90deg) translate3d(-5px, -40px, 35px);
}

.right-window {
  transform: rotateY(90deg) translate3d(-5px, -40px, -65px);
}

.rear-window {
  transform: rotateX(-11deg) translate3d(0px, -30px, -69px);
  width: 100px;
  height: 62px;
}

.bottom-cover {
  transform: rotateY(90deg) rotateX(90deg) translate3d(0, -200px, -50px);
  width: 500px;
  height: 100px;
}

.back-cover {
  width: 100px;
  height: 80px;
  transform: translate3d(0px, 20px, -250px);
}

.top-tail {
  transform: translate3d(0, 14px, -190px);
}

.left-tail {
  transform: translate3d(2px, -100px, -190px) rotateZ(90deg);
}

.right-tail {
  transform: translate3d(102px, 4px, -190px) rotateZ(-90deg);
}

.tail-top {
  transform: rotateY(90deg) rotateX(90deg) translate3d(55px, 20px, 80px);
  width: 60px;
  height: 10px;
}

.tail-front {
  transform: rotateX(45deg) translate3d(45px, -53px, 75px);
  width: 10px;
  height: 110px;
}

.tail-back {
  transform: rotateX(21deg) translate3d(45px, -96px, -39px);
  width: 10px;
  height: 82px;
}

.tail-left-rect {
  transform: rotateY(90deg) rotateZ(90deg) translate3d(-48px, -39px, 19px);
  width: 77px;
  height: 30px;
}

.tail-right-rect {
  transform: rotateY(90deg) rotateZ(90deg) translate3d(-158px, -39px, 9px);
  width: 77px;
  height: 30px;
}

.triangle {
  width: 0;
  height: 0;
  border-top-style: solid;
  border-top-color: rgba(19, 33, 50, 0.5);
  border-left-style: solid;
  border-left-color: transparent;
}

.tail-triangle-left-bottom {
  transform: rotateY(90deg) rotateZ(90deg) translate3d(-74px, 14px, 18px);
  border-top-width: 80px;
  border-left-width: 80px;
}

.tail-triangle-left-top {
  transform: rotateY(90deg) rotateZ(-90deg) translate3d(126px, 68px, 18px);
  border-top-width: 30px;
  border-left-width: 80px;
}

.tail-triangle-right-bottom {
  transform: rotateY(90deg) rotateZ(90deg) translate3d(-182px, 12px, 8px);
  border-top-width: 80px;
  border-left-width: 80px;
}

.tail-triangle-right-top {
  transform: rotateY(90deg) rotateZ(-90deg) translate3d(236px, 70px, 9px);
  border-top-width: 30px;
  border-left-width: 80px;
}

.tail-connector {
  transform: rotateY(90deg) rotateX(90deg) translate3d(1px, -6px, 222px);
  width: 112px;
  height: 12px;
}

.wing {
  width: 700px;
  height: 200px;
  border-top-right-radius: 20%;
  border-top-left-radius: 20%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  border-width: 5px;
  transform: rotateX(90deg) translate3d(-300px, 70px, 30px);
}

.wing-right,
.wing-left {
  width: 293px;
  height: 200px;
  border-width: 5px;
}

.wing-right {
  border-top-right-radius: 0%;
  border-top-left-radius: 35%;
  border-bottom-right-radius: 0%;
  border-bottom-left-radius: 90%;
  border-right-width: 1px;
}

.wing-left {
  border-top-right-radius: 35%;
  border-top-left-radius: 0%;
  border-bottom-right-radius: 90%;
  border-bottom-left-radius: 0%;
  transform: translate3d(405px, 0px, 0px);
  border-left-width: 1px;
}

.wing.bottom,
.wing-right.bottom {
  transform: translate3d(0px, 0px, -4px);
}

.wing-left.bottom {
  transform: translate3d(405px, 0px, -4px);
}

.conector {
  width: 208px;
  height: 2px;
}

.conector.right {
  transform: rotateX(90deg) rotateY(90deg) translate3d(102px, -2px, 193px);
}

.conector.left {
  transform: rotateX(90deg) rotateY(90deg) translate3d(102px, -2px, 301px);
}

.propeller {
  width: 0;
  height: 0;
  transform: translate3d(50px, 60px, 300px) rotateZ(0deg);
  transform-origin: 1px 1px;
}

.propeller-center {
  width: 18px;
  height: 18px;
  transform: translate3d(-10px, -10px, 0px);
  border-radius: 50%;
  webkit-border-radius: 50%;
}

.propeller-center.top {
  transform: translate3d(-10px, -10px, 4px);
}

.p-w {
  width: 25px;
  height: 70px;
  border-top-right-radius: 18%;
  border-top-left-radius: 90%;
  border-bottom-right-radius: 100%;
  border-bottom-left-radius: 11%;
  border-width: 3px;
}

.propeller-wing-1 {
  transform: translate3d(34px, -33px, 0px) rotateZ(90deg);
}

.propeller-wing-2 {
  transform: translate3d(-20px, 12px, 0px) rotateZ(180deg);
}

.propeller-wing-3 {
  transform: translate3d(-63px, -40px, 0px) rotateZ(270deg);
}

.propeller-wing-4 {
  transform: translate3d(-9px, -86px, 0px) rotateZ(0deg);
}

.propeller-wing-5 {
  transform: translate3d(34px, -33px, 4px) rotateZ(90deg);
}

.propeller-wing-6 {
  transform: translate3d(-20px, 12px, 4px) rotateZ(180deg);
}

.propeller-wing-7 {
  transform: translate3d(-63px, -40px, 4px) rotateZ(270deg);
}

.propeller-wing-8 {
  transform: translate3d(-9px, -86px, 4px) rotateZ(0deg);
}

.rotate-propeller {
  animation-name: propeller;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 0.8s;
}

@keyframes propeller {
  from {
    transform: translate3d(50px, 60px, 300px) rotateZ(0deg);
  }
  to {
    transform: translate3d(50px, 60px, 300px) rotateZ(-360deg);
  }
}
</style>
<div class="grid-wrap">
  <div class="grid grid-anim"></div>
</div>
<div class="airplane-wrap">
  <div class="airplane" id="airplane">
    <div class="front-cover grp" id="front-cover-grp">
      <div class="plate front-cover-inner"></div>
      <div class="plate front-cover-center"></div>
      <div class="trapezoid front-cover-top"></div>
      <div class="trapezoid front-cover-bottom"></div>
      <div class="trapezoid front-cover-left"></div>
      <div class="trapezoid front-cover-right"></div>
      <div class="bordered-thin front-cover-top-left"></div>
      <div class="bordered-thin front-cover-top-right"></div>
      <div class="bordered-thin front-cover-bottom-left"></div>
      <div class="bordered-thin front-cover-bottom-right"></div>
    </div>
    <div class="body grp" id="body-grp">
      <div class="plate left-cover"></div>
      <div class="plate right-cover"></div>
      <div class="plate top-cover-front"></div>
      <div class="plate top-cover-back"></div>
      <div class="cockpit grp" id="cockpit-grp">
        <div class="plate roof"></div>
        <div class="bordered window-fill front-window"></div>
        <div class="window left-window"></div>
        <div class="window right-window"></div>
        <div class="bordered window-fill rear-window"></div>
      </div>
      <div class="plate bottom-cover"></div>
      <div class="plate back-cover"></div>
    </div>
    <div class="top-tail grp" id="top-tail-grp">
      <div class="plate tail-top"></div>
      <div class="plate tail-front"></div>
      <div class="plate tail-back"></div>
      <div class="plate-no-border tail-left-rect"></div>
      <div class="triangle tail-triangle-left-bottom"></div>
      <div class="triangle tail-triangle-left-top"></div>
      <div class="plate-no-border tail-right-rect"></div>
      <div class="triangle tail-triangle-right-bottom"></div>
      <div class="triangle tail-triangle-right-top"></div>
      <div class="bordered tail-connector"></div>
    </div>
    <div class="right-tail grp" id="right-tail-grp">
      <div class="plate tail-top"></div>
      <div class="plate tail-front"></div>
      <div class="plate tail-back"></div>
      <div class="plate-no-border tail-left-rect"></div>
      <div class="triangle tail-triangle-left-bottom"></div>
      <div class="triangle tail-triangle-left-top"></div>
      <div class="plate-no-border tail-right-rect"></div>
      <div class="triangle tail-triangle-right-bottom"></div>
      <div class="triangle tail-triangle-right-top"></div>
      <div class="bordered tail-connector"></div>
    </div>
    <div class="left-tail grp" id="left-tail-grp">
      <div class="plate tail-top"></div>
      <div class="plate tail-front"></div>
      <div class="plate tail-back"></div>
      <div class="plate-no-border tail-left-rect"></div>
      <div class="triangle tail-triangle-left-bottom"></div>
      <div class="triangle tail-triangle-left-top"></div>
      <div class="plate-no-border tail-right-rect"></div>
      <div class="triangle tail-triangle-right-bottom"></div>
      <div class="triangle tail-triangle-right-top"></div>
      <div class="bordered tail-connector"></div>
    </div>
    <div class="wing grp" id="wing-grp">
      <div class="plate wing-right"></div>
      <div class="plate wing-right bottom"></div>
      <div class="plate wing-left"></div>
      <div class="plate wing-left bottom"></div>
      <div class="bordered conector right"></div>
      <div class="bordered conector left"></div>
    </div>
    <div class="propeller rotate-propeller grp" id="propeller-grp">
      <div class="plate propeller-center"></div>
      <div class="plate propeller-center top"></div>
      <div class="plate p-w propeller-wing-1"></div>
      <div class="plate p-w propeller-wing-2"></div>
      <div class="plate p-w propeller-wing-3"></div>
      <div class="plate p-w propeller-wing-4"></div>
      <div class="plate p-w propeller-wing-5"></div>
      <div class="plate p-w propeller-wing-6"></div>
      <div class="plate p-w propeller-wing-7"></div>
      <div class="plate p-w propeller-wing-8"></div>
    </div>
  </div>
</div>
