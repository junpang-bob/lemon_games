
import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
export default function BlogArticle() {
    const [content, setContent] = useState('')

    useEffect(() => {
        // 加载本地或远程 Markdown
        fetch('/posts/test.md')
            .then(res => res.text())
            .then(text => setContent(text))
    }, [])
    return <div className="mt-[60px]">
        <h1>BlogArticle</h1>
        <ReactMarkdown>
            {content}
        </ReactMarkdown>
    </div>
}



