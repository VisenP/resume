

export const Header = () => {
    return (
        <div tw={"flex justify-start w-full"}>
            <div tw={"flex-col mr-20 text-4xl font-semibold"}>
                <div tw={"mb-2"}>Hello,</div>
                <div>I'm Visen Pavlica</div>
            </div>
            <div tw={"mt-[-40px]"}>
                <img tw={"w-[200px] rounded-full border-solid border-[5px] scale-150"} src={"https://avatars.githubusercontent.com/u/59655758?s=400&u=6fe5f02083b88540457e1761a3bc62ddcbb4a90c&v=4"}/>
            </div>
        </div>
    )
}