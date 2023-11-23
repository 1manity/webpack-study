class MyPlugin {
    apply(compiler) {
        console.log('MyPlugin start!')
        compiler.hooks.done.tap('MyPlugin', (compilation, callback) => {
        })
    }
}

module.exports = MyPlugin
