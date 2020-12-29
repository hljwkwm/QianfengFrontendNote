# 拨云见日3

### 图片格式

网页中，常见的图片格式有jpg，png和gif。jpg用来显示一般场景，png一般作为镂空图片使用，gif主要作为动图使用。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    body{ background:yellow;}
    </style>
</head>
<body>
    <img src="./img/城市.jpg" alt="">
    <img src="./img/搞笑.gif" alt="">
    <img src="./img/葡萄.png" alt="">
    <img src="./img/icon1.png" alt="">
</body>
</html>
```

代码文件位置：[src/01_图片格式.html](./src/01_图片格式.html)

此外，还提供了一个pdf设计的UI图和导出图，文件位置：[other/博文尚美首页.jpg](./other/博文尚美首页.jpg)以及[other/博文尚美首页.psd](./other/博文尚美首页.psd)。

### 1、切图练习

效果图：

![image-20201229093156286](note_image/image-20201229093156286.png)

代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    *{ margin : 0; padding: 0;}
    ul{ list-style: none;}
    img{ display: block;}
    a{ text-decoration: none; color:#666666;}
    h1,h2,h3,h4,h5,h6{ font-size:16px; font-weight: normal;}

    #main{ margin:20px auto; width:238px; border:1px solid #d9e0ee; border-top:3px #ff8400 solid;}
    #main h2{ height:35px; border-bottom:1px solid #d9e0ee; line-height: 35px; padding-left:11px;}
    #main h2 a{ color:black;}
    #main h2 a:hover{ color:#ff8400;}
    #main div img{ margin:8px auto 3px auto;}
    #main ul{ font-size:12px; line-height: 24px; margin-bottom: 8px;}
    #main ul li{ padding-left:18px; background: url(./img/dot.png) no-repeat 8px center;}
    #main ul li.first-line{ border-bottom:1px solid #d9e0ee; padding-bottom:3px; margin-bottom:8px;}
    #main ul a:hover{ color:#ff8400; text-decoration: underline;}
    </style>
</head>
<body>
    <div id="main">
        <h2>
            <a href="#">探索趣图</a>
        </h2>
        <div>
            <a href="#">
                <img src="./img/img.png" alt="">
            </a>
        </div>
        <ul>
            <li class="first-line">
                <a href="#">测试文字测试文字测试文字</a>
            </li>
            <li>
                <a href="#">测试文字测试文字测试文字</a>
            </li>
            <li>
                <a href="#">测试文字测试文字测试文字</a>
            </li>
        </ul>
    </div>
</body>
</html>
```

代码文件位置：[src/02_新浪的小结构.html](./src/02_新浪的小结构.html)

**小技巧**：如果想看自己做的网页是否和切图一样，可以截图复制到PS中，然后将截图的透明度修改为50%，拿这个截图和原图进行拼合，如果能拼合，那么说明没有问题。

**PS切图技巧：**

PS推荐使用CC版本，因为CC版本有切图工具。

显示隐藏标尺：Ctrl+R。在标尺上可以拖拽参考线，可以通过移动工具拖拽回去，也可以在视图菜单中选择清除所有的参考线，图层中的小眼睛可以对当前图层进行显示隐藏，Alt+滚轮可以对图片进行放大缩小。

**png等图片的切图流程：**

通过矩形选框工具，选择指定的区域，选区工具中，按住shift增加区域，按住alt减少区域，可以进行微调，利用参考线记录量取的位置，以便以后测量其他的值。然后通过复制图像，新建文件和粘贴图像这个过程来创建切图，然后导出即可。

**psd图片的切图流程：**

在PS中，打开首选项，切换到增效工具，将生成器勾选上，然后点击菜单栏中的文件，选择生成，将图像资源勾选上。这样，更改图层名称，就会自动生成图片，比如更改名称为`icon.png`，就会生成png图片，更改为 `200% icon.png`，就会生成200%大小的图片。

**企业中UI设计和前端的合作：**

设计师通过sketch或者PS设计好文稿后，可以将文稿上传到蓝湖：https://lanhuapp.com。设计师在蓝湖中下载对应软件的插件就可以进行上传操作。此外，设计师还可以对图层进行切图，做好的切图，前端开发人员可以在蓝湖中下载该切图。













