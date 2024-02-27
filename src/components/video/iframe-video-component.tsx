export const IframeVideoComponent = async ({
  videoUrl,
}: {
  videoUrl: string
}) => {
  // //   const src = await getYoutubeVideoSrc()

  return (
    <iframe
      width="560"
      height="315"
      title="Youtube video player"
      // //   src={src}
      src={videoUrl}
      allowFullScreen
    />
  )
}
