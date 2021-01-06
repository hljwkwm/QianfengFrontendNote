# 溯本求源_1

### 1、HTML和CSS的发展

#### HTML的发展

1991年8月6日，来自欧洲核子研究中心的科学家Tim Berners-Lee，启动了世界上第一个可以正式访问的网站（http: //info. cern. ch/），从此人类宣布了互联网时代的到来。

![image-20210106091150661](note_image/image-20210106091150661.png)

目前，html5应用广泛，而xhtml要求过于严格，受时代的影响，开发者的重心偏向于功能的开发，而不是制定严格的规范，因此xhtml逐渐没落。虽然html5规范要求不严格，但是我们在开发的时候，也要要求我们自己，尽量按照规范进行开发。

#### CSS的发展

1994年10月， Hakon Wium Lie提出了CSS层叠样式表，但是直到1996年的时候，CSS才演变成我们熟悉的样子。

CSS1.0--1996年12月，W3C推荐标准。

CSS2.0--1998年5月，W3C推荐标准。

CSS2.1--2004年6月，W3C推荐标准。

CSS3.0--还没有发布正式版本。

#### html和xhtml的区别

**DOCTYPE文档及编码**

html：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
```

xthml

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="zh-CN">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="Content-Language" content="zh-CN" />
<title>æ–‡æ¡£æ ‡é¢˜</title>
</head>
```

**元素大小写**

html的元素可以允许大写，但是xhtml不允许大写。

**属性布尔值**

html的属性和属性值相同，或者属性值为真时，可以直接简写，比如`<input type="checkbox" checked>`，但是xhtml必须写完整，比如`<input type="checkbox" checked="checked" />`。

**属性引号**

html的属性值可以不加引号，但是最好是加上，比如`<div title=hello></div>`，但是xhtml是必须加引号的，`<div title="hello"></div>`。

**图片的alt属性**

html的img可以不加alt，`<img src="">`，但是xhtml必须写alt，`<img src="" alt="" />`。

**单标签写法**

html的的单标签最后可以不用写斜线，比如`<input type="checkbox" checked>`，但是xhtml必须写斜线，比如`<input type="checkbox" checked="checked" />`。

**双标签闭合**

html的双标签可以不写闭合，但是不推荐这样做：

```html
<div>
        aaa
```

xhtml的双标签必须要闭合：

```html
<div>
    aaa
</div>
```

从上面来看，其实xhtml有一些规范，是比较好的，我们可以在html中继续使用，有一些略显麻烦的，我们可以不再使用，比如单标签的斜线问题。

代码文件位置：[src/01_html5.html](./src/01_html5.html)，[src/02_xhtml.html](./src/02_xhtml.html)

### 2、strong与b，em与i

**相同点**：他们的表现形态都是文本加粗和文本斜体。

**不同点**：

strong和em表示的是强调，而b仅表示加粗，i仅表示斜体，因此strong和em具有语义化；

利用b和i与span配合，可以简化css的选择器，更容易实现复杂的内联效果；

strong在盲人用的机器上会读两遍（在论坛上看到的，目前无法验证）。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <strong>文本1</strong>
    <b>文本2</b>
    <em>文本3</em>
    <i>文本4</i>
    <span>span</span>
</body>
</html>
```

代码文件位置：[src/03_b和i.html](./src/03_b和i.html)

### 3、引用标签

使用引用标签的好处：可以规范代码，有助于多人协作，可以更好的让浏览器解析，也可以让搜索引擎更快的搜索到。

- blockquote：引用大段的段落解释
- q：引用小段的短语解释
- abbr：缩写或首字母缩略词
- address：引用文档地址信息
- cite：引用著作的标题

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <p>
        <abbr title="World Health Organization">WHO</abbr>成立于1948年。
    </p>
    <p>
        死而后已出自诸葛亮的《出师表》：
    </p>
    <blockquote>
        凡事如是，难可逆见。臣鞠躬尽瘁，死而后已；至于成败利钝，非臣之明所能逆睹也。
    </blockquote>
    <p>
        WWF的目标是：<q>构建人与自然和谐共存的世界。</q>
    </p>
    <address>
        网易北京公司<br>
        地址：xxxxxxxx
    </address>
    <p>
        <cite>资治通鉴</cite>由背诵司马光主编的一部多卷本编年体史书。
    </p>
</body>
</html>

```

