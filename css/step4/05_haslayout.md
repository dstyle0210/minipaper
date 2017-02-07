##CSS의 기초 - 해즈레이아웃(haslayout)의 개념

clear는 DOM의 흐름상 플로트된 요소의 아래에 있을수 밖에 없습니다.
하지만, 실무에서는 플로트된 요소를 클리어 하는것보다는 영역을 지정하는 `.clearfix` 라는 CSS 클래스를 미리 만들어 선언합니다.

```css
.clearfix{*zoom:1}
.clearfix:after,.clearfix:before{display:table;content:"";line-height:0}
.clearfix:after{clear:both}
```

### Has Layout
IE에서 공식적으로 나온 개념으로 , 요소에 대하여 배치의 한계 및 배치의 영역을 지정하는 것.

플로트는 공중에 약간 붕 뜬 개념으로 접근해야 하는데, 이유는 인라인요소에 대해 영향을 주기 떄문에,
'플로트요소는 인라인요소의 영역를 밀어낸다' 라는 개념과, '공간에 대한 개념'이 겹치면서 발생했다.

### 해즈레이아웃 적용 범위
- float요소 배치영역 한정
- margin영역 한정 (IE 더블마진버그)
- 타 브라우져와 layout 범위 동기화

### 해즈레이아웃이 적용되는 속성
- position:absolute;
- float:left|right
- display:inline-block
- width:'auto'외의 값
- height:'auto'외의 값
- zoom:'normal'외의 값
- writing-mode:tb-rl(ie전용)
- overflow:hidden | scroll | auto(ie7만 적용)
- overflow-x,overflow-y:hidden | scroll | auto(ie7만 적용)