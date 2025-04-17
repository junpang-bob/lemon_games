import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface CodeProps {
    inline?: boolean;
    className?: string;
    children?: React.ReactNode;
}

export default function BlogArticle() {
    const [content, setContent] = useState('')
    const { id } = useParams()
    useEffect(() => {
        fetch(`/posts/${id}.md`)
            .then(res => res.text())
            .then(text => setContent(text))
    }, [])

    return (
        <article className="mt-[60px] prose prose-invert max-w-none">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mb-4" {...props} />,
                    h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mb-3" {...props} />,
                    h3: ({ node, ...props }) => <h3 className="text-xl font-bold mb-2" {...props} />,
                    p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
                    ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4" {...props} />,
                    ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-4" {...props} />,
                    li: ({ node, ...props }) => <li className="mb-2" {...props} />,
                    blockquote: ({ node, ...props }) => (
                        <blockquote className="border-l-4 border-gray-600 pl-4 italic my-4" {...props} />
                    ),
                    code: ({ inline, className, children, ...props }: CodeProps) => {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                style={tomorrow}
                                language={match[1]}
                                PreTag="div"
                                className="rounded-lg my-4"
                                {...props}
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code className="bg-gray-800 rounded px-2 py-1 text-sm" {...props}>
                                {children}
                            </code>
                        )
                    },
                    img: ({ node, ...props }) => (
                        <img className="rounded-lg my-4 max-w-full" {...props} />
                    ),
                    a: ({ node, ...props }) => (
                        <a className="text-blue-400 hover:text-blue-300 underline" {...props} />
                    ),
                    table: ({ node, ...props }) => (
                        <table className="min-w-full border-collapse my-4" {...props} />
                    ),
                    th: ({ node, ...props }) => (
                        <th className="border border-gray-600 px-4 py-2 bg-gray-800" {...props} />
                    ),
                    td: ({ node, ...props }) => (
                        <td className="border border-gray-600 px-4 py-2" {...props} />
                    )
                }}
            >
                {content}
            </ReactMarkdown>
        </article>
    )
}
