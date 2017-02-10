##CSS의 기초 - 플랙스 영역 배치방법(justify-content)

플랙스 영역 내의 아이템들의 좌우정렬 방법을 설정합니다.

### align-content
- 기본값 : stretch
- 상속성 : 없음
- 작성방법 : `justify-content: flex-start|flex-end|center|space-between|space-around|initial|inherit;`

#### 주로쓰이는 값
값 | 설명
---| ----
flex-end | 아이템들을 디렉션의 end 방향을 기준하여 배치합니다.
center | 아이템들을 디렉션의 방향을 기준하여 가운데 배치합니다.
space-between | 아이템들을 디렉션의 방향을 기준하여 양쪽을 기준하여 나누어 배치합니다.
space-around | 아이템들을 디렉션의 방향을 기준하여 양쪽을 기준하여 동일하게 나누어 배치합니다.

#### 거의 안쓰이는 값
값 | 설명
---| ----
flex-end | 아이템들을 디렉션의 start 방향을 기준하여 배치합니다.


#### 꼭 기억하세요.
- inline 기준한다면 text-aline 과 동일한 기능입니다.

