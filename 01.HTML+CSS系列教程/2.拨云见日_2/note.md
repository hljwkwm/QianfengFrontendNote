# 拨云见日_2

### 1、CSS背景图

背景常用的属性：

| 属性                  | 含义                     | 值以及说明                                                   |
| --------------------- | ------------------------ | ------------------------------------------------------------ |
| background-color      | 背景色                   | 三种表示方法，单词表示、十六进制表示#ffffff、rgb表示rgb(255,255,255) |
| background-image      | 背景图                   | url(背景地址)，默认会水平垂直都铺满背景图                    |
| background-repeat     | 平铺方式                 | `repeat-x`：x轴平铺；<br />`repeat-y`：y轴平铺；<br />`repeat`：x、y都进行平铺，默认值；<br />`no-repeat`：都不平铺 |
| background-position   | 背景位置                 | 表示方法：`background-position: x y;`<br />其中的x和y可以是数字，也可以是单词；<br />数字的单位可以是px，也可以是%；<br />单词中x可以是left、center、right，y可以是top、center、bottom |
| background-attachment | 背景图随滚动条移动的方式 | scroll：随滚动条滚动，该状态下背景位置是按照当前元素进行偏移的，默认值；<br />fixed：固定位置，该状态下背景位置是按照浏览器进行偏移的 |

代码文件位置：[src/01_背景样式.html](./src/01_背景样式.html)

### 背景图视觉差演示

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        #div1 {
            width: 1400px;
            height: 800px;
            background-image: url(./img/1.jpg);
            background-attachment: fixed;
        }

        #div2 {
            width: 1400px;
            height: 800px;
            background-image: url(./img/2.jpg);
            background-attachment: fixed;
        }

        #div3 {
            width: 1400px;
            height: 800px;
            background-image: url(./img/3.jpg);
            background-attachment: fixed;
        }

        table {
            background-color: white;
        }
    </style>
</head>

<body>
    <div id="div1">
    </div>
    <div id="div2">
    </div>
    <div id="div3">
    </div>
</body>

</html>
```

代码文件位置：[src/02_视觉差.html](./src/02_视觉差.html)

### 2、CSS边框样式

| 属性         | 含义     | 值以及说明                                                   |
| ------------ | -------- | ------------------------------------------------------------ |
| border-style | 边框样式 | 常见的有以下几种：<br />solid：实线；<br />dashed：虚线；<br />dotted：点线 |
| border-width | 边框大小 | px，像素值                                                   |
| border-color | 边框颜色 | 三种表示方法均可                                             |

边框也可以针对某一条边进行单独设置，比如对左边框就是`border-left-style`，其中中间的单词可以是`left`、`right`、`top`、`bottom`。另外边框还可以使用复合样式，这个后面再说。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div {
            width: 300px;
            height: 300px;
            /* 边框形状为实线 */
            border-style: solid;
            /* 边框的颜色 */
            border-color: red;
            /* 边框的线宽 */
            border-width: 1px;
        }

        div {
            width: 300px;
            height: 300px;
            /* 对右边框进行设置 */
            border-right-style: dotted;
            border-right-width: 10px;
            border-right-color: green;
            /* 对左边框进行设置 */
            border-top-style: solid;
            border-top-width: 10px;
            border-top-color: red;
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

代码文件位置：[src/03_边框样式.html](./src/03_边框样式.html)

**绘制一个三角形：**

此外，color里还有一个属性值为transparent，该值表示为没有颜色，可以用这个来画一个三角形。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        body {
            background-color: green;
        }

        div {
            width: 0px;
            height: 0px;
            border-top-color: transparent;
            border-top-style: solid;
            border-top-width: 30px;
            ;
            border-right-color: red;
            border-right-style: solid;
            border-right-width: 30px;
            ;
            border-bottom-color: transparent;
            border-bottom-style: solid;
            border-bottom-width: 30px;
            ;
            border-left-color: transparent;
            border-left-style: solid;
            border-left-width: 30px;
            ;
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

代码文件位置：[src/04_三角形.html](./src/04_三角形.html)













