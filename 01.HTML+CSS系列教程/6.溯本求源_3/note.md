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









































