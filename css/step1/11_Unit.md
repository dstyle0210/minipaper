##CSS의 기초 - 단위(Unit)

CSS에서 적용되는 단위에는 절대적인 단위와 상대적인 단위로 나뉘어 지며,
절대적이라고 함은 모니터용 과 인쇄용, 상대적이라고 함은 root(window)라는 개념과, parent라는 개념으로 나뉘게 됩니다.

### 절대적인 단위(모니터용)
- _px : 픽셀(가장 기본적인 사용)_
- pc : 파이카(1pc == 12pt == 1/6in)
- pt : 포인트(1/72in)

### 절대적인 단위(인쇄용)
- cm : 센티미터
- mm : 밀리미터
- in : 인치

### 상대적인 단위(parent 기반 상대사이즈)
- _em : 부모의 font-size을 1em 으로 적용하며, 부모의 폰트사이즈가 늘어나면 함께 들어난다._
- _% : 부모의 width을 100%로 적용하며, 부모의 width가 늘어나면 함께 늘어난다._
- ch : "0" (숫자 0) 의 가로값을 기반으로 적용되는 사이즈.
- ex : "x" (영문 소문자 x) 의 높이값을 기반으로 적용되는 사이즈.

### 상대적인 단위(root 기반 상대사이즈)
- _rem : root 즉 body의 font-size을 1rem으로 기반하여, 절대사이트로 적용._
- vw : window의 viewport width을 기준하여 절대 적용됩니다.(그냥 window width의 1/100)
- vh : window의 viewport height 기준하여 절대 적용됩니다.(그냥 window height의 1/100)
- vmin : window의 width 또는 height 중 작은 사이즈의 1/100
- vmax : window의 width 또는 height 중 큰 사이즈의 1/100




