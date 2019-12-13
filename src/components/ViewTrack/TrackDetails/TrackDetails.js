import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import formatFields from './FormatFields'

const useStyles = makeStyles({
  paper: {
    width: 'auto',
    overflowX: 'auto',
    maxWidth: 450,
    textTransform: 'capitalize',
  },
})

const TrackDetails = props => {
  const classes = useStyles()
  const formattedTrackDetails = formatFields(props)

  return (
    <Paper className={classes.paper}>
      <Table aria-label="simple table">
        <TableBody>
          {formattedTrackDetails.map(trackDetail => (
            <TableRow key={trackDetail.field}>
              <TableCell component="th" scope="row">
                {trackDetail.field}
              </TableCell>
              <TableCell align="right">{trackDetail.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default TrackDetails
