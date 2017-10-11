# Webpack с выборочным использованием функционала внешнего плагина

npm i :Импортировать необходимые модули.Зависимости указаны в файле package.json

set NODE_ENV=development&webpack<br />
node server.js

new webpack.ContextReplacementPlugin( /node_modules\/moment\/locale/, /ru|en-gb/)

Добавить к основному адресу /public - повится функционал