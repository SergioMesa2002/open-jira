import {
  Card, CardActionArea, CardActions, CardContent, Typography
} from '@mui/material';

export const EntryCard = () => {
  return (
    <Card
      sx={{ marginBottom: 1 }}

    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            this is description
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 2 }}>
          <Typography variant={'body2'}>hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};