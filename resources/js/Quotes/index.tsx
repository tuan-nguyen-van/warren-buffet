import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';

const Quotes = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [openModal, setOpenModal] = useState(false);
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState(false);
  const [author, setAuthor] = useState('');
  const [authorError, setAuthorError] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };
  const [quotes, setQuotes] = useState<App.Quotes.Data[]>();
  const [btnsModal, setBtnsModal] = useState({
    create: true,
    update: false,
    delete: false,
  });
  const [editDeleteId, setEditDeleteId] = useState(0);

  const handleCreate = () => {
    if (!description) {
      setDescriptionError(true);
    }
    if (!author) {
      setAuthorError(true);
    }
    if (description && author) {
      axios
        .post('/quotes', { description, author })
        .then(function (response) {
          const data: App.Quotes.Data[] = response.data;
          setQuotes(data);
          setOpenModal(false);
        })
        .catch(function (response) {
          console.log(response);
        });
    }
  };

  useEffect(() => {
    axios
      .get('/quotes')
      .then(function (response) {
        const data: App.Quotes.Data[] = response.data;
        setQuotes(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleUpdate = () => {
    axios
      .put('/quotes/' + editDeleteId, {
        description,
        author,
      })
      .then(function (response) {
        const data: App.Quotes.Data[] = response.data;
        setQuotes(data);
        setOpenModal(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDelete = () => {
    axios
      .delete('/quotes/' + editDeleteId)
      .then(function (response) {
        const data: App.Quotes.Data[] = response.data;
        setQuotes(data);
        setOpenModal(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div style={{ width: '100%', textAlign: 'center', marginTop: 40 }}>
      <Typography variant="h5">Famous Quotes</Typography>
      <Button
        variant="contained"
        startIcon={<AddBoxIcon />}
        sx={{ float: 'right', mr: 4, mb: 3 }}
        onClick={() => {
          setOpenModal(true);
          setBtnsModal({ update: false, create: true, delete: false });
          setAuthor('');
          setDescription('');
        }}
      >
        Create New Quotes
      </Button>

      <Grid container sx={{ textAlign: 'left' }}>
        {quotes &&
          quotes.map((quote) => (
            <React.Fragment key={quote.id}>
              <Grid item xs={2} lg={1} sx={{ mt: 3 }}>
                <EditIcon
                  sx={{ cursor: 'pointer' }}
                  onClick={() => {
                    setOpenModal(true);
                    setBtnsModal({
                      update: true,
                      create: false,
                      delete: false,
                    });
                    setEditDeleteId(quote.id);
                    setAuthor(quote.author);
                    setDescription(quote.description);
                  }}
                />{' '}
                <DeleteIcon
                  sx={{ cursor: 'pointer' }}
                  onClick={() => {
                    setOpenModal(true);
                    setBtnsModal({
                      update: false,
                      create: false,
                      delete: true,
                    });
                    setEditDeleteId(quote.id);
                    setAuthor(quote.author);
                    setDescription(quote.description);
                  }}
                />
              </Grid>
              <Grid item xs={10} lg={11} sx={{ mt: 3, fontSize: '17px' }}>
                {quote.description} -
                <span
                  style={{ fontStyle: 'italic' }}
                >{` ${quote.author} `}</span>{' '}
                -
              </Grid>
            </React.Fragment>
          ))}
      </Grid>

      <Dialog
        open={openModal}
        onClose={handleClose}
        fullScreen={fullScreen}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <TextField
            label="Description"
            sx={{ width: '100%', mt: 2, minWidth: 500 }}
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            error={descriptionError}
            disabled={btnsModal.delete}
          />
          <TextField
            label="Author"
            sx={{ width: '100%', mt: 2, minWidth: 500 }}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            error={authorError}
            disabled={btnsModal.delete}
          />
        </DialogContent>
        <DialogActions sx={{ mb: 1 }}>
          {btnsModal.create && (
            <Button
              variant="contained"
              startIcon={<AddBoxIcon />}
              onClick={handleCreate}
            >
              Create New
            </Button>
          )}
          {btnsModal.update && (
            <Button
              variant="contained"
              startIcon={<EditIcon />}
              onClick={handleUpdate}
            >
              Update
            </Button>
          )}
          {btnsModal.delete && (
            <Button
              variant="contained"
              startIcon={<DeleteForeverIcon />}
              color="error"
              onClick={handleDelete}
            >
              Delete
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

export default Quotes;
