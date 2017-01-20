##CSS의 기초 - 적용방법(How To)

CSS을 HTML에 적용하는 방법은 총 3가지 방법이 있습니다.

### link 엘리먼트 이용.
```html
<link rel="stylesheets" href="CSS경로" />
```
일반적으로 사용하는 방법이며, CSS가 필요한 모든 HTML페이지에 선언해주면, CSS파일을 수정하는것만으로도,
적용된 모든 HTML페이지가 수정되는 방법입니다.

### "style" 엘리먼트에 직접 선언
```html
<style>
body{color:red;}
</style>
```
특정 HTML페이지에서만 사용하지만, 해당 HTML페이지 안에서 많이 사용한다면, &lt;style> 엘리먼트를 이용해서 선언하고 사용하는 방법이 주로쓰입니다.


### 적용될 엘리먼트에 inline 선언
```html
<div style="color:red"></div>
```
특정 엘리먼트에만 적용하려면, style 어트리뷰트를 사용하여 적용합니다. 이 방법은 [우선순위](./02_Priority.md)에서도 우선도가 높기 때문에,
반복되진 않지만 엘리먼트에 특정스타일을 입힐때 주로 사용합니다.

---

###CSS에서 CSS파일을 가져오기(@import)
```css
@import "CSS경로";
```
CSS에서는 CSS파일에서 다른 CSS파일을 가져올수 있는 방법도 제공합니다.
위와 같은 방법으로 CSS파일들 끼리 가져오는것이 가능합니다.
