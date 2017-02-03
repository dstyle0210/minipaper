##CSS의 기초 - 폰트명(font-family)

웹에 사용될 폰트명을 지정합니다. 지정되지 않으면, 브라우저의 기본 폰트로 설정이 되고,
지정하게 되면 해당 폰트명을 검색하여 반영합니다. 만약 지정폰트명이 없으면, 브라우저의 폰트명을 상속받게 됩니다.

폰트에는 두가지 종류가 있는데, 형태를 기준하는 제너릭명(generic-family) 방식과 실제 폰트명(font-name) 방식이 있습니다.

### font-family
- 기본값 : 브라우저의 기본폰트
- 상속성 : 있음
- 작성방법 : `font-family: (제너릭명 | 폰트명)+|initial|inherit;`

#### 제너릭명?
폰트는 글자의 형태에 따라 크게 3가지 로 지칭합니다.
- Serif(쉐리프) : 곡선을 주로 사용하여 작성된 폰트 스타일들 (예 : 	Times New Roman , Georgia)
- Sans-serif(산쉐리프) : 직선을 주로 사용하여 작성된 폰트 스타일들 (예 : 	Arial , Verdana)
- Monospace(모노스페이스) : 곡선과 직선을 혼합하여 작성된 폰트 스타일들 (예 : Courier New , Lucida Console)

#### 다양한 폰트설정
```css
body{font-family:"Nanum Gothic","나눔고딕","Malgun Gothic","맑은고딕",Dotum,"돋움",Gulim,"굴림","Helvetica Neue",Helvetica,Tahoma,Verdana,"Trebuchet MS",Arial,Apple-Gothic,Sans-serif;}
```

#### QA
Q. 제너릭명으로 지칭했는데, 포함되는 폰트가 많다면, 어떤것이 적용되나요?  
A. 그건 브라우저에 설정된 폰트를 따라갑니다. 한글 윈도우7에 있는 크롬은 기본적으로 쉐리프 라면 "batang"(바탕체) 폰트를 사용합니다.  
A. 산쉐리프라면? "Malgun Gothic" (맑은고딕)  
A. 모노스페이스 라면? "GulimChe" (굴림체)  
---  
Q. 따움표로 감싸진것과 아닌것의 차이  
A. 폰트명이 "CJK" 이거나 "띄어쓰기"가 있는경우엔 따옴표를 넣게 됩니다.
 
 