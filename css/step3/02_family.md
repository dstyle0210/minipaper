##CSS의 기초 - 폰트명(Family)

웹에 사용될 폰트명을 지정합니다. 지정되지 않으면, 브라우저의 기본 폰트로 설정이 되고,
지정하게 되면 해당 폰트명을 검색하여 반영합니다. 만약 지정폰트명이 없으면, 브라우저의 폰트명을 상속받게 됩니다.

### font-family
- 기본값 : 부모의 폰트명 상속
- 자식상속 : 상속됨
- 작성방법 : `font-family: (폰트스타일명 | 폰트명)+`

#### 폰트스타일명?
폰트는 글자의 형태에 따라 크게 3가지 로 지칭합니다.
- Serif(쉐리프) : 곡선을 주로 사용하여 작성된 폰트 스타일(예 : 	Times New Roman , Georgia)
- Sans-serif(산쉐리프) : 직선을 주로 사용하여 작성된 폰트 스타일(예 : 	Arial , Verdana)
- Monospace(모노스페이스) : 곡선과 직선을 혼합하여 작성된 폰트 스타일(예 : Courier New , Lucida Console)

#### 다양한 폰트설정
```css
body{font-family:"Nanum Gothic","나눔고딕","Malgun Gothic","맑은고딕",Dotum,"돋움",Gulim,"굴림","Helvetica Neue",Helvetica,Tahoma,Verdana,"Trebuchet MS",Arial,Apple-Gothic,Sans-serif;}
```

