import { signIn } from "@/auth";
import { Button } from "@chakra-ui/react";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <Button colorPalette="blue" type="submit">
        Sign in
      </Button>
    </form>
  );
}
