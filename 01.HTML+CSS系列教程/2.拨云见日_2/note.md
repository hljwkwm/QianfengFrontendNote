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
            /* 字体类型 */
            font-family: 华文彩云, 'Times New Roman', SimSun, 微软雅黑;
        }

        div {
            /* 字体大小 */
            font-size: 30px;
        }

        div {
            /* 字体粗细 */
            font-weight: 600;
        }

        div {
            /* 字体样式 */
            font-style: italic;
            /* 字体颜色 */
            color: red;
        }
    </style>
</head>

<body>
    <div>这是一段文字</div>
    <p>这是一段文字</p>
    <div>this is a text</div>
    <p>this is a text</p>
</body>

</html>
```

代码文件位置：[src/05_CSS文字样式.html](./src/05_CSS文字样式.html)

### 4、CSS段落样式

| 属性                  | 含义         | 值以及说明                                                   |
| --------------------- | ------------ | ------------------------------------------------------------ |
| text-decoration       | 文本装饰     | 下划线：underline，删除线：line-through，<br />上划线：overline，不添加任何装饰：none<br />注：添加多个文本修饰：line-through underline overline，中间用空格隔开 |
| text-transform        | 文本大小写   | 该属性主要针对英文，小写为lowercase，大写为uppercase<br />只针对首字母大写：capitalize |
| text-indent           | 首行缩进     | 可以使用px，也可以使用em，em单位是一个相对单位，1em的大小是一个字体的大小 |
| text-align            | 文本对齐方式 | left左对齐、right右对齐、center居中、justify两端点对齐       |
| line-height           | 行高         | 可以是px，也可以是scale（字体的倍数），scale没有单位，直接写数字即可，如`line-height: 2;` |
| letter-spacing        | 字间距       |                                                              |
| word-spacing          | 词间距       | 这个主要针对英文。                                           |
| word-break: break-all | 强制折行     | 这个折行不会出现空白区域。                                   |
| word-wrap: break-word | 强制折行     | 这个这行会产生一些空白区域。                                 |

行高的示意图：

![image-20201224103117015](note_image/image-20201224103117015.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        p {
            width: 300px;
            /* 文本装饰 */
            text-decoration: line-through underline overline;
        }

        P {
            /* 文本大小写 */
            text-transform: capitalize;
        }

        p {
            /* 首行缩进 */
            text-indent: 2em;
            /* 字体大小 */
            font-size: 18px;
        }

        p {
            /* 对对齐方式 */
            text-align: justify;
        }

        p {
            /* 行高scale表示 */
            line-height: 2;
        }

        p {
            /* 字间距 */
            word-spacing: 10px;
        }

        div {
            width: 300px;
            height: 300px;
            border: 1px solid red;
            /* 折行 */
            word-break: break-all;
        }
    </style>
</head>

<body>
    <p>据记者从孙杨团队处获悉，孙杨瑞士律师团队通过电子邮件通知孙杨方，他们已收到瑞士联邦最高法院判决结果，其判决结果为撤销国际体育仲裁法庭（CAS）此前涉及孙杨的裁决。截至发稿时，瑞士最高法院和CAS尚无正式表态。记者将跟踪报道此事进展。
    </p>
    <p>
        asd jsakdjsk asjdahsd ahdhjs ajsd39fc dsHRHFC ASFF shdjs ahjsd ajshd asd jsakdjsk asjdahsd ahdhjs ajsd39fc
        dsHRHFC ASFF shdjs ahjsd ajshd
    </p>
    <div>
        asd jsakdjskjsakdjskjsakdjskjsakdjskjsakdjskjsakdjskjsakdjskjsakdjsk asjdahsd ahdhjs ajsd39fc dsHRHFC ASFF shdjs
        ahjsd ajshd asd jsakdjsk asjdahsd ahdhjs ajsd39fc dsHRHFC ASFF shdjs ahjsd ajshd
    </div>
</body>

</html>
```

代码文件位置：[src/06_CSS段落样式.html](./src/06_CSS段落样式.html)

### CSS文字样式练习

效果图：

