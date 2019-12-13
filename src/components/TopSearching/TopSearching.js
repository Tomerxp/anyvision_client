import React from 'react'
import useApi from '../../shared/useApi'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: 20,
  },
  paper: {
    width: '50%',
    overflowX: 'auto',
    maxWidth: 450,
  },
})

function createData(name, count) {
  return { name, count }
}

const TopSearching = () => {
  const topSearching = useApi('/charts/top')
  const classes = useStyles()

  const rows = topSearching.map(searchEntry =>
    createData(searchEntry._id, searchEntry.count),
  )

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Search Term</TableCell>
              <TableCell align="right">Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

export default TopSearching