效果图：

![image-20210106104550419](note_image/image-20210106104550419.png)

代码文件位置：[src/04_引用标签.html](./src/04_引用标签.html)

### 4、iframe嵌套页面

iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。 

| 属性        | 含义                         |
| ----------- | ---------------------------- |
| frameborder | 规定是否显示框架周围的边框   |
| width       | 定义iframe的宽度             |
| height      | 定义iframe的高度             |
| scrolling   | 规定是否在iframe中显示滚动条 |
| src         | 规定在iframe中引入的URL      |
| srcdoc      | 规定在iframe中显示的页面内容 |

注意：当有srcdoc的时候，src就会失效。另外iframe的宽和高可以通过css来控制。

应用场景：数据传输、共享代码，局部刷新、第三方介入等。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
   <iframe src="https://g.163.com/r?site=netease&affiliate=homepage&cat=homepage&type=logo450x40&location=1" frameborder="0" width="450" height="40"></iframe>
</body>
</html>
```

代码文件位置：[src/05_iframe.html](./src/05_iframe.html)

**一天一个入狱小技巧——钓鱼网站：**

利用iframe，可以将第三方网站嵌入到自己的网站中进行伪装成真正的网站，但是可以在网站的登录等位置添加一个层，当点击之后，就会跳转到钓鱼网站的登录页面，通过这种方式就可以骗取用户名和密码等，因此在访问某个网页的时候，一定要看好域名。

### 5、br与wbr

br标签表示换行操作，而wbr标签表示软换行操作。如果单词太长，或者担心浏览器会在错误的位置换行，那么您可以使用 wbr 元素来添加Word Break Opportunity（单词换行时机）。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <p>
        hello ahsj  jdhakj  hshdhdsj  sjdhsj asdsad hello ahsjjdhakjhshdhdsj XML<wbr>HTTP<wbr>Request  sjdhsj asdsad
    </p>
</body>
</html>
```

如上面代码所示，如果一行放不下XMLHTTPRequest，那么浏览器就会将这三个单词拆开，在Request前面或者在HTTP前面换行。

代码文件位置：[src/06_wbr.html](./src/06_wbr.html)

### 6、pre与code

pre元素可定义预格式化的文本，被包围在 pre 元素中的文本通常会保留空格和换行符。只应该在表示计算机程序源代码或者其他机器可以阅读的文本内容上使用code标签。虽然code标签通常只是把文本变成等宽字体，但它暗示着这段文本是源程序代码。

pre和code通常是组合使用的，pre在外面，code在里面，但是需要注意的是，即使代码在code里，特殊符号也需要用转义字符，比如`<`和`>`，需要用`&lt;`和 `&gt;`。若果想实现html的代码展示，可以如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <pre>
        <code>
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Document</title>
            </head>
            <body>
                hello world
            </body>
            </html>
        </code>
    </pre>

    <pre><code>&lt;!DOCTYPE html&gt;
            &lt;html lang=&quot;en&quot;&gt;
            &lt;head&gt;
                &lt;meta charset=&quot;UTF-8&quot;&gt;
                &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
                &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
                &lt;title&gt;Document&lt;/title&gt;
            &lt;/head&gt;
            &lt;body&gt;
                hello world
            &lt;/body&gt;
            &lt;/html&gt;
            </code></pre>
            
