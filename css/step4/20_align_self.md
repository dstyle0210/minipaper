##CSS의 기초 - 플랙스아이템 상하정렬(align-self)

플랙스 아이템 각각의 정렬 방법을 설정합니다.

### align-self
- 기본값 : auto
- 상속성 : 없음
- 작성방법 : `align-self: auto|stretch|center|flex-start|flex-end|baseline|initial|inherit;`

#### 주로쓰이는 값
값 | 설명
---| ----
stretch | 부모요소의 사이즈만큼 늘어나도록 처리합니다.
center | 아이템을 부모요소의 디렉션의 방향을 기준하여 가운데 배치합니다.
flex-start | 아이템을 부모요소의 디렉션의 방향을 기준하여 시작점에 배치합니다.
flex-end | 아이템을 부모요소의 디렉션의 방향을 기준하여 종료점에 배치합니다.
baseline | 아이템을 부모요소의 디렉션의 방향을 기준하여 부모의 baseline에 맞추어 배치합니다.

#### 거의 안쓰이는 값
값 | 설명
---| ----
auto | 부모요소의 "align-items" 값을 상속받습니다.


#### 꼭 기억하세요.
- 본 속성은 부모요소의 "align-items"을 오버라이딩 합니다.