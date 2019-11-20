
const utils = {
    extractContents: function (data, contents) {
        const { markdownRemark: { frontmatter } } = data

        const pageContents = frontmatter.contents.map(content => content.content).map(name => contents.find(content => content.title == name))

        return pageContents
    }
}

export default utils