![image-20201224105507414](note_image/image-20201224105507414.png)

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
            width: 800px;
        }

        h1 {
            text-align: center;
            color: #ff6600;
        }

        h2 {
            color: #00a0ff;
            text-indent: 2em;
        }

        #p1 {
            font-style: italic;
            font-weight: bold;
            text-indent: 2em;
        }

        #p2 {
            color: #66ff00;
            line-height: 30px;
            text-indent: 2em;
        }

        #p3 {
            color: #00ffff;
            line-height: 30px;
            text-indent: 2em;
            text-decoration: underline;
            font-style: italic;
        }

        #p4 {
            font-weight: bold;
            letter-spacing: 10px;
            line-height: 30px;
            text-indent: 2em;
        }

        #p5 {
            color: #cc00cc;
            line-height: 30px;
            text-indent: 2em;
        }
    </style>
</head>

<body>
    <div>
        <h1>Angelababy简介</h1>
        <h2>基本信息</h2>
        <p id="p1">杨颖（Angelababy），1989年2月28日出生于上海，13岁时移居香港，中国影视女演员。</p>
        <p id="p2">
            2009年主演电影《全城热恋》。2012年，凭借爱情片《第一次》获得第十三届华语电影传媒大奖“最受瞩目女演员奖”。2013年1月，《南都娱乐周刊》举办新生代四小花旦的评选活动，杨颖以总分70分的综合得分与刘诗诗、杨幂、倪妮共同当选为新一代“四小花旦”；同年在徐克导演的影片《狄仁杰之神都龙王》中担任女主角，并且获得第21届北京大学生电影节最受欢迎女演员奖；4月，Angelababy主演电视剧《大汉情缘之云中歌》。2014年加盟综艺节目《奔跑吧兄弟》并主演电影版；同年主演顾长卫导演的电影《微爱之渐入佳境》，票房突破2.8亿。2015年5月参演好莱坞电影《独立日2》；7月，主演电影《摆渡人》。
        </p>
        <h2>早年经历</h2>
        <p id="p3"> 1989年2月28日，Angelababy出生在上海，中文名杨颖。杨颖自小随家人到上海定居，在上海的演艺学校学演戏及跳舞。13岁时，杨颖回香港加入了Talent Bang，还担任Viva Club
            Disney主持。</p>
        <h2>个人生活</h2>
        <p id="p4"> 2015年5月27日，黄晓明和Angelababy（杨颖）在青岛民政局领证完婚。</p>
        <p id="p5"> 2015年10月8日，黄晓明和Angelababy在上海展览中心正式举办婚礼。上午8点，Angelababy工作室曝光了一两人的婚纱照，照片中，两人以巴黎地标建筑为背景，浪漫亲吻。</p>
    </div>

</body>

</html>
```

代码文件位置：[src/07_个人简介.html](./src/07_个人简介.html)

### 5、CSS复合样式

一个CSS属性只控制一种样式，叫做单一样式。一个CSS属性控制多种样式，叫做复合样式。复合的写法，是通过空格的方式实现的。复合写法有的是不需要关心顺序，例如background、border；有的是需要关心顺序，例如font。先介绍这三个复合样式：

 **background：**

`background: red url() repeat 0 0;`，分别代表的是背景颜色，背景图，平铺以及背景图位置，这个顺序可以前后调整，但是要保证x和y要在一起。

**border：**

`border: 1px red solid;`，分别代表线宽，线的颜色，线的形状，这个也可以前后调整位置。此外单独设置某一个边，可以使用border-left，border-right等。

**font：**

font这个需要注意顺序，并且至少要有两个参数，分别为size和family，要保证字体的类型在最后，大小和行高在倒数第二个位置，正确举例如下：

`size family`，`weight style size family`，`style weight size family`，`weight style size/line-height family`，其中最后一个写法的实际情况如下：`font : bold italic 30px/100px 宋体;`

**注意：**

CSS的单一样式和复合样式，尽量避免混写，如果一定要混写的话，需要先写复合样式，再写单一样式，避免样式无法生效。因为复合样式中，没有写的属性，会赋默认值，将会覆盖它前面设置的值。

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
            /* 背景样式 */
            background: url(./img/dog.jpg) no-repeat center center;
            /* 如果需要单写，那么需要写在复合样式的后面 */
            background-color: red;
            /* 边框样式 */
            border : 2px black solid;
            /* 单独对右边框设置 */
            border-right: dashed 2px blue;
            /* 文字样式，注意顺序，需要把字体放在最后，size放在倒数第二个位置 */
            font: bold italic 30px/100px 宋体;
        }
    </style>
</head>

<body>
    <div>这是一段文字</div>
</body>

</html>
```

