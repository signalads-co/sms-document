---
sidebar_position: 1
id: my-home-doc
slug: /
---



# شروع
این راهنما جهت سهولت کار برنامه نویسانی که قصد استفاده از وب سرویس را دارند تهیه شده است. وب سرویس REST خدماتی مانند ارسال پیام، دریافت پیام، گزارش ارسال و .... را فراهم می کند.

آدرس وب سرویس از مسیر زیر قابل دسترسی است.

```
https://example.com/v1/APIKEY/METHOD
```

برای استفاده از REST API نیاز به یک API-KEY دارید که از پنل کاربری قابل دریافت است.

متد ها شامل :



### ارسال تکی

- send


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



<Tabs>
<TabItem value="php" label="PHP ">

```php
$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $value) {
  echo "$value <br>";
}
```

</TabItem>
<TabItem value="javascript">

```js
function helloWorld() {
  console.log('Hello, world!');
}
```

</TabItem>
<TabItem value="python">

```py
def hello_world():
  print 'Hello, world!'
```

</TabItem>
</Tabs>
````




### ارسال چندتایی

- sendArray

### ارسال نظیر به نظیر

- sendPair

### ارسال با ساختار از پیش تعریف شده

- sendPattern
