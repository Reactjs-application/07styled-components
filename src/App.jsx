import { Button, TomotoButton, DarkButton } from "./layout/button";
import { Input, PasswordInput } from "./layout/input";

function App() {
  return (
    <div className="app">
      <Button variant="outline">Button</Button>
      <Button>Button</Button>
      <Button as="a" href="/">
        Link Button
      </Button>
      <DarkButton>Click Me</DarkButton>
      <TomotoButton>Button</TomotoButton>
      <Input $size="1rem" placeholder="Enter Username" />
      <PasswordInput placeholder="Enter Password" />
    </div>
  );
}

export default App;
