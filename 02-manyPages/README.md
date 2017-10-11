# Webpack для сайта с несколькими страницами (точками входа).

npm i :Импортировать необходимые модули.Зависимости указаны в файле package.json

set NODE_ENV=development&webpack
ИЛИ
set NODE_ENV=production&webpack

**set NODE_ENV=development&webpack - ВЕБПАК СОБИРЕТ ОБЫЧНЫЙ ФАЙЛЫ .js**<br />
**set NODE_ENV=production&webpack - ВЕБПАК СОБИРЕТ МИНИМИЗИРОВАННЫЕ UglifyJsPlugin ПЛАГИНОМ ФАЙЛЫ .js**

Плагин NoErrorsPlugin – не добавляет в сборку файлы с ошибками<br />
Плагин CommonsChunkPlugin – убирает ИЗ РАЗНЫХ ТОЧЕК ВХОДА (файлов) одинаковый код и помещает его в один общий файл<br />
В файл commons.js можно добавлять и СВОЙ код, к которому добавится общий код

set NODE_ENV=production  **СОЗДАЕТСЯ ГЛОБАЛЬНАЯ ПЕРЕМЕННАЯ ДЛЯ WINDOWS**<br />
webpack **ВЕБПАК СОБИРАЕТ С УЧЕТОМ УКАЗАННОЙ ГЛОБАЛЬНОЙ ПЕРЕМЕННОЙ WINDOWS**

set NODE_ENV=development  **СОЗДАЕТСЯ ГЛОБАЛЬНАЯ ПЕРЕМЕННАЯ ДЛЯ WINDOWS**<br />
webpack **ВЕБПАК СОБИРАЕТ С УЧЕТОМ УКАЗАННОЙ ГЛОБАЛЬНОЙ ПЕРЕМЕННОЙ WINDOWS**

Добавить к основному адресу public/home.html или public/about.html- повится функционал