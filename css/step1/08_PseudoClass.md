##CSS의 기초 - 셀렉터(Selector) - Pseudo Class

Pseudo Class(피도 클래스) 라는것은 엘리먼트가 특정한 상태일때을 지칭합니다.
단독으로 사용할수는 있으나, 추천하지는 않으므로, 언제나 셀렉터에 연결하여 선언됩니다.

셀렉터의 시작은 : 로 시작합니다.

### 주로쓰는 피도 클래스

#### Selector:active
```css
a:active{color:red;}
```
선택된 엘리먼트가 활성화 상태일때 적용됩니다. 대표적으로 포커스가 들어간 a엘리먼트 같은 상태입니다.

#### Selector:link
```css
a:link{}
```
선택된 엘리먼트가 링크가능 상태일때 적용됩니다. 대표적으로 a 엘리먼트를 지칭합니다.

#### Selector:visited
```css
a:visited{}
```
엘리먼트에 선언된 링크에 방문한적이 있다면 적용 됩니다.

#### Selector:hover
```css
a:hover{}
```
선택된 엘리먼트에 마우스을 올리면(mouseover) 적용됩니다.

#### Selector:checked
```css
input[class=checkbox]:checked{}
```
선택된 엘리먼트가 체크상태(checked)일경우 적용됩니다.

#### Selector:disabled
```css
input[class=checkbox]:disabled{}
```
선택된 엘리먼트가 선택불가 상태(disabled) 일경우 적용됩니다.

#### Selector:focus
```css
input:focus{color:red;}
```
선택된 엘리먼트에 포커스가 들어간 상태로, 입력을 기다리는 상태면 적용됩니다.

#### Selector:first-child
```css
div p:first-child{}
```
선택된 엘리먼트가 부모 엘리먼트의 자식중 가장 처음에 있다면 적용됩니다.

#### Selector:last-child
```css
div p:last-child{}
```
선택된 엘리먼트가 부모 엘리먼트의 자식중 가장 마지막에 있다면 적용됩니다.

#### Selector:not(Selector)
```css
input:not(:checked){}
```
선택된 엘리먼트가 지정된 셀렉터의 조건에 맞지 않는 다면 적용됩니다.

#### Selector:nth-child(number | odd | even | n)
```css
div p:nth-child(2){}
```
선택된 엘리먼트가 부모 엘리먼트 중 지정된 순서에 맞는 엘리먼트에 적용됩니다. (1 부터 시작)

#### Selector:nth-last-child(number | odd | even | n)
```css
div p:nth-last-child(2){}
```
선택된 엘리먼트가 부모 엘리먼트 중 마지막 부터 지정된 순서에 맞는 엘리먼트에 적용됩니다. (1 부터 시작)

#### Selector:read-only
```css
input:read-only{}
```
선택된 엘리먼트에 "readonly" 속성이 있으면 적용됩니다.










ㅡㅡㅡ

### 존재는 하나 주로쓰지는 않음.

#### Selector:empty // IE 불가
선택된 엘리먼트안에 아무런 컨덴츠가 없는 경우 적용됩니다.

#### Selector:first-of-type(number)
선택된 엘리먼트가 부모엘리먼트에서 동일한 엘리먼트들 중 첫번째에 있다면 적용됩니다.

#### Selector:last-of-type(number)
선택된 엘리먼트가 부모엘리먼트에서 동일한 엘리먼트들 중 마지막에 있다면 적용됩니다.

#### Selector:nth-of-type(number)
선택된 엘리먼트가 부모엘리먼트에서 동일한 엘리먼트들 중 순서에 맞다면 적용됩니다.

#### Selector:in-range // IE불가
input에 min 및 max 어트리뷰트가 존재하고, value가 그 안의 값이라면 적용됩니다.

#### Selector:out-of-range // IE불가
input에 min 및 max 어트리뷰트가 존재하고, value가 그 밖의 값이라면 적용됩니다.

#### Selector:valid
input의 값이 지정된 형식(type)에 맞다면 적용됩니다. 형식은 pattern 및 type , min , max 을 모두 포괄합니다.

#### Selector:invalid
input의 값이 지정된 형식(type)에 맞지 않다면 적용됩니다. 형식은 pattern 및 type , min , max 을 모두 포괄합니다.

#### Selector:lang(languagecode)
선택된 엘리먼트에 선언된 언어형식이 맞다면 적용됩니다.

#### Selector:only-of-type
선택된 엘리먼트가 부모의 엘리먼트의 자식엘리먼트 중에 유일하게 있으면 적용됩니다.

#### Selector:only-child
선택된 엘리먼트만 부모의 엘리먼트의 유일하게 있으면 적용됩니다.

#### Selector:required
input에 "required" 속성이 있으면 적용됩니다.

#### Selector:optional
input에 "required" 속성이 없으면 적용됩니다.

#### Selector:read-write
input에 "readonly" 속성이 없으면 적용됩니다.

#### Selector:root
document에서 가장 최상위에 있는 엘리먼트를 선택합니다. , HTML입장에선 <html>엘리먼트 만 해당됩니다.

#### Selector:target
URL상으로 현재 선택되어진 엘리먼트에 적용됩니다.





