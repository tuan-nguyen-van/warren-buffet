import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Tenet, HandleEdit, HandleDelete } from './index';

type Props = {
  handleEdit: HandleEdit;
  tenet: Tenet;
  handleDelete: HandleDelete;
};
const EditDeleteBtn = ({ handleEdit, tenet, handleDelete }: Props) => {
  return (
    <>
      <EditIcon sx={{ cursor: 'pointer' }} onClick={() => handleEdit(tenet)} />
      <DeleteIcon
        sx={{ cursor: 'pointer' }}
        onClick={() => handleDelete(tenet)}
      />
    </>
  );
};

export default EditDeleteBtn;
