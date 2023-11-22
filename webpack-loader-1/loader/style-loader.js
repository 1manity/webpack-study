module.exports = function (sourceCode) {
    // console.log(`style.innerText = \`${sourceCode}\``)
    return `var style = document.createElement('style');
    style.innerText = \`${sourceCode}\`;
    document.head.appendChild(style);`;
}
