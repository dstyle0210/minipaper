##CSS의 기초 - 레이아웃 방법(Layout Type)

대부분 CSS로 레이아웃을 작성하는 경우 아래의 3가지를 이용하게 됩니다.
물론 퍼블리셔의 성향이나, 개발방법, UI동작 방식에 따라 다르게 적용됩니다.


### 플로트(float) 레이아웃
![float](http://tutorial.techaltum.com/images/css-float-clear.jpg)  
(출처 : techaltum.com )
플로트는 block요소에대한 정렬을 하게 되는데, 좌측과 우측으로만 적용할수 있습니다.  
특히나 플로트 레이아웃은 클리어(clear)라는 개념과, 해즈레이아웃(haslayout)이라는 개념을 이해해야 정확하게 사용할수 있습니다. 


### 포지션(position) 레이아웃
![포지션](http://www.jegsworks.com/examples/DemoCSS/position.png)
포지션 레이아웃은 공간에 block요소를 띄워서 적용한다고 생각하거나(absolute) 또는 독립적인 공간(relative)을 만들어 낸다고
생각하면 편합니다. 포지션 레이아웃은 절대적(absolute)와 상대적(relative) 그리고 제트인덱스(z-index)개념이 필요합니다.


### 플랙스(flex) 레이아웃
가장 최근에 나온 레이아웃 기법이고, 모바일 프로젝트를 하게되면 아마 가장 많이 보게되실 코드일겁니다.
플랙스 레이아웃을 할때는 디렉션(direction, 방향) 과 정렬(align) 그리고 아이템(items) 이라는 개념이 가장 우선됩니다.  
샘플 : http://codepen.io/enxaneta/pen/adLPwv