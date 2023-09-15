"use client"

import { TbBrandSpotify } from "react-icons/tb"
import useSWR from "swr"

import fetcher from "@/lib/fetcher"

interface Data {
  album: string
  albumImageUrl: string
  artist: string
  isPlaying: true
  songUrl: string
  title: string
}
export const NowPlaying = () => {
  const { isLoading, data }: any = useSWR("/api/now-playing", fetcher, {
    refreshInterval: 10 * 1000,
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="hidden max-w-xs items-center gap-x-1 md:flex md:gap-x-2.5">
      <a
        href={`https://open.spotify.com/user/neverwas333333333`}
        target="_blank"
        rel="noreferrer"
      >
        <TbBrandSpotify className="h-4 w-4" />
      </a>
      {data?.isPlaying ? (
        <div className="flex gap-x-1 whitespace-nowrap md:gap-x-2.5">
          <a href={data.songUrl} target="_blank" rel="noreferrer">
            {data.title}
          </a>
          <span> - </span>
          <span>{data.artist}</span>
        </div>
      ) : (
        <div>Not playing</div>
      )}
    </div>
  )
}
