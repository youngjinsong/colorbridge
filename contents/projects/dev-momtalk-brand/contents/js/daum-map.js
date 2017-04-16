var container = document.getElementById('map');
var options = {
	center: new daum.maps.LatLng(37.5166363,127.0251637),
	level: 3
};

var map = new daum.maps.Map(container, options);
// 마커가 표시될 위치입니다 
var content = '<img src="contents/img/map-logo.svg" /> ';
// 커스텀 오버레이가 표시될 위치입니다 
var position = new daum.maps.LatLng(37.5166363,127.0251637);  
// 커스텀 오버레이를 생성합니다
var customOverlay = new daum.maps.CustomOverlay({
    position: position,
    content: content,
    xAnchor: 0.3,
    yAnchor: 0.91
});
// 커스텀 오버레이를 지도에 표시합니다
customOverlay.setMap(map);
			
// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new daum.maps.ZoomControl();
map.addControl(zoomControl, daum.maps.ControlPosition.LEFT);