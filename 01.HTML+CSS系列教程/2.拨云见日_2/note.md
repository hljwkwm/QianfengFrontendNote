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

### 3、CSS文字样式

| 属性        | 含义     | 值以及说明                                                   |
| ----------- | -------- | ------------------------------------------------------------ |
| font-family | 字体类型 | 该属性可以设置字体的类型，有两点需要注意：<br />该属性可以设置多字体，设置多字体类型的目的是可以兼容不同电脑上的字体，如果第一个字体没有，可以向下查找；<br />如果字体的名字中间有空格，需要添加引号，例如：`font-family: 华文彩云, 'Times New Roman', SimSun, 微软雅黑;` |
| font-size   | 字体大小 | 有两种表示方式：<br />数字，默认值为16，推荐使用偶数，这样方便对齐；<br />单词表示（不推荐使用），xx-small最小，x-small较小，small小，medium正常（默认值），large大，x-large较大，xx-large最大 |
| font-weight | 字体粗细 | 单词表示：normal正常（默认值），bold（加粗）；<br />数值：100，200，300……900，其中100到500都是正常的，600都900都是加粗的。 |
| font-style  | 字体样式 | 正常：normal（默认值），斜体：italic、oblique<br />oblique也是表示斜体，用的比较少，一般了解即可。<br />区别：<br />1、italic带有倾斜属性的字体的才可以设置倾斜操作。<br />2、oblique没有倾斜属性的字体也可以设置倾斜操作，但是一般用italic，因为一般是使用字体提供的倾斜，而不是通过代码来强制让它倾斜。 |
| color       | 字体颜色 | 三种表示法                                                   |

**衬线体和非衬线体：**

特征不同

- 衬线字体(serif)在字的笔画开始、结束的地方有额外的装饰，而且笔bai画的粗细会有所不同。

- 无衬线字体(sans-serif)是无衬线字体，没有这些额外的装饰，而且笔画的粗细差不多。该类字体通常是机械的和统一线条的，它们往往拥有相同的曲率，笔直的线条，锐利的转角。

用途不同

- serif字体容易识别，它强调了每个字母笔画的开始和结束，因此易读性比较高。在整文阅读的情况下，适合使用serif字体进行排版，易于换行阅读的识别性，避免发生行间的阅读错误。

- 无衬线字体醒目，适合用于标题、DM、海报等，需要醒目但不需要长时间阅读的地方。但现在市场上很多app正文都开始采用无衬线字体，因为无衬线字体更简约、清新，比较有艺术感。

使用场合不同

- 无衬线字体与汉字字体中的黑体相对应。为了起到醒目的作用，笔画比较粗，不适合长时间阅读，不适合用作正文字体。衬线体基本上都是基于细黑体演化而来用作正文字体是易读性也很高。

可读性不同

- 在传统的正文印刷中，普遍认为衬线体能带来更佳的可读性。尤其是在大段落的文章中，衬线增加了阅读时对字母的视觉参照。

- 而无衬线体往往被用在标题、较短的文字段落或者一些通俗读物中。相比严肃正经的衬线体，无衬线体给人一种休闲轻松的感觉。

默认字体不同

- 中文字体中的宋体就是一种最标准的serif字体，衬线的特征非常明显。字形结构也和手写的楷书一致。
- 现代的 Macintosh、iOS、Android、Windows Vista 以上 等系统默认使用的无衬线字体。

![image-20201223161809446](note_image/image-20201223161809446.png)

<center style="font-size:14px;color:#C0C0C0;text-decoration:underline">衬线体</center>

![image-20201223162224450](note_image/image-20201223162224450.png)

<center style="font-size:14px;color:#C0C0C0;text-decoration:underline">非衬线体</center>













