import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

function Login() {
  return (
    <main className="min-h-screen grid content-center justify-center gap-8 bg-grey-50 px-8">
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </main>
  );
}

export default Login;