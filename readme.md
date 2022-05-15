# remark image desc

This project can convert markdown img title into html description text.

此项目可以把 markdown 的 img title 转为 html 描述文字。

like：

```markdown
![alt](/imgs/demo.jpg "title")
```

change into

```html
<p>
  <img src="/imgs/demo.jpg" alt="alt" title="title">
</p>
<div class="img-desc">title</div>
```

There will be an extra html tag to display the title content

将会多出来一个 html 标签，展示 title 内容