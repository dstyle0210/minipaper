##CSS의 기초 - 미디어의 종류(Media)

### CSS의 미디어 ( @media Rule )
CSS는 다양한 미디어를 대상으로 하고 있고, 다양함 이라는 것은 스크린에만 국한하지 않습니다.
PC의 모니터, 핸드폰의 디스플레이 뿐만 아니라, TV 및 인쇄물까지도 포함하며, 과거에는 2G폰이라고 부르는 
16비트 화면(WML)에도 쓰였습니다.

하지만 이제는 대표적으로 사용하는 분야는 "screen" 과 "print" "speech" 3가지만 남았고,
대부분의 레이아웃 방식은 3가지에 맞추어 진행하게 됩니다.

#### 호환
- all : 전체 선택
- screen : 브라우저를 통한 디스플레이
- print : 프린터를 통한 디스플레이
- speech : 스크린리더을 통한 디스플레이

#### 사용법
```css
@media not|only mediatype and (media feature) {
    CSS-Code;
}
```
또는
```html
<link rel="stylesheet" media="mediatype and|not|only (media feature)" href="mystylesheet.css">
```