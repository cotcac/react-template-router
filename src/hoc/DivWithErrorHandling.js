import React from 'react';
const withErrorHandling = WrappedComponent => ({ loading, children }) => {
  return (
    <WrappedComponent>
      {loading.loading && <p>Loading....</p>}
      {loading.error && <div className="error-message">Oops! Something went wrong!</div>}
      {children}
    </WrappedComponent>
  );
};
const DivWithErrorHandling = withErrorHandling(({ children }) => <div>{children}</div>);

export default DivWithErrorHandling