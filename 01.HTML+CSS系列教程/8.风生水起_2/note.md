# 风生水起——2

### 响应式布局

利用媒体查询，即media queries，可以针对不同的媒体类型定义不同的样式，从而实现响应式布局 。

![image-20210310214418069](note_image/image-20210310214418069.png)

响应式布局的设置方法主要有两种，一种是通过style来设置，还有一种是通过`<link>`标签来设置。

设置响应式布局可以设置媒体的类型，目前常用的媒体类型主要有以下几种，一般情况下，我们使用all即可：

| 取值   | 含义                                 |
| ------ | ------------------------------------ |
| all    | 用于所有设备。                       |
| print  | 用于打印机和打印预览。               |
| screen | 用于电脑屏幕，平板电脑，智能手机等。 |
| speech | 应用于屏幕阅读器等发声设备。         |

设置响应式布局，通常有以下几种条件：

- 媒体类型
- and、not
- min-width、max-width
- orientation:portrait（竖屏）、orientation:landscape（横屏）

比如要设置一个大于500px的响应式样式：

```html
<style>
    div {
        height: 100px;
        width: 100px;
        background-color: aqua;
    }
    @media all and (min-width:700px) {
        div {
            background-color: yellow;
        }
    }
</style>
```

设置一个大于500px小于700px的响应式样式：

```html
<style>
    div {
        height: 100px;
        width: 100px;
        background-color: aqua;
    }

    @media all and (min-width:500px) and (max-width:700px) {
        #box {
            background: blue;
        }
    }
</style>
```

设置小于500px的样式：

```html
<style>
    div {
        height: 100px;
        width: 100px;
        background-color: aqua;
    }

    @media not all and (min-width:500px) {
        #box {
            background: blue;
        }
    }
</style>
```

设置竖屏和横屏：

```html
<style>
    div {
        height: 100px;
        width: 100px;
        background-color: aqua;
    }

    @media all and (orientation:portrait) {
        #box {
            background: blue;
        }
    }

    @media all and (orientation:landscape) {
        #box {
            background: yellow;
        }
    }
</style>
```

需要注意的是，如果设置多个尺寸，写在后面的css要比写在前面的css优先级高，比如里面用的都是min-width，那么min-width为500的要写在前面，而min-width为700的要写在后面。此外，基本样式要写在最前面，media响应式样式要写在后面。

响应式布局常见的修改样式，一般会修改display，float还有width等。

文件代码位置：[src/1_media.html](./src/1_media.html)













