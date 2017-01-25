##CSS의 기초 - 박스모델(Box Model)

HTML 엘리먼트는 block , inline-block , inline , none 이라는 4가지의 외형구조를 가지고 있습니다.
이 4가지의 외형구조는 CSS의 display와 호환이 되는 것인데, display의 형태에 따라 선언이 되는 속성이 다릅니다.

그 중, block요소에 해당하는 부분에 대하여 설명합니다.

![박스모델](http://www.cssterm.com/uploads/images/box_model.gif)
(출처 - www.cssterm.com)

Content : 내부의 내용을 말합니다. 물론 다른 엘리먼트가 들어올수도 있습니다.
Padding : 컨덴츠와 보더사이의 간격입니다. 배경의 영향을 받습니다.
border : 컨덴츠와 패딩을 포함한 영역의 내곽선입니다. 가로값의 영향을 받습니다.
Margin : 보더와 외부 엘리먼트의 간격입니다. 배경의 영향을 받지않습니다.
outline : 컨덴츠와 패딩 및 보더를 포함한 포함한 외곽선입니다. 가로값의 영향을 받지 않습니다.



