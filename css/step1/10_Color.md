##CSS의 기초 - 색상(Color)

CSS에서 색상을 지정할때는 총 3가지 방법을 지원합니다.
- 허용된 컬러이름.(red , blue 등)
- RGB 또는 RGBA방식 == rgb(0,0,0,0)
- HEX(Hexadecimal)값 방식 == #RRGGBB (RR == 00~FF)

대부분 컬러지정은 HEX방식을 많이 사용하는데, 가장 명확하기도 하고, HEX값 약자 방식으로 적용도 가능하기 떄문입니다.

### HEX값(#RRGGBB) 설명
```css
body{color:#000000}
span{color:#ff6600;background-color:#fff}
```

HEX값은 맨 앞에 "#"(샾)이 붙으며, 이후 00(검은색) ~ FF(흰색) 까지의 255자로 두단어씩 총 RGB 를 표현하게 됩니다.
컬러을 지정할때 컬러의 값을 알아내기 위하여, 포토샵 프로그램을 많이 사용하는데, 포토샵에서 HEX방식으로 컬러값을 제공해주기 때문에 HEX을 사용하는 이유도 있습니다.
투명도을 조절하는 경우가 아니라면 대부분은 HEX값으로 지정하게 됩니다. 

### HEX 약자적용
```css
body{color:#000000} /* 약자사용가능 */
body{color:#000}

span{color:#ff6600} /* 약자사용가능 */
span{color:#f60}

div{background:#ff01af}
div{background:#f01af} /* RR이 겹친다고 한단어만 사용할수는 없다 */
```
HEX값 적용시, RR,GG,BB 의 코드 부분이 동일한 문자로 연속될경우 약자로 사용이 가능합니다.
단 RGB중 하나만 중복되는 경우에는 적용되지 않습니다.