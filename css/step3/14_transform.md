##CSS의 기초 - 텍스트 변형(text-transform)

영어의 대,소문자를 임의 변형 합니다.


### word-break
- 기본값 : 부모상속됨
- 자식상속 : 상속됨
- 작성방법 : `text-transform: none|capitalize|uppercase|lowercase;`

#### 주로 쓰이는 값
값 | 설명
---| ----
capitalize | 영문의 단어의 첫자만 대문자로 적용합니다.
uppercase | 영문을 모두 대문자로 적용합니다.
lowercase | 영문을 모두 소문자로 적용합니다.

#### 거의 안쓰이는 값
값 | 설명
---| ----
none | 쓰여진 그대로 적용됩니다.


#### 실무 포인트
- 보이는 영역에 대해서 변형을 하지만, 스크립트로 가져오는 등의 실제 텍스트는 변형되지 않습니다. 