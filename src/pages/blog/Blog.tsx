

interface BlogItem {
    title: string;
    writeTime: string;
    route: string;
}
function BlogItem(blog: BlogItem) {
    return <div className="relative z-20 flex mb-[20px] text-[18px] text-[rgba(255,255,255,0.5)] hover:text-white cursor-pointer ">
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
                    title: '如何优化pixi大规模渲染动态sprite',
                    writeTime: '2025-04-10',
                    route: '1'
                },
                {
                    title: '如何使用rust编写webassembly做高性能计算',
                    writeTime: '2025-03-10',
                    route: '2'
                }
            ]
        },

    ];
    const BgYear = () => {
        return <div>
            {blogList.map((blog) => {
                return (
                    <div key={blog.year} className="mt-[30px] relative z-10 min-h-[200px]">
                        <div className="absolute -z-1 text-[128px] tracking-[10px] font-bold text-transparent [-webkit-text-stroke:1px_rgba(170,170,170,0.2)]"
                        >{blog.year}</div>
                        <div className="pt-[80px]"></div>
                        {blog.blogs.map((blog) => {
                            return <BlogItem key={blog.route} {...blog} />
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


