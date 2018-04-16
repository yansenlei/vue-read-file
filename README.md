# vue-read-file

> 一个简单易用的文件读取组件

## Using

### Install
```bash
# npm
npm install vue-read-file
```

### Import
```javascript
import ReadFile from 'vue-read-file'
```

### Template
```html
<read-file v-model="value" :accept="accept" :position="left"></read-file>
```

### Options
| Name     | Description                      | required |
| -------- | -------------------------------- | ------- |
| value    | -                                | true |
| accept   | 文件类型限制, 格式: ".txt"         | false |
| position | 按钮位置, 可选: "left"、"center" | false |

## Build Setup

``` bash
# install dependencies
npm install

# build for production with minification
npm run build
```
