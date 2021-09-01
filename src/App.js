import StepperForm from "./StepperForm";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";

function App() {
  return (
    <>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <StepperForm />
        </Paper>
      </Container>
    </>
  );
}

export default App;
