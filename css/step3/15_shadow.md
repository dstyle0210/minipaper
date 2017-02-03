##CSS의 기초 - 그림자(text-shadow)

텍스트에 그림자 효과를 적용합니다.


### text-shadow
- 기본값 : none
- 상속성 : 있음
- 작성방법 : `text-shadow: h-shadow v-shadow blur-radius color|none;`

#### 주로 쓰이는 값
값 | 설명
---| ----
h-shadow | [단위](../step1/11_Unit.md)로 그림자의 가로 위치를 지정합니다.(기본 : 0)
v-shadow | [단위](../step1/11_Unit.md)로 그림자의 세로 위치를 지정합니다. (기본 : 0)
blur-radius | [단위](../step1/11_Unit.md)로 얼마나 흐릿하게 만들지 지정합니다.(기본 1)
color | 적용될 그림자의 [색상](../step1/10_Color.md)을 지정합니다.(기본 : #000 )

#### 거의 안쓰이는 값
값 | 설명
---| ----
none | 그림자를 적용하지 않습니다.


#### 실무 포인트
- 본 속성은 대부분 마우스 오버시 약간 강조해주는 정도의 역활을 합니다.  