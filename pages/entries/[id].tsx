import { ChangeEvent, FC, useContext, useMemo, useState } from 'react';
import {
  Button, capitalize,
  Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel,
  FormLabel, Grid, IconButton, Radio,
  RadioGroup,
  TextField
} from '@mui/material';
import { GetServerSideProps } from 'next';
import { Layout } from '../../components/layouts';
import { DeleteOutline, SaveOutlined } from '@mui/icons-material';
import { EntryStatus } from '../../interfaces';
import { dbEntries } from '../../database';
import { IEntry } from '../../models';
import { EntriesContext } from '../../context/entries';
import { dateFunctions } from '../../utils';


const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

interface Props {
  entry: IEntry;
}


const EntryPage: FC<Props> = ({ entry }) => {

  const { updateEntry } = useContext(EntriesContext);

  const [inputValue, setInputValue] = useState(entry.description);
  const [status, setStatus] = useState<EntryStatus>(entry.status);
  const [touched, setTouched] = useState(false);

  const isNotValid = useMemo(() => inputValue.length <= 0 && touched,
    [inputValue, touched]);

  const onInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus);
  };

  const onSave = () => {
    if (inputValue.trim().length === 0) return;

    const updatedEntry: IEntry = {
      ...entry,
      status,
      description: inputValue
    };
    updateEntry(updatedEntry,true);
  };


  return (
    <Layout title={inputValue.substring(0, 20) + '...'}>
      <Grid
        container
        justifyContent={'center'}
        sx={{ marginTop: 2 }}
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
        >
          <Card>
            <CardHeader title={`Entry: ${inputValue}`}
                        subheader={`created ${dateFunctions.getFormatDistanceToNow(entry.createdAt)}`}/>

            <CardContent>
              <TextField
                sx={{
                  marginTop: 2,
                  marginBottom: 1
                }}
                placeholder={'New Entry'}
                fullWidth
                autoFocus
                multiline
                label={'new Entry'}
                value={inputValue}
                onChange={onInputValueChange}
                helperText={isNotValid && 'set a value'}
                onBlur={() => setTouched(true)}
                error={isNotValid}
              />
              <FormControl>
                <FormLabel>
                  Status:
                </FormLabel>
                <RadioGroup row value={status} onChange={onStatusChange}>
                  {
                    validStatus.map(option => (
                      <FormControlLabel
                        value={option}
                        key={option}
                        control={<Radio/>}
                        label={capitalize(option)}
                      />
                    ))
                  }
                </RadioGroup>
              </FormControl>
            </CardContent>

            <CardActions>
              <Button
                startIcon={<SaveOutlined/>}
                variant={'contained'}
                fullWidth
                onClick={onSave}
                disabled={inputValue.length <= 0}
              >
                Save
              </Button>
            </CardActions>

          </Card>
        </Grid>
      </Grid>

      <IconButton
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          backgroundColor: 'error.dark'
        }}
      >
        <DeleteOutline/>
      </IconButton>


    </Layout>
  );
};


export const getServerSideProps: GetServerSideProps = async ({ params }) => {

  const { id } = params as { id: string };

  const entry = await dbEntries.getEntryById(id);

  if (!entry) {
    return ({
      redirect: {
        destination: '/',
        permanent: false
      },
    });
  }

  return ({
    props: {
      entry
    }
  });
};


export default EntryPage;
