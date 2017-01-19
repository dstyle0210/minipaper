##CSS의 기초 - 셀렉터(Selector) - Attribute Selector

#### [attribute]

지정된 어트리뷰트를 가진 모든 엘리먼트를 검색하여 선언합니다.

##### 예제 와 적용범위

```css
[class]{color:red}
```
```html
<span class="test"></span> <-- 적용 -->
<span class="study"></span> <-- 적용 -->
<span class="test study"></span> <-- 적용 -->
<span class="test-study"></span> <-- 적용 -->
<span class="study test"></span> <-- 적용 -->
<span class="study-test"></span> <-- 적용 -->
```

ㅡㅡㅡㅡ

#### [attribute=value]

엘리먼트에 어트리뷰트가 있고, 값이 동일할 경우에 적용됩니다.

##### 예제 와 적용범위

```css
[class="test"]{color:red;}
```
```html
<span class="test"></span> <-- 적용 -->
<span class="study"></span> <-- 미적용 -->
<span class="test study"></span> <-- 미적용 -->
<span class="test-study"></span> <-- 미적용 -->
<span class="study test"></span> <-- 미적용 -->
<span class="study-test"></span> <-- 미적용 -->
```

ㅡㅡㅡㅡ

#### [attribute|=value]

어트리뷰트의 값이 value 이거나 value- 로 시작하는 경우 적용됩니다.
(Tip : 대표적으로 언어지정 어트리뷰트인 lang 의 사용형식이 "ko-kr" 같이 언어셋 이기 떄문에 필요합니다.)

##### 예제 와 적용범위

```css
[class|="test"]{color:red;}
```
```html
<span class="test"></span> <-- 적용 -->
<span class="study"></span> <-- 미적용 -->
<span class="test study"></span> <-- 미적용 -->
<span class="test-study"></span> <-- 적용 -->
<span class="study test"></span> <-- 미적용 -->
<span class="study-test"></span> <-- 미적용 -->
```

ㅡㅡㅡㅡ

#### [attribute^=value]

어트리뷰트의 값이 value 로 시작하면 적용됩니다.

##### 예제 와 적용범위

```css
[class^="test"]{color:red;}
```
```html
<span class="test"></span> <-- 적용 -->
<span class="study"></span> <-- 미적용 -->
<span class="test study"></span> <-- 적용 -->
<span class="test-study"></span> <-- 적용 -->
<span class="study test"></span> <-- 미적용 -->
<span class="study-test"></span> <-- 미적용 -->
```

ㅡㅡㅡㅡ

#### [attribute~=value]

어트리뷰트의 값이 value 가 "정확하게 포함" 이 되어있으면 적용됩니다.

##### 예제 와 적용범위

```css
[class~="test"]{color:red;}
```
```html
<span class="test"></span> <-- 적용 -->
<span class="study"></span> <-- 미적용 -->
<span class="test study"></span> <-- 적용 -->
<span class="test-study"></span> <-- 미적용 -->
<span class="study test"></span> <-- 적용 -->
<span class="study-test"></span> <-- 미적용 -->
```



#### [attribute*=value]

어트리뷰트의 값이 value 가 "포함" 이 되어있으면 적용됩니다.

##### 예제 와 적용범위

```css
[class*="test"]{color:red;}
```
```html
<span class="test"></span> <-- 적용 -->
<span class="study"></span> <-- 미적용 -->
<span class="test study"></span> <-- 적용 -->
<span class="test-study"></span> <-- 적용 -->
<span class="study test "></span> <-- 적용 -->
<span class="study-test "></span> <-- 적용 -->
```

ㅡㅡㅡㅡ

#### [attribute$=value]

어트리뷰트의 값이 value 가 마지막에 있으면 적용됩니다.

##### 예제 와 적용범위

```css
[class$="test"]{color:red;}
```
```html
<span class="test"></span> <-- 적용 -->
<span class="study"></span> <-- 미적용 -->
<span class="test study"></span> <-- 미적용 -->
<span class="test-study"></span> <-- 미적용 -->
<span class="study test "></span> <-- 적용 -->
<span class="study-test "></span> <-- 적용 -->
```