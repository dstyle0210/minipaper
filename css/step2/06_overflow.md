##CSS의 기초 - 오버플로우(Overflow)

오버플로우는 플로우(흐름)에서 벗어난(오버) 부분에 대해 처리 방안에 대해 설정합니다.
블럭요소는 가로와 세로를 가질수 있으니, 반대로, 벗어나는 부분에 대해서 처리하는 방법에 대해 정의하는 부분입니다.

![오버플로우](https://i-msdn.sec.s-msft.com/dynimg/IC700918.png)
(출처 - MSDN)

### overflow
블럭 요소에서 벗어나는 부분에 대하여 설정합니다.
- 기본값 : visible
- 자식상속 : 안함
- 작성방법 : `overflow: visible | hidden | scroll | auto;`

#### overflow-x , overflow-y
블럭에서 벗어나는 부분 중, X좌표(가로) , Y좌표(세로)에 대하여 설정합니다.
- 기본값 : visible
- 자식상속 : 안함
- 작성방법 : `overflow-x: visible | hidden | scroll | auto;`