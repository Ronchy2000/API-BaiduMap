function loadJScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//api.map.baidu.com/api?type=webgl&v=1.0&ak=LPIgaQNAnUkRoToiSKj5RrRuHMl5BDNZ&callback=init';
    document.body.appendChild(script);
}
function init() {
    var map = new BMapGL.Map('container'); // 创建Map实例
   //map.centerAndZoom('成都市', 8);
    map.centerAndZoom(new BMapGL.Point(104.20792200, 30.5683908), 18); // 初始化地图,设置中心点坐标和地图级别
    map.enableScrollWheelZoom(); // 启用滚轮放大缩小
    map.setHeading(54.5);//初始角
    map.setTilt(73);  //初始仰角
//比例尺控件
    var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
    map.addControl(scaleCtrl);
    var zoomCtrl = new BMapGL.ZoomControl();  // 添加比例尺控件
    map.addControl(zoomCtrl);
}
window.onload = loadJScript; // 异步加载地图