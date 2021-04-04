/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const UpdateView = () => {
  return (
    <div className="container">
      <form>
        <div>
          <label htmlFor="formFileLg" className="form-label">
            choose your bin file
            <input
              className="form-control form-control-lg"
              id="formFileLg"
              type="file"
            />
          </label>
        </div>
      </form>
    </div>
  );
};
export default UpdateView;
