import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import useAxios from '../../CustomHooks/useAxios';

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id?: number;
  tableDatas: App.GrowthRate.TableData[];
  setTableDatas: React.Dispatch<
    React.SetStateAction<App.GrowthRate.TableData[]>
  >;
};

const DeleteYearDataDialog = ({
  open,
  setOpen,
  id,
  tableDatas,
  setTableDatas,
}: Props) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = () => {
    useAxios(
      { method: 'delete', url: '/financial-metrics/' + id },
      function () {
        setOpen(false);
        setTableDatas(tableDatas.filter((tableData) => tableData.id !== id));
      }
    );
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Are you really want to delete this year data?
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleAgree}>Agree</Button>
        <Button onClick={handleClose}>Disagree</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteYearDataDialog;
