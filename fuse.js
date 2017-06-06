const { FuseBox } = require('fuse-box')
const { WebIndexPlugin, CSSPlugin } = require('fuse-box')

const fuse = FuseBox.init({
    homeDir: 'src',
    plugins: [WebIndexPlugin(), CSSPlugin()],
    output: 'dist/$name.js'
})
fuse.dev(/* options here*/)

fuse.bundle('app').watch().hmr().instructions(`>index.ts`)

fuse.run()
