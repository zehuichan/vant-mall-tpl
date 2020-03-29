## AddressList API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| value | 当前默认地址 | Object | - |
| list | 地址列表 | Array | [] |
| disabled | 适合开启选择模式，值为 `false` 会派发 `select` 事件 | Boolean | true |
| switchable | 是否显示CheckBox | Boolean | true |
| checkedColor | CheckBox选择颜色 | String | #01c2c3 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| select | 选择回调 | data, index |
| edit | 编辑回调 | data, index |
| delete | 删除回调 | data, index |
