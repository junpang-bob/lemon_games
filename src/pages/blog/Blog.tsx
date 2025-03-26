
export default function Blog() {

    const yearList = [
        2025,
        2024,
        2023,
        2022,
        2021,
        2020,
        2019,
    ]


    const BgYear = () => {
        return <div>
            {yearList.map((year) => {
                return (
                    <div key={year} className="mt-[30px] relative min-h-[200px]">
                        <div className="absolute text-[128px] tracking-[10px] font-bold text-transparent [-webkit-text-stroke:1px_rgba(170,170,170,0.3)]"
                        >{year}</div>
                        <div className="pt-[70px]">blog1</div>
                        <div>blog1</div>
                        <div>blog1</div>
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


