---
sidebar_position: 1
---

# ارسال تکی

برای ارسال یک پیام به یک نفر از این متد استفاده شود.

## ساختار URL

- Method Get

```
https://example.com/api/v1/APIKEY/send
```

### پارامتر های ورودی :

| name     |         | type                 | description                                |
| -------- | ------- | -------------------- | ------------------------------------------ |
| sender   | ضروری   | number               | شماره‌ای که از آن می خواهید پیام ارسال شود |
| message  | ضروری   | string               | متن پیام                                   |
| receptor | ضروری   | string               | شماره گیرنده پیام. مثال : 09121212121      |
| date     | اختیاری | string : Y-m-d H:i:s | اگر می خواهید پیام در آینده ارسال شود      |

### خروجی :

- موفقیت آمیز :

```
"data":{
    "message_id" : 55800454-fe52-44b3-9c44-43c87d6f29b2,
    'status' : کد وضعیت پیام,
    'statustext' : متن وضعیت پیام,
}
```

- خطا

```
"error":{
    'status' : کد وضعیت خطا,
    "message" : متن خطا,
}
```

## مثال :

```
https://example.com/api/v1/APIKEY/send?sender=5000212&message=hello&receptor=09121212121

```
