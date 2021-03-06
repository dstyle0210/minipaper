##CSS의 기초 - 박스모델(Box Model)

HTML 엘리먼트는 block , inline-block , inline , none 이라는 4가지의 외형구조를 가지고 있습니다.
이 4가지의 외형구조는 CSS의 display의 기본값으로 적용되지만, CSS을 통해서 엘리먼트의 외형구조를 바꿀수도 있습니다.

그 중, block요소에 해당하는 부분에 대하여 설명합니다.

![박스모델](http://www.cssterm.com/uploads/images/box_model.gif)
(출처 - www.cssterm.com)

- Content : 내부의 내용을 말합니다. 물론 다른 엘리먼트가 들어올수도 있습니다.
- Padding : 컨덴츠와 보더사이의 간격입니다. 배경의 영향을 받습니다.
- border : 컨덴츠와 패딩을 포함한 영역의 내곽선입니다. 가로값의 영향을 받습니다.
- Margin : 보더와 외부 엘리먼트의 간격입니다. 배경의 영향을 받지않습니다.
- outline : 컨덴츠와 패딩 및 보더를 포함한 포함한 외곽선입니다. 가로값의 영향을 받지 않습니다.


Inline Box Model
박스모델을 설명할때와 마찬가지로, 텍스트는 가상의 박스모델을 가지고 적용이 됩니다.
이 가상의 박스모델은 텍스트의 특성에 맞추어져 있는데, 대표적으로 padding과 margin의 상,하단 값은 무시되며,
가로 및 높이를 가질수 없습니다. 하지만 좌우의 padding 및 margin을 가질수 있습니다.


anonymous Box Model(가상의 박스모델)
앞으로 배울 플랙스 레이아웃에서 가장 많이 설명되지만, 어떠한 상황에든 적용됩니다.
가상의 컨테이너는 실제로는 구조가 없지만, 구조가 있는것처럼 속성이 적용되는 것을 말합니다.






