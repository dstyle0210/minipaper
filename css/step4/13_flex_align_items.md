##CSS의 기초 - 플랙스 아이템 상하정렬(align-items)

플랙스 영역 내의 아이템의 정렬기준을 설정합니다.

### align-items
- 기본값 : stretch
- 상속성 : 없음
- 작성방법 : `align-items: stretch|center|flex-start|flex-end|baseline|initial|inherit;`

#### 주로쓰이는 값
값 | 설명
---| ----
stretch | 부모요소의 높이에 아이템의 높이를 맞춥니다. 굳이 표현하자면 상하정렬 입니다. 아이템의 높이값은 무시됩니다.
flex-start | 부모요소의 상단에 아이템을 정렬합니다.

#### 거의 안쓰이는 값
값 | 설명
---| ----
flex-end | 부모요소의 하단에 아이템을 정렬합니다.
baseline | 부모의 텍스트의 baseline에 정렬합니다.


#### 꼭 기억하세요.
- align-items는 아이템의 정렬을 설정합니다.

