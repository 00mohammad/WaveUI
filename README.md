# Wave UI - Tailwind CSS v4

پروژه Wave UI - رابط کاربری مدرن با Tailwind CSS نسخه 4

## ساختار پروژه

```
WaveUI/
├── src/
│   └── input.css          # فایل Tailwind اصلی
├── dist/
│   └── output.css         # فایل CSS کامپایل‌شده
├── index.html             # صفحه HTML اصلی
├── tailwind.config.js     # تنظیمات Tailwind
├── postcss.config.js      # تنظیمات PostCSS
└── package.json           # وابستگی‌ها و اسکریپت‌ها
```

## نصب و راه‌اندازی

### 1️⃣ نصب وابستگی‌ها
\`\`\`bash
npm install
\`\`\`

### 2️⃣ توسعه (Development)
\`\`\`bash
npm run dev
\`\`\`
- Tailwind CSS را به صورت خودکار کامپایل می‌کند
- فایل‌ها را مراقبت می‌کند و تغییرات را بروزرسانی می‌کند

### 3️⃣ ساخت برای تولید (Production)
\`\`\`bash
npm run build
\`\`\`
- CSS را فشرده‌سازی می‌کند
- برای استقرار آماده می‌کند

### 4️⃣ پیش‌نمایش
\`\`\`bash
npm run preview
\`\`\`
- وب‌سایت را در پورت 8000 مشاهده می‌کنید

## ویژگی‌ها

✅ Tailwind CSS v4 - آخرین نسخه
✅ پشتیبانی متن راست (RTL) - فارسی
✅ Responsive Design - تمام دستگاه‌ها
✅ Dark Mode آماده - می‌توان فعال کرد
✅ تنظیمات شخصی‌سازی شده

## رنگ‌های سفارشی

\`\`\`javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',
      secondary: '#8B5CF6',
    },
  },
}
\`\`\`

## نکات مهم

- HTML فایل را باز کنید و شروع کنید!
- تمام فایل‌های HTML را در \`content\` قرار دهید
- رنگ‌ها و فونت‌ها را در \`tailwind.config.js\` سفارشی کنید

---

حالا شما می‌توانید شروع کنید! 🚀
