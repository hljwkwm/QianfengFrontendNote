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

### flex布局：作用在flex容器上的

#### flex-direction

flex-direction用来控制子项整体布局方向，是从左往右还是从右往左，是从上往下还是从下往上。<span style="color: #ff0000;">这个属性是加在<span style="font-weight: bold;">flex的容器</span>上的</span>。

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

flex-wrap用来控制子项整体单行显示还是换行显示。<span style="color: #ff0000;">这个属性是加在<span style="font-weight: bold;">flex的容器</span>上的</span>。

| 取值         | 含义                                                         |
| ------------ | ------------------------------------------------------------ |
| nowrap       | 默认值，表示单行显示，不换行。子项的宽度会进行自适应，当内容无法被压缩，子项会溢出。 |
| wrap         | 宽度不足换行显示。默认状态下，两行中间会有一个很大的空隙。   |
| wrap-reverse | 宽度不足换行显示，但是是从下往上开始，也就是原本换行在下面的子项现在跑到上面。 |

#### flex-flow

flex-flow属性是flex-direction和flex-wrap的缩写，表示flex布局的flow流动特性。第一个值表示方向，第二个值表示换行，中间用空格隔开。<span style="color: #ff0000;">这个属性是加在<span style="font-weight: bold;">flex的容器</span>上的</span>。

```html
<style>
    #box2{ width:300px; height:300px; border:1px black solid; margin:20px auto; display: flex; flex-flow: column wrap;}
    #box2 div{ width:50px; height:50px; color:white; line-height: 50px; text-align: center; background:red;}
</style>
<body>
    <div id="box2">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>1</div>
        <div>2</div>
    </div>
</body>
```

#### justify-content

justify-content属性决定了主轴方向上子项的对齐和分布方式。主轴就是flex-direction设置的方向的那条轴。<span style="color: #ff0000;">这个属性是加在<span style="font-weight: bold;">flex的容器</span>上的</span>。

| 取值          | 含义                                                         |
| ------------- | ------------------------------------------------------------ |
| flex-start    | 默认值，表现为起始位置对齐。                                 |
| flex-end      | 表现为结束位置对齐。                                         |
| center        | 表现为居中对齐。                                             |
| space-between | 表现为两端对齐。between是中间的意思，意思是多余的空白间距只在元素中间区域分配。 |
| space-around  | around是环绕的意思，意思是每个flex子项两侧都环绕互不干扰的等宽的空白间距，最终视觉上边缘两侧的空白只有中间空白宽度一半。 |
| space-evenly  | evenly是匀称、平等的意思。也就是视觉上，每个flex子项两侧空白间距完全相等。 |

需要注意的是，当元素比较多的时候，如果没有设置自动换行，那么元素之间可能是没有空隙的，如果设置了自动换行，那么会优先将上面填满，下面的会遵从设置的对齐方式。

![image-20210228135148676](note_image/image-20210228135148676.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box3 {
            width: 300px;
            height: 300px;
            border: 1px black solid;
            margin: 20px auto;
            display: flex;
            justify-content: space-evenly;
        }

        #box3 div {
            width: 50px;
            height: 50px;
            color: white;
            line-height: 50px;
            text-align: center;
            background: red;
        }
    </style>
</head>

<body>
    <div id="box3">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
</body>

</html>
```

#### align-items

align-items中的items指的就是flex子项们，因此align-items指的就是flex子项们相对于flex容器在侧轴方向上的对齐方式。如果flex-direction设置的值为row，那么次轴就是column。还需要注意的是，这个属性是针对一条主轴中子项的对齐方式。<span style="color: #ff0000;">这个属性是加在<span style="font-weight: bold;">flex的容器</span>上的</span>。

| 取值       | 含义                                                         |
| ---------- | ------------------------------------------------------------ |
| stretch    | 默认值，flex子项拉伸。（当主轴为row未设置高度，或者主轴为column未设置宽） |
| flex-start | 表现为容器顶部对齐。                                         |
| flex-end   | 表现为容器底部对齐。                                         |
| center     | 表现为垂直居中对齐。                                         |

![image-20210228141656311](note_image/image-20210228141656311.png)

如上图所示，默认状态下，如果you多行，那么就会在次轴上平均分成多个区域，然后内容都会在自己的那一行进行对齐，这也是为什么在默认状态下，折行后会有很大的空隙。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    #box4 {
        width: 300px;
        height: 300px;
        border: 1px black solid;
        margin: 20px auto;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        align-items: center;
    }

    #box4 div {
        width: 50px;
        background: red;
    }
</style>

<body>
    <div id="box4">
        <div>测试文本</div>
        <div>测试文本测试文本</div>
        <div>测试文本测试文本测试文本</div>
        <div>测试文本</div>
        <div>测试文本</div>
        <div>测试文本测试文本</div>
        <div>测试文本测试文本测试文本</div>
        <div>测试文本</div>
        
    </div>
</body>

</html>
```

