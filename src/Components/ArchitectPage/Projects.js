import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: '50px 0',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  oneRow: {
    background: 'linear-gradient(90deg, #E0E3EB 0%, rgba(63,81,181,1)  100%)',
  },
  oneRowText: {
    color: '#000',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  rowProjectName: {
    borderRight: '1px solid rgba(224, 224, 224, 1)',
  },
}));

const ProjectRow = (props) => {
  const classes = useStyles();
  const items = props.data.map((item, index) => (
    <TableRow key={index}>
      <TableCell className={classes.rowProjectName} align="center" component="th" scope="row">
        {item.text}
      </TableCell>
      <TableCell align="center">{item.date}</TableCell>
    </TableRow>
  ));
  return items;
};

const Projects = (props) => {
  const classes = useStyles();
  return (
    <>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.oneRow}>
            <TableCell className={classes.oneRowText} align="center">{props.column.columnOne}</TableCell>
            <TableCell className={classes.oneRowText} align="center">{props.column.columnTwo}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <ProjectRow data={props.data} />
        </TableBody>
      </Table>
    </Paper>
    </>
  );
};
export default Projects;
