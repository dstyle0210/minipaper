##CSS의 기초 - 기본값(initial)과 부모상속(inherit)

### 기본값(initial)

[CSS의 우선순위](../step1/02_Priority.md)에 따라 부모의 속성들이 오버라이딩 되었지만, 자신의 기본속성을 사용하고자 할때가 있습니다.  
그럴때 사용하는 값으로 이니셜을 사용하게 되는데, 자신의 기본값을 "재반영" 하게 됩니다.  
즉 우선순위를 재정의하여 오버라이딩 적용하게 되도록 처리 합니다.

하지만 현재 대부분의 브라우저가 지원하고 있지 않기 떄문에 거의 사용성이 떨어집니다.

```html
<style>
    div{font-style:italic;} /* div 안의 내용을 이텔릭체(기울림체)로 바꾼다 */
    strong{font-style:initial;} /* font-style을 재정의하여 기본값인 "normal"이 적용된다 */
</style>
<div><strong>테스트</strong></div>
```

### 부모상속(inherit)
CSS는 자동으로 상속성이 존재하여 자식에게 속성이 반영되지만, 우선순위가 매우낮습니다.
그렇기 때문에, 부모의 속성을 적용하면서도, 우선순위를 높이기 위해서 사용합니다.

이 속성은 최근에(IE8 이상)야 정상적으로 반영이 되기 시작했습니다.

```html
<style>
    *{font-weight:normal;} /* 모든 엘리먼트의 굵기를 기본굵기로 적용. */
    div{font-weight:bold;} /* div 안의 텍스트의 굵기를 두껍게 바꾼다 */
    i{font-weight:inherit;} /* font-weight 재정의하여 부모값인 "bold" 가 적용된다 */
</style>
<div>아이 밖에 있어요.<i>아이 안에 있어요.</i></div>
```
