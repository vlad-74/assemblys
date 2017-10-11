# Webpack для сайта с одной страницей (1 точка входа).

npm i :Импортировать необходимые модули.Зависимости указаны в файле package.json

set NODE_ENV=development&webpack
ИЛИ
set NODE_ENV=production&webpack

**set NODE_ENV=development&webpack - ВЕБПАК СОБИРЕТ ОБЫЧНЫЙ ФАЙЛ build.js**<br />
**set NODE_ENV=production&webpack - ВЕБПАК СОБИРЕТ МИНИМИЗИРОВАННЫЙ UglifyJsPlugin ПЛАГИНОМ ФАЙЛ build.js**

**В build.js ФАЙЛ ВКЛЮЧЕНЫ home.js И welcome.js**

Файл package.json содержит следующие зависимости:
npm i webpack@1 -S
npm i babel-loader@5 -S
npm i babel-runtime@5 -S


set NODE_ENV=production  **СОЗДАЕТСЯ ГЛОБАЛЬНАЯ ПЕРЕМЕННАЯ ДЛЯ WINDOWS**<br />
webpack **ВЕБПАК СОБИРАЕТ С УЧЕТОМ УКАЗАННОЙ ГЛОБАЛЬНОЙ ПЕРЕМЕННОЙ WINDOWS**

set NODE_ENV=development  **СОЗДАЕТСЯ ГЛОБАЛЬНАЯ ПЕРЕМЕННАЯ ДЛЯ WINDOWS**<br />
webpack **ВЕБПАК СОБИРАЕТ С УЧЕТОМ УКАЗАННОЙ ГЛОБАЛЬНОЙ ПЕРЕМЕННОЙ WINDOWS**

Добавить к основному адресу home.html - повится функционал = https://webpackonepage.github.io/home.html
