# 风生水起_1

### flex布局

随着移动互联网的发展，对于网页布局来说要求越来越高，而传统的布局方案对于实现特殊布局非常不方便，比如垂直居中。

2009年，W3C提出了一种新的方案——Flex布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。

**flex布局作用在的位置**

| 作用在flex容器上 | 作用在flex子项上 |
| :--------------: | :--------------: |
|  flex-direction  |      order       |
|    flex-wrap     |    flex-grow     |
|    flex-flow     |   flex-shrink    |
| justify-content  |    flex-basis    |
|   align-items    |       flex       |
|  align-content   |    align-self    |

**一个小实例：**

实现一个小矩形在一个容器中垂直水平居中，如下图所示：

![image-20210226170749754](note_image/image-20210226170749754.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    #parent{ width:300px; height:300px; border:1px black solid; margin:20px auto; display: flex;}
    #box{ width:150px; height:50px; background:red; margin:auto;}
    </style>
</head>
<body>
    <div id="parent">
        <div id="box"></div>
    </div>
</body>
</html>
```

#### flex-direction

flex-direction用来控制子项整体布局方向，是从左往右还是从右往左，是从上往下还是从下往上。==这个属性是加在flex的容器上的。==

| 取值           | 含义                                                         |
| -------------- | ------------------------------------------------------------ |
| row            | 默认值，显示为行。方向为当前文档水平流方向，默认情况下是从左往右。 |
| row-reverse    | 显示为行，但方向和row属性值是反的。                          |
| column         | 显示为列。                                                   |
| column-reverse | 显示为列，但方向和column属性值是反的。                       |

![image-20210226172638448](note_image/image-20210226172638448.png)

```html
<style>
    #box{ width:300px; height:300px; border:1px black solid; margin:20px auto; display: flex; flex-direction: column-reverse;}
    #box div{ width:50px; height:50px; color:white; line-height: 50px; text-align: center; background:red;}
</style>
<div id="box">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
```

#### flex-wrap

flex-wrap用来控制子项整体单行显示还是换行显示。==这个属性是加在flex的容器上的。==

| 取值         | 含义                                                         |
| ------------ | ------------------------------------------------------------ |
| nowrap       | 默认值，表示单行显示，不换行。子项的宽度会进行自适应，当内容无法被压缩，子项会溢出。 |
| wrap         | 宽度不足换行显示。                                           |
| wrap-reverse | 宽度不足换行显示，但是是从下往上开始，也就是原本换行在下面的子项现在跑到上面。 |



























