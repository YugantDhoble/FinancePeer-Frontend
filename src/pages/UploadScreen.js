import React, { useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import axios from 'axios';
import {url} from '../utils/baseurl';
import M from 'materialize-css';
import ReactSpinner from '../components/ReactSpinner';

const UploadScreen = () => {
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (file) => {
    if (file.length > 0) {
      const formData = new FormData();
      formData.append('jsonFile', file[0]);
      setLoading(true);
      try {
        const res = await axios
        .post(`${url}/user/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setLoading(false);
        M.toast({ html: res.data.msg });
      } catch(err) {
        setLoading(false);
        console.log(err);
        M.toast({ html: 'Something went wrong' });
      }
      
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 l8 m8 offset-l2 offset-m2'>
          {!loading && (
            <DropzoneArea
              onChange={handleFileChange}
              acceptedFiles={['application/json']}
              maxFileSize={4194304}
              filesLimit={1}
            />
          )}
          {loading && <ReactSpinner size={55} />}
        </div>
      </div>
    </div>
  );
};

export default UploadScreen;
