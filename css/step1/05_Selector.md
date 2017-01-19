##CSS의 기초 - 셀렉터(Selector) - Basic

### 선택자 셀렉터

#### Universal Selector (*)

```css
*{color:red;}
```

해당 셀렉터는 모든 엘리먼트를 선택합니다. 모든 엘리먼트의 글자는 빨간색으로 지정하겠다 라는 말이 됩니다.

ㅡㅡㅡ

#### Element Selector

```css
E{color:red;}
```
본 구문은 h1엘리먼트을 선택(셀렉트)해서 글자색상을 빨간색으로 적용하겠다는 선언부입니다.
HTML에 포함된 어떤 엘리먼트든 가져올수 있으며, 커스텀된 즉 HTML이 아닌 엘리먼트여도(test라던가) HTML내에 있다면 적용됩니다.

ㅡㅡㅡ

#### id Selector(#)

```css
#id{border:2px solid orange; }
```

본 구문은 엘리먼트와 무관하게, id가 "test"인 엘리먼트에 적용하겠다는 선언부 입니다.
물론 이것도 커스텀엘리먼트여도, id가 선언되어있다면 적용됩니다.

ㅡㅡㅡ
#### Class Selector(.)

```css
.class{background-color:gray;}
```

본 구문은 엘리먼트와 무관하게 class가 "test"인 엘리먼트에 적용됩니다.

ㅡㅡㅡ

####  group Selector(,)
```css
h1 , #id , .class{color:red; }
```

눈치가 빠르신 분들은 아시겠지만, "," 로 나뉘어진 모든 샐랙터에 속성을 적용하겠다는 선언입니다.
CSS는 그룹화 하여 선언하게 되면, 중복선언을 어느정도 줄일수 있습니다.



### 기초 검색 선택자

#### inside Selector ( ) // 빈칸

```css
h1 span{border:1px solid #000;}
```

inside 라는 말처럼 h1엘리먼트 안에 있는 span엘리먼트에 적용하겠다는 말입니다.

ㅡㅡㅡ

#### Child Selector(>)

```css
h1>span{background-color:gray}
```

h1엘리먼트의 하위 자식에게 적용되는 셀렉터 입니다.

ㅡㅡㅡㅡ

#### After Selector(+)

```css
h1+span{width:500px;}
```

h1엘리먼트에 다음순서에 나오는 엘리먼트가 span이라면 적용됩니다.

ㅡㅡㅡㅡ

#### Preceded Selector(~)

```css
h1~span{width:300px}
```

after 셀렉터와 반대개념입니다.
즉 h1엘리먼트 이전에 span이 있으면 적용됩니다.