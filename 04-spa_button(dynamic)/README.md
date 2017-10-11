# Webpack для сайта с SPA и динамической подгрузкой js файлов при клике на кнопки.

npm i :Импортировать необходимые модули.Зависимости указаны в файле package.json

set NODE_ENV=development&webpack
node server.js
ИЛИ
set NODE_ENV=production&webpack
node server.js

**require.ensure - позволяет динамически подсасывать .js файлы**

Плагин NoErrorsPlugin – не добавляет в сборку файлы с ошибками

set NODE_ENV=production  **СОЗДАЕТСЯ ГЛОБАЛЬНАЯ ПЕРЕМЕННАЯ ДЛЯ WINDOWS**<br />
webpack **ВЕБПАК СОБИРАЕТ С УЧЕТОМ УКАЗАННОЙ ГЛОБАЛЬНОЙ ПЕРЕМЕННОЙ WINDOWS**

set NODE_ENV=development  **СОЗДАЕТСЯ ГЛОБАЛЬНАЯ ПЕРЕМЕННАЯ ДЛЯ WINDOWS**<br />
webpack **ВЕБПАК СОБИРАЕТ С УЧЕТОМ УКАЗАННОЙ ГЛОБАЛЬНОЙ ПЕРЕМЕННОЙ WINDOWS**

http://127.0.0.1:3000/about