代码文件位置：[src/08_复合样式.html](./src/08_复合样式.html)

### 6、CSS选择器

选择器的练习可以看这个网站：[CSS Diner](https://flukeout.github.io/)

#### ID选择器

写法：html中，使用属性来定义id，比如`<div id="div1"></div>`，VS code中的快捷写法是div#div1加tab键。css中的写法为`#elem{}`。

**注意：**

- ID是唯一值，在一个页面中只能出现一次，出现多次是不符合规范的。
- 命名的规范，由字母、下划线、中划线、字母（并且第一个不能是数字）
- 驼峰写法：searchButton（小驼峰），SearchButton（大驼峰）
- 短线写法：search-small-button（推荐以这种方式命名）
- 下划线写法：search_small_button

css命名文件位置：[other/css命名.txt](./other/css命名.txt)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        /* id选择器 */
        #div1 {
            background: red;
        }

        /* id选择器 */
        #div2 {
            background: blue;
        }
    </style>
</head>

<body>
    <!-- 在标签上定义id -->
    <div id="div1">这是一个块</div>
    <div id="div2">这又是一个块</div>
    <div id="xiaoming1"></div>
    <div id="xiaoming2"></div>
    <div id="searchButton"></div>
</body>

</html>
```

####  CLASS选择器

写法：html中`<div class="box"></div>`，CSS选择器`.elem{}`。

**注意：**

- class选择器是可以复用的，class可以在多个标签中使用；
- 一个标签上可以添加多个class样式；
- 一个标签添加多个样式的时候，样式的优先级根据CSS选择器的前后来决定的，而不是class属性中的前后顺序；
- 在css中，通过标签+类的写法，可以选择某个标签下的某个类，写法为：`p.box {}`，表示p标签下的box类。

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
            /* 类选择器 */
            .box {
                background: red;
            }

            /* 选择某个标签下的类 */
            p.box {
                background: red;
            }

            /* 一个标签添加多个样式的时候，样式的优先级根据CSS选择器的前后来决定的 */
            .content {
                font-size: 30px;
                background: blue;
            }
        </style>
    </head>
    <body>
        <!-- 在标签上添加class -->
        <div class="box">这是一个块</div>
        <!-- 一个标签中可以添加多个class -->
        <div class="box content">这又是一个块</div>
        <!-- class可以复用 -->
        <p class="box">这是一个段落</p>
    </body>
</html>
```

#### 标签选择器（tag选择器、元素选择器）

写法：html中`<div></div>`，css中`div {}`。

**使用场景：**

- 去掉某些标签的默认样式时
- 复杂的选择器中，如层次选择器，选择ul下的li或者ol下的li

#### 群组选择器（分组选择器）

可以通过逗号的方式，给多个不同的选择器添加统一的CSS样式，来达到代码的复用。

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
            /* 群组选择器演示，这样可以同时为div，#text和.title设置背景色 */
            div, #text, .title {
                background: red;
            }
        </style>
    </head>
    <body>
        <!-- 群组选择器演示 -->
        <div>这是一个块</div>
        <p id="text">这是一个段落</p>
        <h2 class="title">这是一个标题</h2>
    </body>
</html>
```

#### 通配选择器

写法：`* {}`，作用是给所有标签都添加样式。

尽量避免使用通配选择器，因为会给所有的标签添加样式，慎用。

使用场景：去掉所有标签的默认样式时。

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
            /* 通配选择器（慎用） */
            *{ border:1px red solid;}
        </style>
    </head>
    <body>
        <div>这是一个块</div>
        <p id="text">这是一个段落</p>
        <h2 class="title">这是一个标题</h2>
    </body>
</html>
```

#### 层次选择器

后代：`M N { }`，这种情况下，M下面所有的N都会被选择，无论这个N是M的子还是孙。

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
            /* #list下所有的li都会生效，无论是子还是孙 */
            #list li{ border:1px red solid;}
        </style>
    </head>
    <body>
        <!-- 层级选择器演示 -->
        <ul id="list">
            <li>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </li>
            <li></li>
            <li></li>
        </ul>
        <ol>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </body>
