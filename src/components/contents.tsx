import React from "react"

const Contents = ({ contents }) => {
    return (<div>
        {contents.map((content, i: number) => {
            return <div class="container has-text-centered">

                <h2 class="subtitle">{content.title}</h2>

                <div
                    dangerouslySetInnerHTML={{ __html: content.html }}
                />
                <br /><br />
                <img alt="" src={content.image} />
                <br /><br /><br/><br/><br/><br/><br/>
            </div>

        })}
    </div>)
}

export default Contents


