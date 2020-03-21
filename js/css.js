const string = `
/* 画一只可爱的万圣节白幽灵*/
* {
  padding: 0;
  margin: 0;
}
/* 先给一个背景色*/
#html {
  background-color: #ff4814;
}
#box {
  width: 500px;
  height: 400px;
  margin: -50px auto 0;
  position: relative;
}
/* 白幽灵的身体*/
#header {
  width: 200px;
  height: 250px;
  background-color: #ffffff;
  position: absolute;
  top: 100px;
  left: 150px;
  border-top-left-radius: 50% 40%;
  border-top-right-radius: 50% 40%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
/* 白幽灵的小眼睛*/
.eyes {
  background-color: #013e51;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  top: 30%;
}
.left {
  left: 30px;
}
.right {
  right: 30px;
}
/* 白幽灵的小嘴*/
.mouth {
  position: absolute;
  width: 0px;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 60px solid #013e51;
  border-radius: 50%;
  top: 33%;
  left: 35%;
}
.mouth::after,
.mouth::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #013e51;
  border-radius: 50%;
  top: 39px;
}
.mouth::after {
  left: -26px;
}
.mouth::before {
  left: 16px;
}
#wwf {
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: #ffffff;
  border-radius: 50%;
  top: 0px;
  left: -25px;
  z-index: 1;
}
/* 白幽灵的小脚（也不知道算不算脚）*/
#footer,
#footer::before,
#footer::after {
  position: absolute;
  width: 0;
  height: 0;
  border-width: 19px;
  border-color: #ff4814 transparent transparent #ff4814;
  border-style: solid;
  border-top-left-radius: 14px;
}
#footer {
  transform: rotate(45deg);
  top: 83%;
  left: 33.5%;
}
#footer::before {
  content: "";
  top: -64.5px;
  left: 26px;
}
#footer::after {
  content: "";
  top: -109.5px;
  left: 71px;
}
.circle,
.circle::after {
  width: 17px;
  height: 17px;
  position: absolute;
  background-color: #ffffff;
  border-radius: 50%;
}
.circle {
  top: -36px;
  left: 9px;
}
.circle::after {
  content: "";
  top: -45.5px;
  left: 45px;
}
/* 画一个影子（也不知道有没有影子）*/
#shadow {
  width: 200px;
  height: 40px;
  background-color: #ef3d23;
  margin: 0 auto;
  border-radius: 50%;
}
/*给白幽灵加一个动画*/
@keyframes play {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-40px);
  }
  100% {
    transform: translateY(0);
  }
}
#box{
  animation: play 2s linear infinite;
}
/*给影子加一个动画*/
@keyframes change {
  0% {
    width: 200px;
    height: 40px;
  }
  50% {
    width: 100px;
    height: 20px;
  }
  100% {
    width: 200px;
    height: 40px;
  }
}
#shadow{
  animation: change 2s linear infinite;
}
/*完成，这只可爱的白幽灵送给你*/
`;
export default string;
