

interface BlogItem {
    title: string;
    writeTime: string;
    content: string;
}
function BlogItem(blog: BlogItem) {
    return <div className="flex mb-[20px] text-[#ccc] hover:text-blue-500 ">
        <h1>{blog.title}</h1>
        <p className="ml-[20px]">{blog.writeTime}</p>
    </div>
}

export default function Blog() {
    const blogList = [
        {
            year: 2025,
            blogs: [
                {
                    title: '这是第一篇博客',
                    writeTime: '2025-04-10',
                    content: '这是第一篇博客的内容'
                },
                {
                    title: '这是第二篇博客',
                    writeTime: '2025-04-10',
                    content: '这是第二篇博客的内容'
                }
            ]
        },

    ];
    const BgYear = () => {
        return <div>
            {blogList.map((blog) => {
                return (
                    <div key={blog.year} className="mt-[30px] relative min-h-[200px]">
                        <div className="absolute text-[128px] tracking-[10px] font-bold text-transparent [-webkit-text-stroke:1px_rgba(170,170,170,0.3)]"
                        >{blog.year}</div>
                        <div className="pt-[80px]"></div>
                        {blog.blogs.map((blog) => {
                            return <BlogItem {...blog} key={blog.title} />
                        })}
                    </div>
                )
            })}
        </div>
    }
    return <div className="w-[75ch] mx-auto">
        <h1 className="text-[30px] font-bold">Blog</h1>
        <BgYear />
    </div>
}


