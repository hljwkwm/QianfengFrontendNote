# 溯本求源_2

### 1、浏览器前缀

浏览器厂商以前就一直在实施CSS3，但它还未成为真正的标准。为此，当有一些CSS3样式语法还在波动的时候，他们提出了针对浏览器的前缀。通过前缀可以针对旧的浏览器做兼容，新浏览器基本不需要添加前缀。

| 浏览器        | 内核    | 前缀     |
| ------------- | ------- | -------- |
| IE            | Trident | -ms-     |
| Firefox       | Gecko   | -moz-    |
| Opera         | Presto  | -o-      |
| Chrome        | Webkit  | -webkit- |
| Safari        | Webkit  | -webkit- |
| Opera、Chrome | Blink   |          |

这些前缀不必手动刻意去加，可以通过工程化CSS的方式，通过工具来加，比如postcss、

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    /* div{ width:200px; height:200px; background:red;
        animation: 1s move;
    }

    @keyframes move{
        0%{ opacity : 0;}
        100%{ opacity : 1;}
    } */

   /*  div{ width:200px; height:200px; background:red;
        -webkit-animation: 1s move;
    }

    @-webkit-keyframes move{
        0%{ opacity : 0;}
        100%{ opacity : 1;}
    } */

    div{ width:200px; height:200px; background:red;
        -ms-animation: 1s move;
    }

    @-ms-keyframes move{
        0%{ opacity : 0;}
        100%{ opacity : 1;}
    }
    </style>
</head>
<body>
    <div></div>
</body>
</html>
```

代码文件位置：[src/01_浏览器前缀.html](./src/01_浏览器前缀.html)

















