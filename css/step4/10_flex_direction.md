##CSS의 기초 - 플랙스 위치값(flex-direction)

플랙스 영역 내의 아이템 정렬위치를 설정합니다.

### flex-direction
- 기본값 : row
- 상속성 : 없음
- 작성방법 : `flex-direction: row|row-reverse|column|column-reverse|initial|inherit;`

#### 주로쓰이는 값 
값 | 설명
---| ----
row | 아이템을 좌->우 로 배치합니다.
column | 아이템을 상->하 로 배치합니다.

#### 거의 안쓰이는 값
값 | 설명
---| ----
row-reverse | 아이템을 우->좌 로 배치합니다.
column-reverse | 아이템을 하->상 으로 배치합니다.


#### 꼭 기억하세요.
- [플랙스 줄바꿈방법(flex-wrap)](../step4/11_flex_wrap.md)이 없다면, 모든 아이템은 한줄로 표시됩니다.  
