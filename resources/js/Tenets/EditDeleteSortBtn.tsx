import React, { useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { HandleEdit, HandleDelete } from './index';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import applyAxios from '../CustomHooks/applyAxios';

type Props = {
  handleEdit: HandleEdit;
  tenet: App.Tenet;
  handleDelete: HandleDelete;
  total: number;
};
const EditDeleteSortBtn = ({
  handleEdit,
  tenet,
  handleDelete,
  total,
}: Props) => {
  const [order, setOrder] = React.useState<string>('');

  const orders = [];

  for (let i = 1; i <= total; i++) {
    orders.push(i);
  }

  useEffect(() => {
    setOrder(tenet.order.toString());
  }, [tenet]);

  const handleChangeOrder = (event: SelectChangeEvent) => {
    setOrder(event.target.value);
    applyAxios(
      {
        url: '/tenet/change-order/' + tenet.id,
        method: 'patch',
        data: {
          order: event.target.value,
        },
      },
      function () {
        window.location.reload();
      }
    );
  };

  return (
    <>
      <FormControl sx={{ display: 'inline-block' }}>
        <InputLabel id="demo-simple-select-label">Ord</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={order}
          label="Order"
          onChange={handleChangeOrder}
          sx={{ width: 60 }}
        >
          {orders &&
            orders.map((order) => (
              <MenuItem value={order} key={order}>
                {order}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <EditIcon
        sx={{ cursor: 'pointer', mt: 2, display: 'inline-block' }}
        onClick={() => handleEdit(tenet)}
      />
      <DeleteIcon
        sx={{ cursor: 'pointer', mt: 2, display: 'inline-block' }}
        onClick={() => handleDelete(tenet)}
      />
    </>
  );
};

export default EditDeleteSortBtn;
