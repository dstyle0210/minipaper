##CSS의 기초 - 미디어쿼리

### 미디어쿼리 조건
- 뷰포트상의 가로와 세로
- 디바이스의 가로와 세로
- 회전값(orientation) :  landscape or portrait
- 해상도(resolution)

### 기본선언법
```
@media not|only 미디어타입 and (조건) {
    CSS-Code;
}
```
```
<link rel="stylesheet" media="mediatype and|not|only (expressions)" href="print.css">
```