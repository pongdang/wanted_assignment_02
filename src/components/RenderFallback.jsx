import { ErrorAlert } from './ErrorAlert';

export function RenderFallback({ error, children, reset }) {
  const resetHandler = () => {
    reset();

    if (window.location.pathname === '/') {
      return;
    }

    window.location.href = '/';
  };

  return (
    <>
      <ErrorAlert errorMessage={error.message} reset={resetHandler} />
      {children}
    </>
  );
}
