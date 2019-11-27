
const utils = {
    extractContents: function (data, contents) {
        const { markdownRemark: { frontmatter } } = data

        const pageContents = frontmatter.contents.map(content => content.content).map(name => contents.find(content => content.title == name))

        return pageContents
    },
    isExternalLink: function (link: string) {
        return link.substring(0, 4) == "http"
    }
}

export default utils