#### align-content

align-content可以看成和justify-content是相似且对立的属性，如果所有flex子项只有一行，则align-content属性是没有任何效果的。这个属性需要和上面的align-items区分好，这个属性是针对每条主轴之间的关系。<span style="color: #ff0000;">这个属性是加在<span style="font-weight: bold;">flex的容器</span>上的</span>。

| 取值          | 含义                                                         |
| ------------- | ------------------------------------------------------------ |
| stretch       | 默认值。每一行flex子元素都等比例拉伸。例如，如果共两行flex子元素，则每一行拉伸高度是50%。 |
| flex-start    | 表现为起始位置对齐。                                         |
| flex-end      | 表现为结束位置对齐。                                         |
| center        | 表现为居中对齐。                                             |
| space-between | 表现为两端对齐。                                             |
| space-around  | 每一行元素上下都享有独立不重叠的空白空间。                   |
| space-evenly  | 每一行元素都完全上下等分。                                   |

这里只演示部分效果，这里设置了align-items: flex-start;：

![image-20210228143538178](note_image/image-20210228143538178.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    #box4 {
        width: 300px;
        height: 300px;
        border: 1px black solid;
        margin: 20px auto;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        align-items: flex-start;
        align-content: flex-end;
    }

    #box4 div {
        width: 50px;
        background: red;
    }
</style>

<body>
    <div id="box4">
        <div>测试文本</div>
        <div>测试文本测试文本</div>
        <div>测试文本测试文本测试文本</div>
        <div>测试文本</div>
        <div>测试文本</div>
        <div>测试文本测试文本</div>
        <div>测试文本测试文本测试文本</div>
        <div>测试文本</div>
        
    </div>
</body>

</html>
```

<span style="color: #ff0000;">以上的属性是加在<span style="font-weight: bold;">flex的容器</span>上的</span>。

### flex布局：作用在子容器上的

| 属性        | 含义                                                         |
| ----------- | ------------------------------------------------------------ |
| order       | 可以通过设置order改变某一个flex子项的排序位置。<br />所有flex子项的默认order属性值是0。 |
| flex-grow   | 属性中的grow是扩展的意思，扩展的就是flex子项所占据的宽度，<br />扩展所侵占的空间就是除去元素外的剩余的空白间隙。默认值为0。 |
| flex-shrink | 属性中的shrink是“收缩”的意思，<br />flex-shrink主要处理当flex容器空间不足时候，单个元素的收缩比例。默认值是1。 |
| flex-basis  | flex-basis定义了在分配剩余空间之前元素的默认大小。           |
| flex        | flex属性是flex-grow，flex-shrink和flex-basis的缩写。         |
| align-self  | align-self指控制单独某一个flex子项的垂直对齐方式。           |

#### order

可以通过设置order改变某一个flex子项的排序位置。所有flex子项的默认order属性值是0。如果小于0，那么就会往前排，如果大于0，就会往后排。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box {
            width: 300px;
            height: 300px;
            border: 1px black solid;
            margin: 20px auto;
            display: flex;
        }

        #box div {
            width: 50px;
            height: 50px;
            color: white;
            line-height: 50px;
            text-align: center;
            background: red;
        }

        #box div:nth-child(2) {
            order: 1;
        }

        #box div:nth-child(3) {
            order: -1;
        }
    </style>
</head>
<body>
    <div id="box">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
    </div>
</body>

</html>
```

![image-20210228145855884](note_image/image-20210228145855884.png)



















