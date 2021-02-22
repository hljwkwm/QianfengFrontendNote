# 溯本求源_3

### 1、文字阴影

文字的阴影属性为text-shadow，格式如下：`text-shadow: x y blur color,  x y blur color, ...;`。

x和y代表偏移量，x为正数为往右，y为整数为往下，blur为模糊大小，color为颜色。同一个属性可以设置多个阴影效果。如果没有设置阴影的颜色，那么阴影的默认颜色和文字颜色相同。

```css
 div{ font-size:50px; color:red; text-shadow: 10px 10px 10px blue, -10px -10px 10px green;}
```

**火焰字：**

```css
div
{ 
    font-size:60px; 
    color:red; 
    text-shadow:0 0 4px white,0 -5px 4px #ff3,2px -10px 6px #fd3,-2px -15px 11px #f80,2px -25px 18px #f20;
}
```

![image-20210222093750235](note_image/image-20210222093750235.png)

代码文件位置：[src/01_文字阴影.html](./src/01_文字阴影.html)

### 2、盒子阴影

盒子阴影的属性为box-shadow，格式如下：`box-shadow: x y blur spread color inset, x y blur spread color inset, ...;`。

x，y，blur和color同文字阴影；spread表示扩展，可以让阴影在原有的基础上，向外扩展多少；inset为内阴影，默认情况下为外阴影，如果想使用外阴影，不需要写任何值，但是如果写了outset，阴影就会失效。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    .box{ width:200px; height:200px; background:red; margin: 100px;
        box-shadow: 10px 10px 10px 5px blue , 10px 10px 10px 5px green inset;
    }
    </style>
</head>
<body>
    <div class="box"></div>
</body>
</html>
```

代码文件位置：[src/02_盒子阴影.html](./src/02_盒子阴影.html)

**盒子阴影练习：**

小米官网划入会浮动并有阴影效果：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    ul{ list-style: none;}
    li{ float:left; margin:50px; cursor: pointer; position: relative; top: 0; transition: .5s; border-radius: 3px;}
    li:hover{ top:-3px; box-shadow: 0px 5px 10px 3px #ccc;}
    </style>
</head>
<body>
    <ul>
        <li>
            <img src="./img/mi_1.png" alt="">
        </li>
        <li>
            <img src="./img/mi_2.png" alt="">
        </li>
    </ul>
</body>
</html>
```

代码文件位置：[src/03_小米官网浮动效果.html](./src/03_小米官网浮动效果.html)

### 3、遮罩

遮罩的属性为mask，目前还mask还不是通用属性，需要加上浏览器前缀，格式如下：

`-webkit-mask: url repeat x y / width height, url repeat x y / width height, ...;`

url为引入的遮罩图片，一般为镂空图片，有像素的地方为显示区域，镂空的地方不会显示， repeat是是否平铺，x和y表示起始位置，可以是数字也可以是单词，width和height表示宽高。遮罩的效果如下：

![image-20210222111232268](note_image/image-20210222111232268.png)

注意：如果直接以文件的形式打开，可能无法正常显示图片。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .mask {
            width: 300px;
            height: 300px;
            background: url('./img/girl.jpg');
            -webkit-mask: url('./img/car.png') no-repeat center center / 200px 200px, 
            url('./img/love.png') no-repeat left center / 100px 100px, 
            url('./img/love.png') no-repeat right center / 100px 100px;
            transition: .5s;
        }

        .mask:hover {
            -webkit-mask: url('./img/love.png') no-repeat center center / 100px 100px;
        }
    </style>
</head>

<body>
    <div class="mask">

    </div>
</body>

</html>

```

代码文件位置：[src/04_mask遮罩.html](./src/04_mask遮罩.html)

























