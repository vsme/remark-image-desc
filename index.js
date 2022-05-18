import { visit } from 'unist-util-visit'

export default function embedImages () {
  return (tree, file, done) => { 
    visit(tree, 'image', (node, index, parent) => {
      if (node.url && node.title) {
        parent.children.length == 1 && parent.children.push({
          type: 'html',
          value: `<span class="img-desc"> ${node.title} </span>`
        })
      }
    })

    done()
  }
}
