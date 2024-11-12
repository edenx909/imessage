const Toast = (toastError) => {
  return (
    <div className="fixed bottom-10 right-10">
      <p>{toastError.message} TEST</p>
    </div>
  );
};

export default Toast;
