##CSS의 기초 - 패딩(padding) , 마진(margin)

패딩은 패딩조끼 처럼 특정 영역 안에 존재하는 공간 처럼 컨덴츠와 블럭요소의 안쪽 영역을 지정합니다.
마진은 밀어 낸다는 뜻 처럼 엘리먼트와 엘리먼트 사이의 간격을 지칭합니다. 

![박스모델](http://www.cssterm.com/uploads/images/box_model.gif)
(출처 - www.cssterm.com)

### 패딩(padding)
컨덴츠와 블럭요소의 안쪽 영역으로 마진과의 가장 큰 차이점은 배경이 보여질 영역에 포함이 되고, border보다 안쪽에 적용됩니다.
- 기본값 : 0
- 자식상속 : 안함
- 작성방법 : `padding: length | top right bottom left;`

#### padding-top , padding-left , padding-bottom , padding-right
padding의 각각 방향에 대한 값을 개별로 설정합니다.
- 기본값 : 0
- 자식상속 : 안함
- 작성방법 : `padding-top: length;`


### 마진(margin)
블럭요소의 외부 영역으로 패딩과의 가장 큰 차이점은 배경이 보여질 영역에 포함이 안되고, border보다 밖에 적용됩니다.
- 기본값 : 0
- 자식상속 : 안함
- 작성방법 : `margin: length | top right bottom left;`

#### margin-top , margin-left , margin-bottom , margin-right
margin의 각각 방향에 대한 값을 개별로 설정합니다.
- 기본값 : 0
- 자식상속 : 안함
- 작성방법 : `margin-top: length;`



#### padding과 margin 의 단축속성 순서

