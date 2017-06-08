const { FuseBox } = require('fuse-box')
const { WebIndexPlugin, CSSPlugin, ImageBase64Plugin, PostCSSPlugin } = require('fuse-box')

const fuse = FuseBox.init({
    homeDir: 'src',
    plugins: [
        CSSPlugin(),
        WebIndexPlugin({
            title: 'Mithril HN',
            template: 'src/index.html'
        }),
        ImageBase64Plugin({ useDefault: true })
    ],
    output: 'dist/$name.js'
})
fuse.dev(/* options here*/)

fuse.bundle('app').watch().hmr().instructions(`>index.ts`)

fuse.run()
