import Image from "next/image"
import type { TwitterComponents } from "react-tweet"

export const components: TwitterComponents = {
  AvatarImg: (props) => <Image {...props} alt="avatar" />,
  MediaImg: (props) => <Image {...props} fill unoptimized alt="tweet image" />,
}