</html>
```

父子：`M > N { }`，这种情况下，只会选择M下是儿子关系的N，不会选择是孙子关系的N。

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
            /* #list下儿子关系的li会被选择，孙子的不会被选择 */
            #list > li{ border:1px red solid;}
        </style>
    </head>
    <body>
        <!-- 层级选择器演示 -->
        <ul id="list">
            <li>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </li>
            <li></li>
            <li></li>
        </ul>
        <ol>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </body>
</html>
```

兄弟：`M ~ N { }`，这种情况下会选择M同级下，M下方所有的N。

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
            /* 这种情况下，只会选择和#relation同级的后面的所有h2 */
            #relation ~ h2 { background:red; }
        </style>
    </head>
    <body>
        <h2>这是一个标题</h2>
        <div id="relation">这是一个块</div>
        <h2>这是一个标题</h2>
        <h2>这是一个标题</h2>
        <p>这是一个段落</p>
        <h2>这是一个标题</h2>
    </body>
</html>
```

相邻：`M + N { }`，当前M同级，下面相邻的N标签

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
            /* 这种情况下，只会选择和#relation同级的后面，并且紧挨着#relation的h2 */
            #relation + h2 { background:red; }
        </style>
    </head>
    <body>
        <h2>这是一个标题</h2>
        <div id="relation">这是一个块</div>
        <!-- 如果这里有其他标签，那么下面的h2将不再被选择 -->
        <h2>这是一个标题</h2>
        <h2>这是一个标题</h2>
        <p>这是一个段落</p>
        <h2>这是一个标题</h2>
    </body>
</html>
```

#### 属性选择器

| 选择器            | 说明                                                     |
| ----------------- | -------------------------------------------------------- |
| M[attr]           | M元素选择含有attr属性的集合                              |
| M[attr=value]     | M元素选择含有attr属性并且该属性的值和value完全匹配的集合 |
| M[attr*=value]    | M元素选择含有attr属性并且该属性的值包含value的集合       |
| M[attr^=value]    | M元素选择含有attr属性并且该属性的起始值为value的集合     |
| M[attr$=value]    | M元素选择含有attr属性并且该属性的结束值为value的集合     |
| `M[attr1][attr2]` | M元素选择含有attr1属性和attr2属性的集合                  |

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
            /* 选择含有class的div */
            div[class]{ background:red;}
            /* 选择class值为box的div */
            div[class=box]{ background:red;}
            /* 选择class值中含有search的div */
            div[class*=search]{ background:red;}
            /* 选择class的起始值为search的div */
            div[class^=search]{ background:red;}
            /* 选择class的结束值为search的div */
            div[class$=search]{ background:red;}
            /* 选择含有class和id属性的div */
            div[class][id]{ background:red;}
        </style>
    </head>
    <body>
        <div>aaaaa</div>    
        <div class="box" id="elem">bbbbb</div>    
        <div class="search">ccccc</div>
        <div class="search-button">ddddd</div>
        <div class="button-search">eeeee</div>
    </body>
</html>
```

#### 伪类选择器1

CSS伪类用于向某些元素添加特殊的效果。一般用于初始样式添加不上的时候，用伪类来添加。

写法：`M:伪类{}`。

| 伪类     | 功能             | 说明                 |
| -------- | ---------------- | -------------------- |
| :link    | 访问前的样式     | 只能添加给a标签      |
| :visited | 访问后的样式     | 只能添加给a标签      |
| :hover   | 鼠标移入时的样式 | 可以添加给所有的标签 |
| :active  | 鼠标按下时的样式 | 可以添加给所有的标签 |

**说明：**

伪类的效果在Chrome控制台中是可以控制的，控制方法如图：

![image-20201224160055925](note_image/image-20201224160055925.png)

链接点击过后，就会变为已访问状态，可以通过清除浏览器的缓存来解决，Chrome清除历史记录的快捷键为`Ctrl+Shift+Delete`。

**注意：**

- link、visited只能给a标签加，hover和active可以给所有的标签加。
- 如果四个伪类都生效，一定要注意写的顺序：link、visited、hover、active，如果顺序错了，有的伪类会失效。
- 一般情况下，a标签选择器只设置a和a:hover。

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
            /* 伪类选择器 */
            div{ width:200px; height:200px; background:red;}
            div:hover{ background:blue;}
            div:active{ background:green;}
            /* 伪类选择器，如果这几个都用，要注意前后顺序 */
            a:link{ color:red;}
            a:visited{ color:blue;}
            a:hover{ color:green;}
            a:active{ color:yellow;}

            /* 一般网站对a设置样式，只需要设置a和a:hover就可以了 */
            a{ color:gray;}
            a:hover{ color:red;}
        </style>
    </head>
    <body>
        <!-- 伪类选择器演示 -->
        <div></div>
        <a href="#">这是一个链接</a>
    </body>
</html>
```

