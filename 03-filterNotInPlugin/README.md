# Webpack с выборочным использованием функционала (NOT IN) внешнего плагина

npm i :Импортировать необходимые модули.Зависимости указаны в файле package.json

set NODE_ENV=development&webpack<br />
node server.js

new webpack.IgnorePlugin(/zh-|en/, /moment[\/\\]locale$/)

Добавить к основному адресу /public - повится функционал