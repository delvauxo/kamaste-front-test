import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useRedirectLogUser = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);

    useEffect(() => {
        if (user.token && user.isAdmin === false) {
            navigate('/');
        }
    });
};

export const useRedirectNotAdmin = () => {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.isAdmin) {
            navigate('/');
        }
    });
};

export const useRedirectAdmin = () => {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (user.isAdmin) {
            navigate('/admin');
        }
    });
};