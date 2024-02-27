import { list } from "@vercel/blob"

export const VideoComponent = async ({ filename }: { filename: string }) => {
  const { blobs } = await list({
    prefix: filename,
    limit: 1,
  })
  console.log(blobs)
  const { url } = blobs[0]

  return (
    <div className="flex h-[600px] items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        playsInline
        controls
        loop
        preload="none"
        aria-label="Video player"
      >
        <source src={url} type="video/mp4" />
        {`Your browser does not support the video tag.`}
      </video>
    </div>
  )
}
