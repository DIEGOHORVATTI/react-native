import { Button, Text, TextInput } from 'react-native-paper';

import { Grid } from '../../components';

export const Home = () => {
  return (
    <Grid padding={10}>
      <Grid container>
        <Grid item alignItems="center">
          <Text variant="titleMedium">One Piece</Text>
        </Grid>
        <Grid item alignItems="center">
          <Text variant="titleMedium">É real</Text>
        </Grid>
      </Grid>

      <Grid container spacing={5}>
        <Grid item alignItems="center">
          <TextInput
            label="Email"
            style={{
              width: '100%'
            }}
          />
        </Grid>
        <Grid item alignItems="center">
          <TextInput
            label="Password"
            style={{
              width: '100%'
            }}
          />
        </Grid>
      </Grid>

      <Grid container>
        <Button
          style={{
            width: '100%'
          }}
          onPress={() => console.log('Pressed')}
        >
          Login
        </Button>
      </Grid>
    </Grid>
  );
};
