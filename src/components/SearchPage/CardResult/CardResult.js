import React from 'react'
import moment from 'moment'
import { navigate } from '@reach/router'
import { imageFormatter } from '../../../shared/utils'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    maxWidth: 450,
    minWidth: 300,
    flex: '1 0 20%',
    boxSizing: 'border-box',
    margin: 10,
  },
  cardActionArea: {
    height: '100%',
    maxHeight: '250px',
  },
})

const CardResult = ({
  trackName,
  artistName,
  trackTimeMillis,
  artworkUrl100,
  trackId,
  collectionId,
}) => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea
        className={classes.cardActionArea}
        onClick={() => navigate(`/track/${trackId || collectionId}`)}
      >
        <CardMedia
          component="img"
          alt={trackName}
          height="140"
          image={imageFormatter(artworkUrl100)}
          title={trackName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {artistName} - {trackName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {trackTimeMillis && moment.utc(trackTimeMillis).format('mm:ss')}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardResult
