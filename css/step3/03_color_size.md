##CSS의 기초 - 색상(Color) , 

[색상을 지정하는 방법](./step1/10_Color.md)으로 텍스트의 컬러를 지정합니다.
RGBA을 이용하면 투명도 까지도 조절이 가능합니다.

### color
- 기본값 : 부모의 컬러값 상속
- 자식상속 : 상속됨
- 작성방법 : `color: HEX(#RRGGBB) | String | RGBA;`

#### 실무 포인트
- 컬러는 대부분 HEX코드를 이용하여 지정합니다.


##CSS의 기초 - 크기(size)

텍스트의 크기를 지정합니다.

### font-size
- 기본값 : 부모상속
- 자식상속 : 상속됨
- 작성방법 : `font-size:medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|length;`

#### 주로 쓰이는 값 
값 | 설명
---| ----
length | 텍스트의 크기를 [단위](./step1/11_Unit.md)로 입력합니다.

#### 거의 안쓰이는 값
값 | 설명
---| ----
medium | 브라우저의 기본 폰트 사이즈로 적용됩니다. (설정이 없는 경우 크롬기준 16px 입니다.)
small | 작은사이즈로 적용 됩니다. (설정이 없는 경우 크롬기준 13px 입니다.)
smaller | "small" 과 동일합니다.
xx-small , x-small | 더 작은 사이즈로 적용되나, 10px이하로는 내려가지 않습니다.
large | 큰사이즈로 적용 됩니다. (설정이 없는 경우 크롬기준 18px 입니다.)
x-large | 더 큰사이즈로 적용 됩니다. (설정이 없는 경우 크롬기준 24px 입니다.)
xx-large |  더 큰사이즈로 적용 됩니다. (설정이 없는 경우 크롬기준 32px 입니다.)
larger | "large"와 동일합니다. 