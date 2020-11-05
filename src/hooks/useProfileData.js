import React, {useState, useContext, useEffect} from 'react';
import {getProfileData} from '../services/MemberDetailsServices';
import UserContext from '../context/UserContext';

export default () => {
  const [profileData, setProfileData] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const userContext = useContext(UserContext);
  const fetchProfileData = (id) => {
    setLoading(true);
    console.log('ID', id);
    try {
      const data = getProfileData(id);
      setProfileData(JSON.parse(JSON.stringify(data)));
      setLoading(false);
    } catch (e) {
      console.log(e);
      setError('Cannot retrieve data please try again later');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileData(userContext.data.id);
  }, [userContext.data.id]);

  return [profileData, error, loading];
};
