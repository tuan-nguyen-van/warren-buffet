import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import EachTenet from './EachTenet';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useAxios from '../CustomHooks/useAxios';

export type HandleEdit = (tenet: App.Tenet) => void;

export type HandleDelete = (tenet: App.Tenet) => void;

const Tenets = () => {
  const [openModal, setOpenModal] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [tenetTypes, setTenetTypes] = useState<App.TenetTypes>();
  const [type, setType] = useState('');
  const [typeError, setTypeError] = useState(false);
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState(false);
  const [tenets, setTenets] = useState<App.Tenets>();
  const [updateDestroyTenetId, setUpdateDestroyTenetId] = useState(0);
  const [showBtn, setShowBtn] = useState({
    create: true,
    update: false,
    delete: false,
  });

  useEffect(() => {
    useAxios({ method: 'get', url: '/tenet-types' }, function (response) {
      const tenetTypes: App.TenetTypes = response.data;
      setTenetTypes(tenetTypes);
    });
  }, []);

  useEffect(() => {
    useAxios({ method: 'get', url: '/tenets' }, function (response) {
      const tenets: App.Tenets = response.data;
      setTenets(tenets);
    });
  }, []);

  const handleClickCreate = () => {
    setOpenModal(true);
    setShowBtn({
      create: true,
      update: false,
      delete: false,
    });
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleCreate = () => {
    !type ? setTypeError(true) : setTypeError(false);
    !description ? setDescriptionError(true) : setDescriptionError(false);

    if (type && description) {
      useAxios(
        {
          method: 'post',
          url: '/tenets',
          data: {
            type,
            description,
          },
        },
        function (response) {
          const tenets: App.Tenets = response.data;
          setTenets(tenets);
          setOpenModal(false);
        }
      );
    }
  };

  const handleEdit: HandleEdit = (tenet) => {
    setShowBtn({
      create: false,
      update: true,
      delete: false,
    });
    setOpenModal(true);
    setType(tenet.type);
    setDescription(tenet.description);
    setUpdateDestroyTenetId(tenet.id);
  };

  const handleUpdate = () => {
    useAxios(
      {
        method: 'put',
        url: '/tenets/' + updateDestroyTenetId,
        data: {
          type,
          description,
        },
      },
      function (response) {
        const tenets: App.Tenets = response.data;
        setTenets(tenets);
        setOpenModal(false);
      }
    );
  };

  const handleDelete: HandleDelete = (tenet) => {
    setShowBtn({
      delete: true,
      create: false,
      update: false,
    });
    setOpenModal(true);
    setType(tenet.type);
    setDescription(tenet.description);
    setUpdateDestroyTenetId(tenet.id);
  };

  const handleDestroy = () => {
    useAxios(
      { method: 'delete', url: '/tenets/' + updateDestroyTenetId },
      function (response) {
        const tenets: App.Tenets = response.data;
        setTenets(tenets);
        setOpenModal(false);
      }
    );
  };

  return (
    <div style={{ width: '100%', textAlign: 'center', marginTop: 40 }}>
      <Typography variant="h5">Stock Tenets</Typography>
      <Button
        variant="contained"
        startIcon={<AddBoxIcon />}
        sx={{ float: 'right', mr: 4, mb: 3 }}
        onClick={handleClickCreate}
      >
        Create New Tenet
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tenets &&
              Object.keys(tenets).map((tenetType, i) => (
                <EachTenet
                  tenetTypes={tenetTypes}
                  tenets={tenets[tenetType as keyof App.Tenets]}
                  key={i}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        fullScreen={fullScreen}
        open={openModal}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          {tenetTypes && Object.keys(tenetTypes) && (
            <FormControl variant="standard" sx={{ minWidth: 250 }}>
              <InputLabel id="tenet-types">Tenet Types</InputLabel>
              <Select
                labelId="tenet-types"
                id="tenet-types"
                label="Tenet Types"
                defaultValue=""
                value={type}
                onChange={(e) => setType(e.target.value)}
                error={typeError}
                disabled={showBtn.delete}
              >
                {Object.keys(tenetTypes).map((type, i) => (
                  <MenuItem value={type} key={i}>
                    {tenetTypes[type as keyof App.TenetTypes]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          <TextField
            label="Tenet Description"
            sx={{ width: '100%', mt: 2, minWidth: 350 }}
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            error={descriptionError}
            disabled={showBtn.delete}
          />
        </DialogContent>
        <DialogActions sx={{ mb: 1 }}>
          {showBtn.delete && (
            <Button
              variant="contained"
              startIcon={<DeleteForeverIcon />}
              onClick={handleDestroy}
              color="error"
            >
              Delete
            </Button>
          )}
          {showBtn.create && (
            <Button
              variant="contained"
              startIcon={<AddBoxIcon />}
              onClick={handleCreate}
            >
              Create
            </Button>
          )}
          {showBtn.update && (
            <Button
              variant="contained"
              startIcon={<EditIcon />}
              onClick={handleUpdate}
            >
              Update
            </Button>
          )}
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Tenets;
