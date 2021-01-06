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





















