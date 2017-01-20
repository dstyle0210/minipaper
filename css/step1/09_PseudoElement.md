##CSS의 기초 - 셀렉터(Selector) - Pseudo Element

Pseudo Element(피도 엘리먼트) 는 엘리먼트의 내부에 특정한 조건이나, 엘리먼트의 외부에 조건을 생성하여 적용됩니다.
셀렉터의 시작은 :: 로 시작합니다.

### 주로쓰는 피도 엘리먼트

#### Selector::before or Selector:before
```css
.clearfix::before{}
```
선택된 엘리먼트의 자식엘리먼트 보다 우선하여 가상의 속성을 적용합니다. 개발자 도구로 확인하면 "::before" 라는 선택자로 표기됩니다.

#### Selector::after or Selector:after
```css
.clearfix::after{}
```
선택된 엘리먼트의 자식엘리먼트 보다 맨 뒤에 가상의 속성을 적용합니다. 개발자 도구로 확인하면 "::after" 라는 선택자로 표기됩니다.


### 존재는 하나 주로쓰지는 않음.

#### Selector::first-line
엘리먼트 내의 내용중, 첫번째 줄에만 적용됩니다.

#### Selector::first-letter
엘리먼트 내의 내용중, 첫번째 단어에만 적용됩니다.

#### Selector::selection
마우스로 드래그 또는 포커스 상태에서 시프트+화살표키를 이용하여 만들어진 선택영역(셀렉션)에 대한 스타일을 지정합니다.







