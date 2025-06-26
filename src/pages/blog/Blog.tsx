import { Outlet, useNavigate, useParams } from 'react-router-dom'

interface BlogItem {
  title: string
  writeTime: string
  route: string
}
function BlogItem(blog: BlogItem) {
  const navigate = useNavigate()
  return (
    <div
      className="relative z-20 flex items-baseline mb-[20px] text-[18px] text-[rgba(255,255,255,0.5)] hover:text-white cursor-pointer "
      onClick={() => {
        navigate(`/home/blog/${blog.route}`)
      }}
    >
      <h1>{blog.title}</h1>
      <p className="ml-[40px] text-[16px]">{blog.writeTime}</p>
    </div>
  )
}

export default function Blog() {
  const { id } = useParams()
  const blogList = [
    {
      year: 2025,
      blogs: [
        {
          title: '如何优化pixi大规模渲染动态sprite',
          writeTime: '2025-04-10',
          route: 'pixiImprove',
        },
        // {
        //     title: '如何使用rust编写webassembly做高性能计算',
        //     writeTime: '2025-03-10',
        //     route: 'test'
        // }
      ],
    },

  ]
  const BgYear = () => {
    return (
      <div>
        {blogList.map((blog) => {
          return (
            <div key={blog.year} className="mt-[30px] relative z-10 min-h-[200px]">
              <div className="absolute -z-1 text-[128px] tracking-[10px] font-bold text-transparent [-webkit-text-stroke:1px_rgba(170,170,170,0.2)]">
                {blog.year}
              </div>
              <div className="pt-[80px]"></div>
              {blog.blogs.map((blog) => {
                return <BlogItem key={blog.route} {...blog} />
              })}
            </div>
          )
        })}
      </div>
    )
  }
  const Content = id ? <Outlet /> : <BgYear />
  return (
    <div className="w-[75ch] mx-auto">
      <h1 className="text-[30px] font-bold">Blog</h1>
      {Content}
    </div>
  )
}