#### 伪类选择器2

`:after`、`:before`：通过伪类的方式给元素添加一段文本内容，通常使用`content`属性。在控制台中，它实际的表示为`::after`或者是`::before`，前面是两个冒号，这种表示是伪元素。after和before可以用来清除浮动，设置列表的样式等。

:checked：当某个元素具备checked属性时被选择

:disabled：当某个元素具备disabled属性时被选择

:focus：当某个元素获取到光标时被选择

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
            /* 通过伪类的方式给元素后面添加一段文本内容 */
            div:after {
                content: "world";
                color: red;
            }

            /* 当某个元素具备checked属性时被选择 */
            :checked {
                width: 100px;
                height: 100px;
            }

            /* 当某个元素具备disabled属性时被选择 */
            :disabled {
                width: 100px;
                height: 100px;
            }

            /* 当某个元素获取到光标时被选择 */
            :focus {
                background: red;
            }
        </style>
    </head>
    <body>
        <!-- 伪类选择器演示，before和after -->
        <div>hello </div>
        <!-- 伪类选择器演示，checked，disabled，focus -->
        <input type="checkbox">
        <input type="checkbox" checked>
        <input type="checkbox" disabled>
        <input type="text">
    </body>
</html>
```

### 伪类选择器3——结构伪类选择器

`:nth-of-type()`、`:nth-child()`：选择索引为某个值的元素，角标是从1开始的，1表示第一项，2表示第二项；也可以用n来表示，n表示从0开始到无穷大；如果是2n，则会选择第二个、第四个……；如果是2n+1，则会选择第一个、第三个……；如果是3n，则会选择第三个、第六个……。

`:first-of-type()`、`first-of-child()`：选择第一个元素

`:last-of-type()`、`last-of-child()`：选择最后一个元素

`:only-of-type()`、only-of-child()`：如果元素在当前层级是唯一的，则会被选择

**type和child的区别：**

type在计算索引时会过滤掉同级下其他标签，而child不会过滤掉其他标签。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        /* 2n+1选择第一个li、第三个li……，type会先过滤掉同级的其他标签，因此div不会被选择 */
        #test1 li:nth-of-type(2n+1) {
            background: burlywood;
        }
        /* 2n+1选择第二个li、第四个li……，type会先过滤掉同级的其他标签，因此div不会被选择 */
        #test1 li:nth-of-type(2n) {
            background: olive;
        }

        /* type会先过滤掉除li的其他标签，然后选择第一个li标签 */
        #test2 li:first-of-type {
            background: red;
        }

        /* type会先过滤掉除li的其他标签，然后选择最后一个li标签 */
        #test2 li:last-of-type {
            background: blue;
        }

        /* type会先过滤掉除li的其他标签，然后当只有一个li时会被选择，这里演示有多个li，所以什么都不选择 */
        #test2 li:only-of-type {
            background: lime;
        }

        /* type会先过滤掉除li的其他标签，因此这里选择的是div下面的li */
        #test3 li:nth-of-type(2) {
            background: rgb(60, 173, 238);
        }

        /* child不会过滤标签，因此这里选择的第三个li */
        #test3 li:nth-child(4) {
            background: rgb(255, 176, 176);
        }

        /*  type会先过滤掉除div的所有标签，所以只有一个div，会被选择 */
        #test3 div:only-of-type {
            background: green;
        }

        /* child不会过滤标签，因此这里选择的是div下面的li */
        #test3 div:nth-child(2) {
            height: 50px;
        }

        /* child不会过滤标签，但是第三个标签不是div，所以什么都不选择 */
        #test3 div:nth-child(3) {
            height: 50px;
        }
    </style>
    </style>
</head>

<body>
    <ul id="test1">
        <li></li>
        <div>aaaaa</div>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>

    <ul id="test2">
        <li></li>
        <div>aaaaa</div>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>

    <ul id="test3">
        <li></li>
        <div>aaaaa</div>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</body>

</html>

```











