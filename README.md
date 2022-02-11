<script language="javascript" type="text/javascript">
 setTimeout("javascript:location.href='http://81.70.77.19/'",5000);
</script>
<style type="text/css">
body {
  background-color: #eee;
}

h1 {
  display:none;
}
.windmill {
  position: absolute;
  left: 40%;
  top: 30%;
}

.hills {
  width: 280px;
  height: 180px;
  background-color: #edadac;
  position: absolute;
  top: 64px;
  left: -110px;
  opacity: 0.5;
  border-radius: 300px 300px 0 0;
}
.hills:before, .hills:after {
  content: '';
  position: absolute;
  background-color: #edadac;
  border-radius: 300px 300px 0 0;
}
.hills:before {
  width: 250px;
  height: 110px;
  bottom: 0;
  right: -120px;
}

.wheel {
  z-index: 10;
  width: 192px;
  height: 192px;
  position: absolute;
  left: 8px;
  top: 10px;
  animation: spin 15s linear infinite;
}

.windwheel {
  position: absolute;
  width: 8px;
  height: 100px;
  background-color: #41155a;
  margin-right: 10px;
  left: 92px;
}
.windwheel:before {
  positioN: absolute;
  content: "";
  background-color: #41155a;
  opacity: 0.7;
  width: 15px;
  height: 75px;
  left: 8px;
}

.windwheel2 {
  transform: rotate(90deg);
  top: 46px;
  left: 138px;
  z-index: 40;
}

.windwheel3 {
  transform: rotate(180deg);
  top: 92px;
}

.windwheel4 {
  transform: rotate(-90deg);
  top: 46px;
  left: 46px;
}
.windwheel4:after {
  position: absolute;
  content: "";
  background-color: #41155a;
  opacity: 0.7;
  width: 22px;
  height: 22px;
  bottom: -7px;
  left: -7px;
  transform: rotate(45deg);
}

.roof {
  position: absolute;
  z-index: 9;
  left: 52px;
  top: 55px;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 70px solid #df615c;
}

.mill {
  position: absolute;
  left: 52px;
  top: 124px;
  width: 100px;
  height: 120px;
  background-color: #fff;
}
.mill:after {
  position: absolute;
  content: "";
  background-color: #41155a;
  height: 50px;
  width: 40px;
  bottom: 0;
  left: 28px;
  border-radius: 40% 40% 0 0;
  border-left: 5px solid #edadac;
}
.mill:before {
  position: absolute;
  content: "";
  background-color: #41155a;
  height: 40px;
  width: 30px;
  top: 20px;
  left: 32px;
  border-radius: 18px;
  border-left: 5px solid #edadac;
}

.house {
  position: absolute;
  width: 80px;
  height: 60px;
  background-color: #fff;
  top: 164px;
  left: 152px;
  border-top: 20px solid #df615c;
}
.house:after {
  content: "";
  position: absolute;
  background-color: #41155a;
  width: 20px;
  height: 30px;
  bottom: 0;
  left: 30px;
  border-left: 5px solid #edadac;
}

.bush {
  position: relative;
  top: 203px;
  left: -60px;
}

.bush li {
  float: left;
  list-style: none;
  background-color: #df615c;
  width: 40px;
  height: 25px;
  border-radius: 100px 100px 0 0;
}

.bush2 {
  top: 178px;
  left: 160px;
}

.tree {
  position: absolute;
  left: -50px;
  top: 120px;
}
.tree li {
  list-style: none;
  background-color: #41155a;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  margin-bottom: -15px;
}
.tree:after {
  content: "";
  position: absolute;
  background-color: #edadac;
  width: 3px;
  height: 80px;
  top: 25px;
  right: 21px;
}

.cloud {
  position: absolute;
  top: 40px;
  left: -100px;
  background-color: #fff;
  height: 20px;
  width: 40px;
  z-index: 1000;
  border-radius: 40px 40px 0 0;
  opacity: 0.7;
  animation: clouds 14s linear alternate infinite;
}
.cloud:before {
  content: "";
  position: absolute;
  background-color: #fff;
  height: 30px;
  width: 60px;
  border-radius: 60px 60px 0 0;
  bottom: 0;
  right: 20px;
}

.cloud2 {
  height: 40px;
  width: 80px;
  top: -20px;
  z-index: 1;
  animation: clouds 24s linear alternate-reverse infinite;
}
.cloud2:before {
  content: "";
  position: absolute;
  background-color: #fff;
  height: 30px;
  width: 60px;
  border-radius: 60px 60px 0 0;
  bottom: 0;
  right: 40px;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes clouds {
  100% {
    transform: translateX(340px);
  }
}
</style>
<div class="windmill">
  <div class="hills"></div>
  <div class="wheel">
    <div class="windwheel"></div>
    <div class="windwheel windwheel2"></div>
    <div class="windwheel windwheel3"></div>
    <div class="windwheel windwheel4"></div>
  </div>
  <div class="roof"></div>
  <div class="mill"></div>
  <div class="house"></div>
  <ul class="tree">
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <ul class="bush">
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <ul class="bush bush2">
    <li></li>
    <li></li>
  </ul>
  <div class="cloud"></div>
  <div class="cloud cloud2"></div>
</div>
