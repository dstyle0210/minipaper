##CSS의 기초 - 포지션 위치값(position direction)

포지션이 적용되는 요소의 배치위치를 결정합니다. 좌우, 상하를 따로 적용할수 있으며,
포시션의 성격에 따라 적용되는 방식이 달라집니다.

### top
- 기본값 : auto
- 상속성 : 없음
- 작성방법 : `top: auto|length|initial|inherit;`

### right
- 기본값 : auto
- 상속성 : 없음
- 작성방법 : `right: auto|length|initial|inherit;`

### bottom
- 기본값 : auto
- 상속성 : 없음
- 작성방법 : `bottom: auto|length|initial|inherit;`

### left
- 기본값 : auto
- 상속성 : 없음
- 작성방법 : `left: auto|length|initial|inherit;`


#### position:absolute 또는 fixed 일 때의 배치
- 배치요소의 기준점은 부모요소(fixed일경우 body요소)의 각 변를 기준한다.
- (left | top) 과 (right | bottom) 이 동시적용이 가능하다.
- (left | top) 과 (right | bottom) 이 동시적용이 되면 (width | height) 가 발생한다.
- 발생된 (width | height) 는 각 __(부모의 사이즈 - 배치값)__이며 이는 width의 기본값인 "auto" 에서 파생된것이다.
- 만약 (width | height)가 선언될경우, (right | bottom) 값이 무시된다.
 
#### position:relative 일 때의 배치
- 배치요소의 기준점은 자신의 요소의 각 변를 기준한다.
- (left | top) 과 (right | bottom) 이 동시적용이 되면 (left | top) 값이 적용된다.
- (left | top) 과 (right | bottom) 이 동시적용되면, (width | height) 가 발생한다.
- 발생된 (width | height) 는 각 __부모의 사이즈__ 이며 이는 width의 기본값인 "auto" 에서 파생된것이다.

#### position:static 일 때
- 배치요소가 적용되지 않는다.