</body>
</html>
```

但是这样写固然是很麻烦的，可以通过一些工具来生成，比如富文本工具，或者gitbook，或者markdown等。

代码文件位置：[src/07_pre和code.html](./src/07_pre和code.html)

### 7、map和area

`<map>`：用于定义一个客户端图像映射。图像映射（image-map）指带有可点击区域的一幅图像。

`<area>`：定义`<map>`的可点击区域。

当`<map>`设置name或者id属性时，`<img>`标签的usemap属性会根据`<map>`的id和name属性来关联`<map>`。img标签的usemap属性需要加个井号。

map的属性：

| map属性 | 解释                                                         |
| ------- | ------------------------------------------------------------ |
| alt     | 当图片无法加载的时候显示的提示文字                           |
| shape   | 定义可点击区域的形状，有如下值：<br />circ或circle:圆形<br />poly或polygon:多边型<br />rect或rectangle:矩形 |
| coords  | 定义坐标值：<br />当shape为circ或circle(圆形)时,coords的值应该为 (x,y,r) x,y是圆心的坐标,r是半径<br />当shape为rect或rectangle(矩形)时,coords的值应该为 (x1,y1,x2,y2)  x1,y1是矩形的左上角坐标  x2.y2是矩形的右下角坐标<br />当shape为poly或polygon(多边形)时,coords的值应该为 (x1,y1,x2,y2,x3,y3......) 当可点击区域为多边形时,coords的值应该为多边形各个顶点的坐标。注意:最后一个坐标应与第一个坐标一致,用于关闭多边形,就像走路,不管你怎么走,最后回到出发地点,你走过的路线才会形成一个封闭图形。 |
| href    | 定义一个URL,当点击设定的区域时访问该URL                      |
| target  | 规定href在何处打开：<br />`_blank`: 在新窗口打开URL。<br />`_self`: 在同级框架中打开URL。<br />`_parent`: 在父框架中打开URL。<br />`_top`: 这整个窗口中打开URL。<br />`frameName`: 在指定的框架中打开URL。 |

比如我们现在要给一个图片的区域添加链接：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <img src="./img/star.jpg" alt="" usemap="#star">
    <map name="star">
        <!-- 添加矩形 -->
        <!-- <area shape="rect" coords="205,83,386,173" href="https://www.taobao.com" alt=""> -->
        <!-- 添加圆形 -->
        <!-- <area shape="circ" coords="300,130,50" href="" alt=""> -->
        <!-- 添加多边形 -->
        <area shape="poly" coords="305,99,233,156,256,250,172,197" href="" alt="">
    </map>
</body>
</html>
```

代码文件位置：[src/08_map与area.html](./src/08_map与area.html)

### 8、embed和object

embed和object都表示能够嵌入一些多媒体，如flash动画、插件等。基本使用没有太多区别，主要是为了兼容不同的浏览器而已。object元素需要配合param元素一起完成。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <!-- <embed src="./img/flash.swf" type=""> -->
        <object>
            <param name="movie" value="./img/flash.swf">
        </object>
</body>
</html>

```

代码文件位置：[src/09_embed与object.html](./src/09_embed与object.html)

### 9、audio和video

audio标签表示嵌入音频文件，video标签表示嵌入视频文件。默认控件是不显示的，可通过controls属性来显示控件。

为了能够支持多个备选文件的兼容支持，可以配合source标签。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <!-- controls可以显示控件，loop可以控制循环，autoplay可以让音视频自动播放 -->
    <audio src="./img/johann_sebastian_bach_air.mp3" controls loop autoplay></audio>
    <video src="./img/Intermission-Walk-in_512kb.mp4" controls></video>
    <!-- 通过source可以提高浏览器的兼容性，当第一个source可以播放，后面的就会被忽略，如果前面的无法播放，就会向下找 -->
    <video>
        <source src="./img/Intermission-Walk-in.ogv">
        </source>
        <source src="./img/Intermission-Walk-in_512kb.mp4">
        </source>
    </video>

    <div style="position: relative; height:250px; overflow: hidden;">
        <!-- 通过设置min-width:100%; min-height:100%;可以实现视频宽度适应整个浏览器，然后视频下面被挡住的效果 -->
        <!-- webkit和x5等是用来适应移动端的 -->
        <video style="min-width:100%; min-height:100%;" loop="" playsinline="true" webkit-playsinline="true"
            x-webkit-airplay="true" x5-video-player-fullscreen="false" x5-video-player-type="h5" id="introvideo"
            autoplay="">
            <source src="./img/Intermission-Walk-in.ogv" type="video/mp4">
            <source src="./img/Intermission-Walk-in_512kb.mp4" type="video/webm">
        </video>
    </div>
</body>

</html>
```

代码文件位置：[src/10_audio与video.html](./src/10_audio与video.html)

















