import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { HandleEdit, HandleDelete } from './index';
import EditDeleteBtn from './EditDeleteBtn';

type Props = {
  tenets: App.Tenet[];
  key: number;
  tenetTypes?: App.TenetTypes;
  handleEdit: HandleEdit;
  handleDelete: HandleDelete;
};

const EachTenet = ({ tenets, tenetTypes, handleEdit, handleDelete }: Props) => {
  const firstTenet = tenets[0];
  const remainedTenets = tenets.slice(1);
  return (
    <>
      {tenetTypes && (
        <TableRow>
          <TableCell rowSpan={tenets.length}>
            {tenetTypes[firstTenet.type as keyof App.TenetTypes]}
          </TableCell>
          <TableCell align="left">{firstTenet.description}</TableCell>
          <TableCell align="right">
            <EditDeleteBtn
              handleEdit={handleEdit}
              tenet={firstTenet}
              handleDelete={handleDelete}
            />
          </TableCell>
        </TableRow>
      )}

      {remainedTenets.map((tenet) => (
        <TableRow key={tenet.id}>
          <TableCell align="left">{tenet.description}</TableCell>
          <TableCell align="right">
            <EditDeleteBtn
              handleEdit={handleEdit}
              tenet={tenet}
              handleDelete={handleDelete}
            />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default EachTenet;
