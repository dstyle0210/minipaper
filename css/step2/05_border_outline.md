##CSS의 기초 - 보더(border) , 아웃라인(outline)

모든 CSS요소는 보더 및 아웃라인을 가질수 있습니다.
둘다 요소의 컨덴츠 및 패딩 밖에 라인이 나오도록 처리는데, 보더요소는 레이아웃 요소로서 보더의 굵기 만큼 가로값을 가지는데 반해,
아웃라인은 가지지 않습니다. 그렇다 보니, 산술적으로 영역을 지정하는데는 border가 일반적으로 더 편하기 떄문에, 대부분은 border로 레이아웃을 구현합니다.

![보더아웃라인](https://i.stack.imgur.com/89JK1.gif)
(출처 - http://stackoverflow.com/)

### border
컨덴츠와 패딩의 외부에 작성되는 선입니다.
- 기본값 : none
- 자식상속 : 안함
- 작성방법 : `border: border-width border-style border-color;`

#### border-top , border-left , border-bottom , border-right
border의 각각 방향에 따른 값을 개별로 지정합니다.
- 기본값 : none
- 자식상속 : 안함
- 작성방법 : `border-top: border-width border-style border-color;`


### outline
보더영역의 밖으로 선을 지정합니다. offset 이라는 속성으로 간격을 줄수도 있습니다.
- 기본값 : 0
- 자식상속 : 안함
- 작성방법 : `outline: outline-color outline-style outline-width;`

#### outline-top , outline-left , outline-bottom , outline-right
outline의 각각 방향에 따른 값을 개별로 지정합니다.
- 기본값 : 0
- 자식상속 : 안함
- 작성방법 : `outline-top: outline-width outline-style outline-color;`

#### outline-offset
border와 outline의 간격을 설정합니다.
- 기본값 : 0
- 자식상속 : 안함
- 작성방법 : `outline-offset: length;`