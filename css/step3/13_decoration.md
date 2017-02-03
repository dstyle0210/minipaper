##CSS의 기초 - 데코레이션(Decoration)

텍스트의 윗줄 , 밑줄 , 가운데줄(삭제선)에 대해서 설정합니다.


### word-break
- 기본값 : 부모상속됨
- 자식상속 : 상속됨
- 작성방법 : `text-decoration: none|underline|overline|line-through;`

#### 주로 쓰이는 값
값 | 설명
---| ----
none | 꾸밈요소를 적용하지 않습니다.
underline | 밑줄을 적용합니다.
line-through | 가운데줄(삭제선)을 적용합니다.

#### 거의 안쓰이는 값
값 | 설명
---| ----
overline | 윗줄을 적용합니다.


#### 실무 포인트
- a링크는 기본이 밑줄 이지만, 이 속성과 , :hover 셀렉터를 통해서 마우스 오버시 밑줄효과를 만듭니다.

