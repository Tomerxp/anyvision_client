import React from 'react'
import { Player as VideoPlayer } from 'video-react'

import {
  isEmptyObject,
  extractFileExtension,
  imageFormatter,
} from '../../shared/utils'
import useApi from '../../shared/useApi'
import TrackDetails from './TrackDetails/TrackDetails'
import NotFound from '../NotFound/NotFound'

import { CircularProgress } from '@material-ui/core'
import './ViewTrack.scss'
import 'video-react/dist/video-react.css'

const fileExtensionToPlayer = {
  m4a: VideoPlayer,
  m4v: VideoPlayer,
}

const ViewTrack = ({ trackId }) => {
  const { state: trackData, isLoading } = useApi(`/search/${trackId}`, {})

  if (isLoading) return <CircularProgress />

  if (isEmptyObject(trackData)) return <NotFound />

  const Media =
    fileExtensionToPlayer[extractFileExtension(trackData.previewUrl)]

  return (
    <div className="view-track">
      <div>
        {trackData.artistName} - {trackData.trackName}
      </div>
      <div className="media-info">
        <TrackDetails {...trackData} />
        {Media ? (
          <div className="media-player-wrapper">
            <Media
              src={trackData.previewUrl}
              poster={imageFormatter(trackData.artworkUrl100, 500, 900)}
              autoPlay
            />
          </div>
        ) : (
          <span>This item does not have any media to play</span>
        )}
      </div>
    </div>
  )
}

export default ViewTrack
