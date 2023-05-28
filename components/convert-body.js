import parse from "html-react-parser"
import Image from "next/image"

export default function ConvertBody({ contentHTML }) {
    if (typeof contentHTML !== "string") {
        return null; // or handle the case in an appropriate way
    }
    const contentReact = parse(contentHTML, {
        replace: (node) => {
            if (node.name === "img") {
                const { src, alt, width, height } = node.attribs
                return (
                    <Image
                        layout="responsive"
                        src={src}
                        width={width}
                        height={height}
                        alt={alt}
                        sizes="(min-width:768px) 768px,100vw"
                    />
                )
            }
        },
    })
    return <>{contentReact}</>
}