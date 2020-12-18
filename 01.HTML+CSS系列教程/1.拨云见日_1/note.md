## 拨云见日_1

### 1、什么是HTML、CSS？

HTML、CSS是做网站的编程语言，浏览器把代码解析后的样子就是我们看到的网站。如果想看到网站的原始代码，可以通过浏览器上点鼠标右键选择查看网页源代码。

一个网站是由多个网页组成的，每一个网页是一个`.html`文件，这个就好比是一个电视剧，每一集是一个`.mp4`文件。

### 2、VS Code编辑器

编辑网页，推荐使用VS code编辑器，该编辑器是微软公司开发的。VS Code的下载地址：https://code.visualstudio.com/。

**插件安装：**

初始的VS code是没有插件的，而且是英文，需要我们手动安装插件。可以打开VS code后，在最左面找到一排按钮，点击第五个，就是由几个小方框组成的一个图标，或者使用快捷键`Ctrl+Shift+X`打开扩展管理，在这里面搜索即可。

**推荐几个插件：**

语言包：Chinese (Simplified) Language Pack for Visual Studio Code

通过Chrome浏览：open in browser、view in browser

**自动换行：**

 设置：文件-> 首选项 -> 设置 -> word wrap

**简单使用：**

打开`VS Code`，按下`Ctrl+N`新建一个文件，然后保存为`01_demo.html`，在里面写上一句话，比如`hello world ！！！`，保存，然后双击该文件通过浏览器打开，这样就看到了我们刚才写的那句话。

文件位置：[src/01_demo.html](./src/01_demo.html)

**常用快捷键：**

`Ctrl+s`：保存
`Ctrl+a`：全选
`Ctrl+x`、`Ctrl+c`、`Ctrl+v`：剪切、复制、粘贴
`Ctrl+z`、`Ctrl+y`：撤销、前进
`Shift+end`：从头选中一行
`Shift+home`：从尾部选中一行
`Shift+alt+↓`：快速复制一行
`alt+↑或↓`：快速移动一行

练习快捷键文件：[src/02_vsCode.html](./src/02_vsCode.html)

### 3、Chrome浏览器

Chrome下载地址： https://www.google.cn/intl/zh-CN/chrome/

使用Chrome的好处是它的市场占有率和市场份额高，兼容性好，不易出错。百度统计浏览器市场份额： https://tongji.baidu.com/data/browser，2019年chrome的占有率约为68.88%。

### 4、深入了解网站开发

网站开发一般分为UI设计师、Web前段开发工程师和Web后端开发工程师，其中UI设计师主要为设计网站的整体布局样式以及如何交互等，Web前段开发工程师主要是将UI设计师制作的稿件以代码的形式表现在浏览器上，并将后端的数据展现出来。

### 5、 web三大核心技术

HTML，CSS，JavaScript。

网页主要由三部分组成： 结构（ Structure） 、 表现（ Presentation） 和行为（ Behavior）

- HTML —— 结构， 决定网页的结构和内容（ “是什么”）
- CSS —— 表现（ 样式） ， 设定网页的表现样式（ “什么样子”）
- JavaScript（ JS） —— 行为， 控制网页的行为（ “做什么”）

JavaScript功能演示：[src/03_核心技术.html](./src/03_核心技术.html)。通过JavaScript，我们就可以实现一个鼠标滑入文字，自动变色的一个效果。

### 6、HTML基本结构和属性

超文本标记语言(HyperText Markup Language)，标准通用标记语言下的一个应用。是网页制作必备的编程语言。

**超文本标记语言解释：**

- 超文本 : 文本内容 + 非文本内容 ( 图片、视频、音频等 )
- 标记 : <单词>

- 语言 : 编程语言

**标记：**

标记也叫做标签，如`<header>`、`<footer>`等。写法一般为两种，一种是单标签，如`<header/>`，还有一种是双标签，如`<header></header>`。

VS Code中创建标签的快捷键：单词 + tab键 -> <单词>。

 标签是可以上下排列，也可以组合嵌套。

HTML常见标签：http://www.html5star.com/manual/html5label-meaning/

![image-20201204105353055](note_image/image-20201204105353055.png)

标签的属性：来修饰标签的，设置当前标签的一些功能。格式：`<标签 属性="值" 属性2="值2">`

相关代码文件：[src/04_HTML语法.html](./src/04_HTML语法.html)

### 7、HTML初始代码

每个`html`文件都有的代码叫做初始代码，要符合`html`文件的规范写法，这样才符合`html`的规范，不会出现各种莫名其妙的错误。在VS Code中，可以使用`!+tab`键，快速的创建`html`的初始代码。

文件位置：[src/05_HTML初始代码.html](./src/05_HTML初始代码.html)

```html
<!-- 文档声明 : 告诉浏览器这是一个html文件 -->
<!DOCTYPE html>
<!-- html文件的最外层标签：包裹着所有html标签代码 lang="en"表示是一个英文网站 lang="zh-CN"表示一个中文网站 -->
<html lang="en">
<head>
    <!-- 元信息：是编写网页中的一些辅助信息 charset="UTF-8"国际编码，让网页不出现乱码的情况 -->
    <meta charset="UTF-8">
    <!-- 设置网页的标题 -->
    <title>Document</title>
</head>
<!--  显示网页内容的区域 -->
<body>
</body>
</html>
```







