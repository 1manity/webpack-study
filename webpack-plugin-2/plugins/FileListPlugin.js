class FileListPlugin {
    constructor(filename = 'list.txt') {
        this.filename = filename
    }
    apply(compiler) {
        compiler.hooks.emit.tap('FileListPlugin', (compilation) => {
            var list = []
            for (const key in compilation.assets) {
                const content = `name: ${key}
size: ${compilation.assets[key].size()/1000}KB
`
                list.push(content)
            }
            var str = list.join('\n')
            compilation.assets[filename] = {
                source: () => {
                    return str
                },
                size: () => {
                    return str.length
                }
            }
        })

    }
}

module.exports = FileListPlugin
